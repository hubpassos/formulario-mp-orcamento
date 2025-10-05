-- Allow anonymous users to insert into quote_requests
CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon
WITH CHECK (true);
