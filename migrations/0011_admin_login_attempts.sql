-- Backs a per-IP rate limiter on the admin login endpoint.
create table if not exists admin_login_attempts (
  identifier text primary key,
  attempts integer not null default 0,
  window_start timestamptz not null default now()
);
