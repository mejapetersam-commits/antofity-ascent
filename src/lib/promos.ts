import type { CatalogueItem } from "./catalogue-server";

export type PromoFlag = "isSpecialOffer" | "isNewArrival" | "isFeatured" | "isLimitedStock";

export const promoCategories: {
  flag: PromoFlag;
  label: string;
  badge: string;
  eyebrow: string;
  title: string;
  intro: string;
}[] = [
  {
    flag: "isSpecialOffer",
    label: "Special Offer",
    badge: "Special Offer",
    eyebrow: "Special Offer",
    title: "Special Offer",
    intro: "Discounted hardware, while it lasts.",
  },
  {
    flag: "isNewArrival",
    label: "New Arrival",
    badge: "New Arrival",
    eyebrow: "New Arrival",
    title: "New Arrival",
    intro: "Just landed in stock.",
  },
  {
    flag: "isFeatured",
    label: "Featured Pick",
    badge: "Featured Pick",
    eyebrow: "Featured Pick",
    title: "Featured Pick",
    intro: "Hand-picked by our team.",
  },
  {
    flag: "isLimitedStock",
    label: "Limited Stock",
    badge: "Limited Stock",
    eyebrow: "Limited Stock",
    title: "Limited Stock",
    intro: "Running low. Get it before it's gone.",
  },
];

/** Flagged, in-stock items for a promo category (server order preserved). */
export function itemsForPromo(items: CatalogueItem[], flag: PromoFlag, limit = 4) {
  return items.filter((i) => i[flag] && i.inStock).slice(0, limit);
}
