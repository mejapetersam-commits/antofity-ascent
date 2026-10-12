import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { CatalogueItem } from "@/lib/catalogue-server";
import { ProductCard } from "./ProductCard";

const MIN_TO_SCROLL = 7; // 6 or fewer fit in one row: show a static row instead of a loop
const MIN_PER_HALF = 10; // each half of the loop must be wider than the viewport
const PX_PER_SECOND = 40; // slow drift, right to left
const CARDS_PER_CLICK = 3;
const GAP_PX = 12; // matches gap-3

const cell =
  "relative w-40 shrink-0 transition-transform duration-300 ease-out hover:z-20 hover:scale-105 sm:w-44 lg:w-48 xl:w-52";

const arrowButton =
  "absolute top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-void/80 text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-void focus-visible:outline-2 focus-visible:outline-gold";

type Anim = { from: number; to: number; start: number; duration: number };

export function PromoCarousel({ items }: { items: CatalogueItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const halfRef = useRef<HTMLDivElement>(null);
  const state = useRef({ offset: 0, paused: false, anim: null as Anim | null });

  const scrolls = items.length >= MIN_TO_SCROLL;

  useEffect(() => {
    if (!scrolls) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const s = state.current;
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      if (s.anim) {
        const t = Math.min(1, (now - s.anim.start) / s.anim.duration);
        const eased = 1 - (1 - t) ** 3;
        s.offset = s.anim.from + (s.anim.to - s.anim.from) * eased;
        if (t >= 1) s.anim = null;
      } else if (!s.paused && !reduceMotion) {
        s.offset += PX_PER_SECOND * dt;
      }

      const half = halfRef.current?.offsetWidth ?? 0;
      if (half > 0 && trackRef.current) {
        const shown = ((s.offset % half) + half) % half;
        if (!s.anim) s.offset = shown; // keep the number small once not animating
        trackRef.current.style.transform = `translate3d(${-shown}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrolls]);

  if (!scrolls) {
    return (
      <div className="mt-10 flex flex-wrap gap-3 py-6">
        {items.map((item) => (
          <div key={item.id} className={`${cell} max-w-full`}>
            <ProductCard item={item} compact />
          </div>
        ))}
      </div>
    );
  }

  const repeats = Math.ceil(MIN_PER_HALF / items.length);
  const half = Array.from({ length: repeats }, (_, r) =>
    items.map((item) => ({ item, repeat: r > 0 })),
  ).flat();

  function go(direction: 1 | -1) {
    const s = state.current;
    const card = halfRef.current?.firstElementChild as HTMLElement | null;
    const step = ((card?.offsetWidth ?? 200) + GAP_PX) * CARDS_PER_CLICK * direction;
    s.anim = {
      from: s.offset,
      to: (s.anim?.to ?? s.offset) + step,
      start: performance.now(),
      duration: 450,
    };
  }

  const pause = (paused: boolean) => {
    state.current.paused = paused;
  };

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => pause(true)}
      onMouseLeave={() => pause(false)}
      onFocus={() => pause(true)}
      onBlur={() => pause(false)}
    >
      <button type="button" aria-label="Previous items" onClick={() => go(-1)} className={`${arrowButton} left-1`}>
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button type="button" aria-label="Next items" onClick={() => go(1)} className={`${arrowButton} right-1`}>
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div className="overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        <div ref={trackRef} className="flex w-max will-change-transform">
          {[false, true].map((isCopy) => (
            <div
              key={String(isCopy)}
              ref={isCopy ? undefined : halfRef}
              className="flex shrink-0 gap-3 pr-3"
            >
              {half.map(({ item, repeat }, i) => {
                const hidden = isCopy || repeat;
                return (
                  <div
                    key={`${item.id}-${i}`}
                    className={`marquee-item ${cell}`}
                    aria-hidden={hidden || undefined}
                    inert={hidden}
                  >
                    <ProductCard item={item} compact />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
