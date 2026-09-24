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
    title: "Discounted hardware, while it lasts.",
    intro: "Reduced prices on selected equipment.",
  },
  {
    flag: "isNewArrival",
    label: "New Arrival",
    badge: "New Arrival",
    eyebrow: "New Arrival",
    title: "Just landed in stock.",
    intro: "The latest hardware added to our catalogue.",
  },
  {
    flag: "isFeatured",
    label: "Featured Pick",
    badge: "Featured Pick",
    eyebrow: "Featured Pick",
    title: "Hand-picked by our team.",
    intro: "Products our engineers recommend.",
  },
  {
    flag: "isLimitedStock",
    label: "Limited Stock",
    badge: "Limited Stock",
    eyebrow: "Limited Stock",
    title: "Running low. Get it before it's gone.",
    intro: "Small quantities remaining on these items.",
  },
];

/** Flagged, in-stock items for a promo category (server order preserved). */
export function itemsForPromo(items: CatalogueItem[], flag: PromoFlag, limit = 4) {
  return items.filter((i) => i[flag] && i.inStock).slice(0, limit);
}
