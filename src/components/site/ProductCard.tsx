import { Link } from "@tanstack/react-router";
import { PackageSearch, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import type { CatalogueItem } from "@/lib/catalogue-server";
import { toDirectImageUrl } from "@/lib/drive-image";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ item }: { item: CatalogueItem }) {
  const { addItem } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl });
    toast.success(`${item.name} added to cart`);
  }

  return (
    <article className="group overflow-hidden rounded-sm border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <Link to="/catalogue/$itemId" params={{ itemId: String(item.id) }} className="block">
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
