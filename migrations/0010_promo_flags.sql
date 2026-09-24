-- Adds four promo flags to catalogue items. Each drives its own home page
-- section (only shown when at least one in-stock item is flagged).
-- Run this once in the Neon SQL Editor BEFORE deploying the matching code.

alter table catalogue_items add column if not exists is_special_offer boolean not null default false;
alter table catalogue_items add column if not exists is_new_arrival boolean not null default false;
alter table catalogue_items add column if not exists is_featured boolean not null default false;
alter table catalogue_items add column if not exists is_limited_stock boolean not null default false;
