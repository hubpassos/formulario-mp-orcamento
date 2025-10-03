-- Create table for quote requests
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  procedures TEXT NOT NULL,
  project_details TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading all quote requests (for admin purposes later)
CREATE POLICY "Anyone can view quote requests"
ON public.quote_requests
FOR SELECT
USING (true);

-- Create index for better performance on created_at queries
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);