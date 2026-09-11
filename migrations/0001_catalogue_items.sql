-- Run this once in the Neon SQL Editor (or any Postgres client connected
-- to your Neon database) before the catalogue admin page will work.

create table if not exists catalogue_items (
  id serial primary key,
  name text not null,
  description text,
  price text,
  category text,
  image_url text,
  in_stock boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
