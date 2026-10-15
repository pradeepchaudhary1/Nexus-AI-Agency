create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.handle_new_user_role()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.user_roles (user_id, role) values (new.id, 'user') on conflict do nothing;
  if lower(new.email) in ('pdagur698@gmail.com', 'thenexusaiagency@gmail.com') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_created_role after insert on auth.users for each row execute function public.handle_new_user_role();

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null check (category in ('update','document','demo','course','project','internal')),
  visibility text not null default 'public' check (visibility in ('public','client','internal')),
  tags text[] not null default '{}',
  bucket text,
  file_path text,
  file_name text,
  file_size bigint,
  mime_type text,
  external_url text,
  client_name text,
  industry text,
  problem text,
  solution text,
  outcome text,
  completion_date date,
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
grant select on public.resources to anon;
grant select, insert, update, delete on public.resources to authenticated;
grant all on public.resources to service_role;
alter table public.resources enable row level security;
create policy "Public sees listed resources" on public.resources for select to anon, authenticated
  using (archived = false and visibility in ('public','client'));
create policy "Admins manage resources" on public.resources for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create policy "Public read public-resources" on storage.objects for select to anon, authenticated using (bucket_id = 'public-resources');
create policy "Admins read resource files" on storage.objects for select to authenticated
  using (bucket_id in ('public-resources','client-resources','internal-files') and public.has_role(auth.uid(), 'admin'));
create policy "Admins upload resource files" on storage.objects for insert to authenticated
  with check (bucket_id in ('public-resources','client-resources','internal-files') and public.has_role(auth.uid(), 'admin'));
create policy "Admins delete resource files" on storage.objects for delete to authenticated
  using (bucket_id in ('public-resources','client-resources','internal-files') and public.has_role(auth.uid(), 'admin'));