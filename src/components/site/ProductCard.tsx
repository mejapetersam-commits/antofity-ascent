import { Link } from "@tanstack/react-router";
import { PackageSearch, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import type { CatalogueItem } from "@/lib/catalogue-server";
import { toDirectImageUrl } from "@/lib/drive-image";
import { useCart } from "@/lib/cart-context";
import { promoCategories } from "@/lib/promos";
import { formatKsh, parsePrice } from "@/lib/price";

export function ProductCard({ item }: { item: CatalogueItem }) {
  const { addItem } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl });
    toast.success(`${item.name} added to cart`);
  }

  const price = parsePrice(item.price);
  const was = parsePrice(item.originalPrice);
  const hasDiscount = price !== null && was !== null && was > price;
  const badges = promoCategories.filter((c) => item[c.flag]);

  return (
    <article className="group overflow-hidden rounded-sm border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <Link to="/catalogue/$itemId" params={{ itemId: String(item.id) }} className="block">
        <div className="relative">
          {item.imageUrl ? (
            <img
              src={toDirectImageUrl(item.imageUrl)}
              alt={item.name}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-void">
              <PackageSearch className="size-8 text-gold/60" aria-hidden="true" />
            </div>
          )}
          {badges.length > 0 ? (
            <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
              {badges.map((b) => (
                <span
                  key={b.flag}
                  className="rounded-sm bg-gold px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-void"
                >
                  {b.badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="p-6 pb-4">
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
              <span className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-bold text-gold">{item.price}</span>
                {hasDiscount ? (
                  <>
                    <span className="text-xs text-muted-foreground line-through">
                      {item.originalPrice}
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      Save {formatKsh(was! - price!)}
                    </span>
                  </>
                ) : null}
              </span>
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
      <div className="px-6 pb-6">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!item.inStock}
          className="flex w-full items-center justify-center gap-2 rounded-sm border border-gold/40 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:bg-gold hover:text-void disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gold"
        >
          <ShoppingCart className="size-3.5" aria-hidden="true" /> Add to Cart
        </button>
      </div>
    </article>
  );
}
