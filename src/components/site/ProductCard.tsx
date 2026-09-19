import { Link } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";
import type { CatalogueItem } from "@/lib/catalogue-server";

export function ProductCard({ item }: { item: CatalogueItem }) {
  return (
    <Link
      to="/catalogue/$itemId"
      params={{ itemId: String(item.id) }}
      className="group block overflow-hidden rounded-sm border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
    >
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-void">
          <PackageSearch className="size-8 text-gold/60" aria-hidden="true" />
        </div>
      )}
      <div className="p-6">
        {item.category ? <p className="eyebrow text-muted-foreground">{item.category}</p> : null}
        <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-gold">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
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
    </Link>
  );
}
