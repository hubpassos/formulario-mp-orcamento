import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface QuoteRequest {
  id: string
  created_at: string
  name: string
  phone: string
  location: string
  procedures: string
  project_details: string
  budget: string
  timeline: string
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    console.log('Webhook triggered with payload:', payload)

    const record = payload.record as QuoteRequest

    // Prepare data to send to n8n webhook
    const webhookData = {
      id: record.id,
      created_at: record.created_at,
      name: record.name,
      phone: record.phone,
      location: record.location,
      procedures: record.procedures,
      project_details: record.project_details,
      budget: record.budget,
      timeline: record.timeline,
    }

    console.log('Sending data to n8n webhook:', webhookData)

    // Send to n8n webhook
    const webhookResponse = await fetch('https://n8n.moveispassos.com.br/webhook-test/formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', await webhookResponse.text())
      throw new Error(`Webhook request failed with status ${webhookResponse.status}`)
    }

    console.log('Webhook sent successfully')

    return new Response(
      JSON.stringify({ success: true, message: 'Webhook notification sent' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in send-webhook-notification:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
