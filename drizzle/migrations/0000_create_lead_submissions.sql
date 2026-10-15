CREATE TABLE public.lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL CHECK (source IN ('readiness_audit', 'demo_request', 'booking')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 30),
  business_type text CHECK (business_type IS NULL OR char_length(business_type) <= 100),
  team_size text CHECK (team_size IS NULL OR char_length(team_size) <= 50),
  bottleneck text CHECK (bottleneck IS NULL OR char_length(bottleneck) <= 500),
  lead_volume text CHECK (lead_volume IS NULL OR char_length(lead_volume) <= 100),
  existing_tools text CHECK (existing_tools IS NULL OR char_length(existing_tools) <= 500),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  demo_type text CHECK (demo_type IS NULL OR char_length(demo_type) <= 100),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.lead_submissions TO service_role;
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX lead_submissions_created_at_idx ON public.lead_submissions (created_at DESC);