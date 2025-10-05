-- Fix search_path security warning for trigger function
CREATE OR REPLACE FUNCTION trigger_webhook_on_quote_insert()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT;
BEGIN
  -- Get the Supabase URL and construct the function URL
  webhook_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/send-webhook-notification';
  
  -- Make async call to edge function
  PERFORM net.http_post(
    url := 'https://zunmgpsinjbpghbnlbsb.supabase.co/functions/v1/send-webhook-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'quote_requests',
      'record', row_to_json(NEW)
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';