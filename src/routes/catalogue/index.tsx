import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, PackageSearch } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { SearchInput } from "@/components/site/SearchInput";
import { matchesQuery } from "@/lib/search";
import { getCatalogueItems, type CatalogueItem } from "@/lib/catalogue-server";
import { catalogueCategories } from "@/lib/company";
import { brandsOf, getBrand } from "@/lib/brands";
import { cn } from "@/lib/utils";

const title = "Catalogue | Antofity Concepts";
const description = "Browse hardware and equipment available from Antofity Concepts.";

type CatalogueSearch = { category?: string | undefined; brand?: string | undefined };

export const Route = createFileRoute("/catalogue/")({
  validateSearch: (search: Record<string, unknown>): CatalogueSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
    brand: typeof search["brand"] === "string" ? search["brand"] : undefined,
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

function CategoryChips() {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      <Link
        to="/catalogue"
        className="rounded-full border border-gold bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-void transition-colors"
      >
        All
      </Link>
      {catalogueCategories.map((c) => (
        <Link
          key={c.value}
          to="/catalogue"
          search={{ category: c.value }}
          className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}

function BrandChips({
  category,
  brand,
  brands,
}: {
  category: string;
  brand?: string | undefined;
  brands: { brand: string; count: number }[];
}) {
  const chip =
    "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors";
  const active = "border-gold bg-gold text-void";
  const idle = "border-border text-muted-foreground hover:border-gold hover:text-gold";
  const total = brands.reduce((n, b) => n + b.count, 0);
  return (
    <div className="mb-10">
      <Link
        to="/catalogue"
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground hover:text-gold"
      >
        <ArrowLeft className="size-3.5" aria-hidden="true" /> All categories
      </Link>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        Brands in {category}
      </p>
      <div className="flex flex-wrap gap-2">
        <Link
          to="/catalogue"
          search={{ category }}
          className={cn(chip, !brand ? active : idle)}
        >
          All brands ({total})
        </Link>
        {brands.map((b) => (
          <Link
            key={b.brand}
            to="/catalogue"
            search={{ category, brand: b.brand }}
            className={cn(chip, brand?.toLowerCase() === b.brand.toLowerCase() ? active : idle)}
          >
            {b.brand} ({b.count})
          </Link>
        ))}
      </div>
    </div>
  );
}

function Catalogue() {
  const { items } = Route.useLoaderData();
  const { category, brand } = Route.useSearch();
  const [query, setQuery] = useState("");

  const byCategory = category
    ? items.filter((item) => item.category?.toLowerCase() === category.toLowerCase())
    : items;
  const brands = category ? brandsOf(byCategory) : [];
  const byBrand = brand
    ? byCategory.filter((item) => getBrand(item).toLowerCase() === brand.toLowerCase())
    : byCategory;
  const filtered = byBrand.filter((item) => matchesQuery(item, query));
  const searching = query.trim().length > 0;

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={category ? (brand ? `${brand} ${category}` : category) : "Equipment & Hardware."}
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
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by name, brand, model or feature..."
            className="mb-6"
          />
          {category ? (
            <BrandChips category={category} brand={brand} brands={brands} />
          ) : (
            <CategoryChips />
          )}
          {filtered.length === 0 && searching ? (
            <div className="flex flex-col items-center gap-5 py-16 text-center">
              <PackageSearch className="size-10 text-gold" aria-hidden="true" />
              <p className="text-lg font-semibold text-foreground">No matches for "{query.trim()}"</p>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Try a different word{category ? (brand ? ` or check other brands` : ` or check other categories`) : ""}, or get in touch
                and we'll help you find what you need.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-16 text-center">
              <PackageSearch className="size-10 text-gold" aria-hidden="true" />
              <p className="text-lg font-semibold text-foreground">Nothing here yet</p>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                We're still adding items to {brand ? `${brand} in ${category}` : category}. In the meantime, get in touch and we'll help
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
