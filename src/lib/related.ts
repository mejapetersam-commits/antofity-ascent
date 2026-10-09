import { getBrand } from "./brands";
import type { CatalogueItem } from "./catalogue-server";

const norm = (s: string | null | undefined) => (s ?? "").trim().toLowerCase();

/**
 * Items similar to `item`: same category and brand rank first, then same
 * category, then same brand. In-stock items are preferred within a tier.
 */
export function relatedItems(item: CatalogueItem, all: CatalogueItem[], limit = 6): CatalogueItem[] {
  const category = norm(item.category);
  const brand = getBrand(item);

  return all
    .filter((other) => other.id !== item.id)
    .map((other) => {
      const sameCategory = category !== "" && norm(other.category) === category;
      const sameBrand = brand !== "Other" && getBrand(other) === brand;
      const score = (sameCategory ? 2 : 0) + (sameBrand ? 1 : 0);
      return { other, score: score === 0 ? 0 : score + (other.inStock ? 0.5 : 0) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.other.id - b.other.id)
    .slice(0, limit)
    .map((x) => x.other);
}
