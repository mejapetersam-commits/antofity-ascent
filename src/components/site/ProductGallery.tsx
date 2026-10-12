import { ChevronLeft, ChevronRight, PackageSearch } from "lucide-react";
import { useEffect, useState } from "react";
import { toDirectImageUrl } from "@/lib/drive-image";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const key = images.join("|");

  useEffect(() => {
    setActive(0); // a different product (or edited images) starts on the first picture
  }, [key]);

  if (images.length === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-border bg-void">
        <PackageSearch className="size-12 text-gold/60" aria-hidden="true" />
      </div>
    );
  }

  const index = Math.min(active, images.length - 1);
  const go = (delta: number) => setActive((index + delta + images.length) % images.length);
  const arrow =
    "absolute top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-void/80 text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-void";

  return (
    <div>
      <div className="relative">
        <img
          src={toDirectImageUrl(images[index]!)}
          alt={images.length > 1 ? `${name} (picture ${index + 1} of ${images.length})` : name}
          className="w-full rounded-sm border border-border object-cover"
        />
        {images.length > 1 ? (
          <>
            <button type="button" aria-label="Previous picture" onClick={() => go(-1)} className={cn(arrow, "left-3")}>
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next picture" onClick={() => go(1)} className={cn(arrow, "right-3")}>
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              aria-label={`Show picture ${i + 1}`}
              aria-current={i === index}
              onClick={() => setActive(i)}
              className={cn(
                "overflow-hidden rounded-sm border-2 transition-colors",
                i === index ? "border-gold" : "border-border hover:border-gold/60",
              )}
            >
              <img src={toDirectImageUrl(src)} alt="" className="size-16 object-cover sm:size-20" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
