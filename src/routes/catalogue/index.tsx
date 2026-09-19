import { createFileRoute, Link } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { getCatalogueItems, type CatalogueItem } from "@/lib/catalogue-server";
import { catalogueCategories } from "@/lib/company";
import { cn } from "@/lib/utils";

const title = "Catalogue | Antofity Concepts";
const description = "Browse hardware and equipment available from Antofity Concepts.";

type CatalogueSearch = { category?: string | undefined };

export const Route = createFileRoute("/catalogue/")({
  validateSearch: (search: Record<string, unknown>): CatalogueSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
  }),
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

function CategoryChips({ category }: { category?: string | undefined }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      <Link
        to="/catalogue"
        className={cn(
          "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
          !category
            ? "border-gold bg-gold text-void"
            : "border-border text-muted-foreground hover:border-gold hover:text-gold",
        )}
      >
        All
      </Link>
      {catalogueCategories.map((c) => (
        <Link
          key={c.value}
          to="/catalogue"
          search={{ category: c.value }}
          className={cn(
            "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
            category?.toLowerCase() === c.value.toLowerCase()
              ? "border-gold bg-gold text-void"
              : "border-border text-muted-foreground hover:border-gold hover:text-gold",
          )}
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}

function Catalogue() {
  const { items } = Route.useLoaderData();
  const { category } = Route.useSearch();

  const filtered = category
    ? items.filter((item) => item.category?.toLowerCase() === category.toLowerCase())
    : items;

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={category ? category : "Equipment & Hardware."}
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
          <CategoryChips category={category} />
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-16 text-center">
              <PackageSearch className="size-10 text-gold" aria-hidden="true" />
              <p className="text-lg font-semibold text-foreground">Nothing here yet</p>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                We're still adding items to {category}. In the meantime, get in touch and we'll help
                you find what you need.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </Section>
      )}

      <CtaBand />
    </>
  );
}
