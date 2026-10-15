ALTER TABLE public.lead_submissions
  ADD COLUMN idempotency_key uuid,
  ADD COLUMN client_ip_hash text,
  ADD COLUMN webhook_status text NOT NULL DEFAULT 'pending' CHECK (webhook_status IN ('pending','sent','failed')),
  ADD COLUMN webhook_attempts integer NOT NULL DEFAULT 0,
  ADD COLUMN webhook_last_error text,
  ADD COLUMN webhook_last_attempt_at timestamptz,
  ADD COLUMN webhook_sent_at timestamptz;
CREATE UNIQUE INDEX lead_submissions_idempotency_key_idx ON public.lead_submissions (idempotency_key) WHERE idempotency_key IS NOT NULL;
CREATE INDEX lead_submissions_ip_recent_idx ON public.lead_submissions (client_ip_hash, created_at DESC);
CREATE INDEX lead_submissions_webhook_pending_idx ON public.lead_submissions (webhook_status, created_at) WHERE webhook_status <> 'sent';