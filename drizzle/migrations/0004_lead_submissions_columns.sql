-- Fixes: PGRST204 "Could not find the 'bottleneck' column of 'lead_submissions' in the schema cache".
-- Safe to run more than once: every statement only adds what is missing and never changes existing columns or rows.

-- 0) (optional) see what the table has now:
-- select column_name, data_type from information_schema.columns where table_schema='public' and table_name='lead_submissions' order by ordinal_position;

alter table public.lead_submissions add column if not exists idempotency_key text;
alter table public.lead_submissions add column if not exists client_ip_hash text;
alter table public.lead_submissions add column if not exists phone text;
alter table public.lead_submissions add column if not exists business_type text;
alter table public.lead_submissions add column if not exists team_size text;
alter table public.lead_submissions add column if not exists bottleneck text;
alter table public.lead_submissions add column if not exists lead_volume text;
alter table public.lead_submissions add column if not exists existing_tools text;
alter table public.lead_submissions add column if not exists message text;
alter table public.lead_submissions add column if not exists demo_type text;
alter table public.lead_submissions add column if not exists webhook_status text default 'pending';
alter table public.lead_submissions add column if not exists webhook_attempts integer not null default 0;
alter table public.lead_submissions add column if not exists webhook_last_error text;
alter table public.lead_submissions add column if not exists webhook_last_attempt_at timestamptz;
alter table public.lead_submissions add column if not exists webhook_sent_at timestamptz;

create unique index if not exists lead_submissions_idempotency_key_uidx
  on public.lead_submissions (idempotency_key) where idempotency_key is not null;

-- make PostgREST (Supabase API) see the new columns immediately
notify pgrst, 'reload schema';
