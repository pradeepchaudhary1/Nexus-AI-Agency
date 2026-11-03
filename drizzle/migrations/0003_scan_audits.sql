-- Step 2: store every real scan. RLS enabled with NO policies = only the server (service role) can read/write.
CREATE TABLE IF NOT EXISTS public.scan_audits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  url text NOT NULL,
  domain text NOT NULL,
  score integer NOT NULL CHECK (score BETWEEN 0 AND 100),
  grade text NOT NULL,
  lighthouse jsonb,
  audit jsonb NOT NULL,
  client_ip_hash text,
  unlocked_at timestamptz
);
ALTER TABLE public.scan_audits ENABLE ROW LEVEL SECURITY;
GRANT ALL ON public.scan_audits TO service_role;
CREATE INDEX IF NOT EXISTS scan_audits_ip_idx ON public.scan_audits (client_ip_hash, created_at DESC);
CREATE INDEX IF NOT EXISTS scan_audits_domain_idx ON public.scan_audits (domain, created_at DESC);
