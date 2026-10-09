import type { CatalogueItem } from "./catalogue-server";

/**
 * The catalogue has no brand column, so the brand is read from the product name.
 * To support a new brand, add it here (aliases are other words that imply the brand).
 */
const BRANDS: { name: string; aliases?: string[] }[] = [
  { name: "Cisco" },
  { name: "Ubiquiti", aliases: ["UniFi", "Airmax", "airFiber", "EdgeMax", "EdgeRouter", "UISP"] },
  { name: "MikroTik" },
  { name: "Huawei" },
  { name: "D-Link" },
  { name: "TP-Link" },
  { name: "Tenda" },
  { name: "Cambium" },
  { name: "Ruckus" },
  { name: "Dahua" },
  { name: "Hikvision" },
  { name: "Siemon" },
  { name: "Giganet" },
  { name: "FS" },
  { name: "Finisar" },
  { name: "Wi-Tek" },
  { name: "Starlink" },
  { name: "Microsoft", aliases: ["Windows"] },
  { name: "Shield" },
];

export const OTHER_BRAND = "Other";

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const matchers = BRANDS.map((b) => ({
  name: b.name,
  regex: new RegExp(`(^|[^a-z0-9])(${[b.name, ...(b.aliases ?? [])].map(escape).join("|")})(?![a-z0-9])`, "i"),
}));

export const knownBrandNames = BRANDS.map((b) => b.name);

/** Brand of an item: the one set in admin if any, else the earliest known brand in its name. */
export function getBrand(item: Pick<CatalogueItem, "name"> & { brand?: string | null }): string {
  const explicit = item.brand?.trim();
  if (explicit) {
    return knownBrandNames.find((n) => n.toLowerCase() === explicit.toLowerCase()) ?? explicit;
  }
  let best: { name: string; index: number } | null = null;
  for (const m of matchers) {
    const hit = m.regex.exec(item.name);
    if (hit && (best === null || hit.index < best.index)) best = { name: m.name, index: hit.index };
  }
  return best?.name ?? OTHER_BRAND;
}

export type BrandCount = { brand: string; count: number };

/** Brands present in the given items, most products first, "Other" always last. */
export function brandsOf(items: CatalogueItem[]): BrandCount[] {
  const counts = new Map<string, number>();
  for (const item of items) {
    const brand = getBrand(item);
    counts.set(brand, (counts.get(brand) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => {
      if (a.brand === OTHER_BRAND) return 1;
      if (b.brand === OTHER_BRAND) return -1;
      return b.count - a.count || a.brand.localeCompare(b.brand);
    });
}
