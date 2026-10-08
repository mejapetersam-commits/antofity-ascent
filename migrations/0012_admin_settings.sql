-- Stores the hashed admin password so it can be changed without redeploying.
-- (The app also creates this table automatically on first use.)
create table if not exists admin_settings (
  id integer primary key default 1 check (id = 1),
  password_hash text not null,
  updated_at timestamptz not null default now()
);
