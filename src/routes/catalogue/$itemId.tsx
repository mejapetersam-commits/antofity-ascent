import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, PackageSearch, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { getCatalogueItem } from "@/lib/catalogue-server";
import { company } from "@/lib/company";
import { toDirectImageUrl } from "@/lib/drive-image";
import { formatKsh, parsePrice } from "@/lib/price";
import { useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/catalogue/$itemId")({
  loader: async ({ params }) => {
    const id = Number(params.itemId);
    if (!Number.isFinite(id)) throw notFound();

    let item;
    try {
      item = await getCatalogueItem({ data: { id } });
    } catch {
      item = null;
    }
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    const title = item ? `${item.name} | Antofity Concepts` : "Product | Antofity Concepts";
    const description =
      item?.description ?? "Hardware and equipment available from Antofity Concepts.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { item } = Route.useLoaderData();
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const features = (item.features ?? "")
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean);

  const price = parsePrice(item.price);
  const originalPrice = parsePrice(item.originalPrice);
  const hasDiscount = price !== null && originalPrice !== null && originalPrice > price;

  const whatsappOrderHref =
    `${company.whatsappHref.split("?text=")[0]}?text=` +
    encodeURIComponent(
      `Hi ${company.name}, I'd like to order ${quantity} x ${item.name}${
        item.price ? ` (${item.price} each)` : ""
      }.`,
    );

  function handleAddToCart() {
    addItem({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl }, quantity);
    toast.success(`${item.name} added to cart`);
  }

  function handleBuyNow() {
    addItem({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl }, quantity);
    openCart();
  }

  return (
    <>
      <PageHero
        eyebrow={item.category ?? "Catalogue"}
        title={item.name}
        intro={item.inStock ? "Available now." : "Currently out of stock."}
      />

      <Section tone="white">
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-gold"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to catalogue
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {item.imageUrl ? (
            <img
              src={toDirectImageUrl(item.imageUrl)}
              alt={item.name}
              className="w-full rounded-sm border border-border object-cover"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-border bg-void">
              <PackageSearch className="size-12 text-gold/60" aria-hidden="true" />
            </div>
          )}

          <div>
            {item.category ? (
              <p className="eyebrow text-muted-foreground">{item.category}</p>
            ) : null}
            <h1 className="mt-2 text-3xl font-bold text-foreground">{item.name}</h1>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {item.price ? (
                <span className="text-2xl font-bold text-gold">{item.price}</span>
              ) : null}
              {hasDiscount ? (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    {item.originalPrice}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">
                    Save {formatKsh(originalPrice! - price!)}
                  </span>
                </>
              ) : null}
            </div>
            {item.price ? (
              <p className="mt-1 text-xs text-muted-foreground">Exclusive of 16% VAT</p>
            ) : null}

            <span
              className={
                item.inStock
                  ? "mt-3 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-emerald-600"
                  : "mt-3 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              }
            >
              {item.inStock ? "Available in stock" : "Out of stock"}
            </span>

            {features.length > 0 ? (
              <div className="mt-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-foreground">
                  Features
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {item.inStock ? (
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center rounded-sm border border-border">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-lg text-muted-foreground hover:text-gold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-2 text-lg text-muted-foreground hover:text-gold"
                  >
                    +
                  </button>
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!item.inStock}
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-gold px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-gold transition-all duration-200 hover:bg-gold hover:text-void disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ShoppingCart className="size-4" aria-hidden="true" /> Add to Cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={!item.inStock}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-void shadow-glow transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Buy Now
              </button>
              <a
                href={whatsappOrderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:brightness-110"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Order on WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-sm border border-border p-4">
              <p className="text-xs text-muted-foreground">
                Questions before you order?{" "}
                <a
                  href={company.phoneHref}
                  className="font-semibold text-foreground hover:text-gold"
                >
                  Call {company.phone}
                </a>{" "}
                or{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-foreground hover:text-gold"
                >
                  email us
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {item.description ? (
          <div className="mt-16 rounded-sm border border-border">
            <div className="border-b border-border px-6 py-4 text-center">
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                Description
              </h2>
            </div>
            <div className="px-6 py-8 sm:px-10">
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ) : null}
      </Section>

      <CtaBand />
    </>
  );
}
