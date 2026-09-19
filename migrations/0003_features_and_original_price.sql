-- Adds support for a short bullet-point feature list and an optional
-- "was" price (so the product page can show a strikethrough price + savings,
-- like the Novatech reference screenshots).
-- Run this once in the Neon SQL Editor after 0001 and 0002.

alter table catalogue_items add column if not exists features text;
alter table catalogue_items add column if not exists original_price text;

comment on column catalogue_items.features is
  'Short bullet points, one per line (e.g. "24 PoE+ Gigabit ports"). Shown above the fold, separate from the long-form description.';
comment on column catalogue_items.original_price is
  'Optional "was" price, e.g. "KSh 425,000". If set and higher than price, the product page shows it struck through with the amount saved.';
