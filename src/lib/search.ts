import type { CatalogueItem } from "./catalogue-server";

/** Every whitespace-separated word must appear somewhere in the item's text. */
export function matchesQuery(item: CatalogueItem, query: string): boolean {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;
  const haystack = [item.name, item.category, item.description, item.features, item.price]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return tokens.every((t) => haystack.includes(t));
}
