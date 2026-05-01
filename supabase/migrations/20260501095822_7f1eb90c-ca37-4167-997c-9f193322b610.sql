CREATE TABLE public.pilot_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  email TEXT NOT NULL,
  language TEXT DEFAULT 'tr',
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a pilot request (public form)
CREATE POLICY "Anyone can submit pilot requests"
ON public.pilot_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public read access — only service role (edge functions / admin) can read
-- This protects submitters' contact info from being scraped