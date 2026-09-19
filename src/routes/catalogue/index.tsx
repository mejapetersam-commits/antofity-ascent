import { createFileRoute } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { getCatalogueItems, type CatalogueItem } from "@/lib/catalogue-server";

const title = "Catalogue | Antofity Concepts";
const description = "Browse hardware and equipment available from Antofity Concepts.";

export const Route = createFileRoute("/catalogue/")({
  loader: async () => {
    try {
      const items = await getCatalogueItems();
      return { items };
    } catch {
      // Table not migrated yet, or DB not configured — show the empty state.
      return { items: [] as CatalogueItem[] };
    }
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/catalogue" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: Catalogue,
});

function Catalogue() {
  const { items } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Equipment & Hardware."
        intro={
          items.length
            ? "Available hardware and equipment."
            : "Our product catalogue is on its way."
        }
      />

      {items.length === 0 ? (
        <Section tone="white">
          <div className="flex flex-col items-center gap-5 py-16 text-center">
            <PackageSearch className="size-10 text-gold" aria-hidden="true" />
            <p className="text-lg font-semibold text-foreground">Coming soon</p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              In the meantime, get in touch and we'll help you find what you need.
            </p>
          </div>
        </Section>
      ) : (
        <Section tone="white">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
