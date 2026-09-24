import type { CSSProperties } from "react";
import type { CatalogueItem } from "@/lib/catalogue-server";
import { ProductCard } from "./ProductCard";

const MIN_TO_SCROLL = 4; // fewer than this: show a static row instead of a loop
const MIN_PER_HALF = 6; // each half of the loop must be wider than the viewport
const SECONDS_PER_CARD = 6;

const cell =
  "relative w-72 shrink-0 transition-transform duration-300 ease-out hover:z-20 hover:scale-110";

export function PromoCarousel({ items }: { items: CatalogueItem[] }) {
  if (items.length < MIN_TO_SCROLL) {
    return (
      <div className="mt-10 flex flex-wrap gap-6 py-6">
        {items.map((item) => (
          <div key={item.id} className={`${cell} max-w-full`}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    );
  }

  const repeats = Math.ceil(MIN_PER_HALF / items.length);
  const half = Array.from({ length: repeats }, (_, r) =>
    items.map((item) => ({ item, repeat: r > 0 })),
  ).flat();
  const duration = half.length * SECONDS_PER_CARD;

  return (
    <div className="mt-10 overflow-x-auto overflow-y-hidden py-8 motion-safe:overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
      <div
        className="marquee-track flex"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {[false, true].map((isCopy) => (
          <div key={String(isCopy)} className="flex shrink-0 gap-6 pr-6">
            {half.map(({ item, repeat }, i) => {
              const hidden = isCopy || repeat;
              return (
                <div
                  key={`${item.id}-${i}`}
                  className={`marquee-item ${cell}`}
                  aria-hidden={hidden || undefined}
                  inert={hidden}
                >
                  <ProductCard item={item} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
