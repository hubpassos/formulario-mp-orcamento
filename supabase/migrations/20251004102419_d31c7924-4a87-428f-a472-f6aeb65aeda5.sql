-- Create trigger function to call webhook on new quote request
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on quote_requests table
DROP TRIGGER IF EXISTS on_quote_request_created ON quote_requests;
CREATE TRIGGER on_quote_request_created
  AFTER INSERT ON quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION trigger_webhook_on_quote_insert();
