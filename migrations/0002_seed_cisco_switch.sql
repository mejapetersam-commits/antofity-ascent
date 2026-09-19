-- Example catalogue item, requested as a first product to show the new
-- home-page + catalogue-detail flow working end to end.
-- Run this once in the Neon SQL Editor (or any Postgres client connected
-- to your Neon database) after 0001_catalogue_items.sql has been applied.
-- More items can be added the same way, or via the /admin/catalogue page.

insert into catalogue_items
  (name, description, price, category, image_url, in_stock, sort_order)
values (
  'Cisco C9200L-24P-4X-E Catalyst Switch',
  'Enterprise-grade Layer 2/3 access switch. 24x Gigabit PoE+ ports (370W PoE budget), '
  || '4x 10G SFP+ uplinks, 128 Gbps switching capacity, 802.1X security, and Cisco DNA '
  || 'Center management. Suited for offices, retail, schools, healthcare facilities and '
  || 'campus networks needing secure, high-speed, PoE-powered connectivity.',
  'KSh 419,900',
  'Networking',
  null,
  true,
  0
);
