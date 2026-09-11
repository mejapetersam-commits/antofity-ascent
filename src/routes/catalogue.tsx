import { createFileRoute } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { getCatalogueItems, type CatalogueItem } from "@/lib/catalogue-server";

const title = "Catalogue | Antofity Concepts";
const description = "Browse hardware and equipment available from Antofity Concepts.";

export const Route = createFileRoute("/catalogue")({
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
              <article
                key={item.id}
                className="overflow-hidden rounded-sm border border-border bg-card shadow-card"
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
                <div className="p-6">
                  {item.category ? (
                    <p className="eyebrow text-muted-foreground">{item.category}</p>
                  ) : null}
                  <h3 className="mt-2 text-lg font-bold text-foreground">{item.name}</h3>
                  {item.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between">
                    {item.price ? (
                      <span className="text-sm font-bold text-gold">{item.price}</span>
                    ) : (
                      <span />
                    )}
                    {!item.inStock ? (
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                        Out of stock
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
