import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/primitives";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/company";

const AUTO_ADVANCE_MS = 6000;

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [api]);

  return (
    <>
      <SectionHeading dark eyebrow="Client feedback" title="What clients say." />

      <div className="relative mt-12 px-0 sm:px-12">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <figure className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
                  <Quote className="size-8 text-gold" aria-hidden="true" />
                  <blockquote className="text-lg leading-relaxed text-on-dark sm:text-xl">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="text-sm font-semibold uppercase tracking-[0.1em] text-gold">
                    {t.name}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-on-dark-muted/40 bg-transparent text-on-dark hover:bg-on-dark/10 hover:text-on-dark" />
          <CarouselNext className="border-on-dark-muted/40 bg-transparent text-on-dark hover:bg-on-dark/10 hover:text-on-dark" />
        </Carousel>
      </div>
    </>
  );
}
