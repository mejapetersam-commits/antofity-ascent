import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import { ActionLink, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { Testimonials } from "@/components/site/Testimonials";
import { getCatalogueItems, type CatalogueItem } from "@/lib/catalogue-server";
import { itemsForPromo, promoCategories } from "@/lib/promos";

const title = "Antofity Concepts | ICT Solutions Company in Nairobi, Kenya";
const description =
  "Antofity Concepts delivers end-to-end ICT solutions in Kenya: network infrastructure, structured cabling, CCTV, IP telephony, hardware supply and managed IT services.";

export const Route = createFileRoute("/")({
  loader: async () => {
    try {
      const items = await getCatalogueItems();
      return { items: items.slice(0, 8), all: items };
    } catch {
      return { items: [] as CatalogueItem[], all: [] as CatalogueItem[] };
    }
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "keywords",
        content:
          "ICT solutions Kenya, ICT company Nairobi, IT infrastructure Kenya, managed IT services Kenya, network cabling Kenya, IP telephony Kenya, CCTV installation Kenya",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { items, all } = Route.useLoaderData();
  const promoSections = promoCategories
    .map((c) => ({ ...c, items: itemsForPromo(all, c.flag) }))
    .filter((c) => c.items.length > 0);
  // Alternate section backgrounds so stacked sections stay distinct.
  const toneAt = (i: number) => (i % 2 === 0 ? "white" : "light");

  return (
    <>
      {/* HERO */}
      <section className="surface-dark relative isolate flex items-center overflow-hidden pt-36 pb-14 sm:pt-40 md:pb-16">
        <img
          src={heroImage}
          alt="Enterprise data centre aisle with server racks and fibre cabling"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--void)_22%,color-mix(in_oklab,var(--void)_78%,transparent)_60%,color-mix(in_oklab,var(--graphite)_60%,transparent)_100%)]"
          aria-hidden="true"
        />
        <svg
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[46%] opacity-60 lg:block"
          viewBox="0 0 600 800"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M600 90H430l-40 40v120l-30 30H230M600 260H480l-30 30v90M600 430H360l-40 40v160l-30 30H80M600 560H520l-30 30v120"
            stroke="var(--gold)"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          <circle className="node-pulse" cx="230" cy="280" r="4" fill="var(--gold)" />
          <circle
            className="node-pulse"
            cx="450"
            cy="320"
            r="3"
            fill="var(--gold)"
            style={{ animationDelay: "0.6s" }}
          />
          <circle
            className="node-pulse"
            cx="80"
            cy="630"
            r="4"
            fill="var(--gold)"
            style={{ animationDelay: "1.2s" }}
          />
        </svg>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl reveal">
            <h1 className="max-w-md text-base font-medium leading-relaxed text-on-dark-muted sm:text-lg">
              Network infrastructure, hardware supply and managed IT for organizations that can't
              afford downtime.
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink to="/contact">
                Talk to us <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink to="/catalogue" variant="outlineLight">
                Our catalogue
              </ActionLink>
            </div>
          </div>
        </div>
        <div className="flow-line absolute inset-x-0 bottom-0 h-px bg-gold/10" aria-hidden="true" />
      </section>

      {promoSections.map((c, i) => (
        <Section key={c.flag} tone={toneAt(i)}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
            <ActionLink to="/catalogue" variant="outlineDark" size="sm">
              View full catalogue <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </Section>
      ))}

      {items.length > 0 ? (
        <Section tone={toneAt(promoSections.length)}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Catalogue"
              title="Hardware in stock, ready to ship."
              intro="A glance at what's currently available. Tap a product for full specs and pricing."
            />
            <ActionLink to="/catalogue" variant="outlineDark" size="sm">
              View full catalogue <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="dark">
        <Testimonials />
      </Section>

      <CtaBand />
    </>
  );
}
