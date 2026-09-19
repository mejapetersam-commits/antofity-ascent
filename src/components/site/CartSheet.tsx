import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { company } from "@/lib/company";
import { formatKsh } from "@/lib/price";
import { toDirectImageUrl } from "@/lib/drive-image";

function buildWhatsAppCheckoutUrl(
  items: { name: string; price: string | null; quantity: number }[],
  subtotal: number,
) {
  const lines = items.map(
    (i) => `• ${i.name} x${i.quantity}${i.price ? ` — ${i.price} each` : ""}`,
  );
  const message = [
    `Hi ${company.name}, I'd like to order:`,
    "",
    ...lines,
    "",
    subtotal > 0 ? `Estimated total: ${formatKsh(subtotal)}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `${company.whatsappHref.split("?text=")[0]}?text=${encodeURIComponent(message)}`;
}

export function CartSheet() {
  const { items, count, subtotal, removeItem, setQuantity, isOpen, setIsOpen } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
          className="relative flex items-center text-on-dark-muted transition-colors hover:text-on-dark"
        >
          <ShoppingCart className="size-5" aria-hidden="true" />
          {count > 0 ? (
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-gold text-[0.6rem] font-bold text-void">
              {count > 9 ? "9+" : count}
            </span>
          ) : null}
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <ShoppingCart className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  {item.imageUrl ? (
                    <img
                      src={toDirectImageUrl(item.imageUrl)}
                      alt={item.name}
                      className="size-16 shrink-0 rounded-sm border border-border object-cover"
                    />
                  ) : (
                    <div className="size-16 shrink-0 rounded-sm border border-border bg-void" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                    {item.price ? (
                      <p className="text-xs text-muted-foreground">{item.price}</p>
                    ) : null}
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="grid size-6 place-items-center rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold"
                      >
                        <Minus className="size-3" aria-hidden="true" />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="grid size-6 place-items-center rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold"
                      >
                        <Plus className="size-3" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground">Estimated subtotal</span>
                <span className="font-bold text-gold">{formatKsh(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Final pricing and delivery cost confirmed on WhatsApp.
              </p>
              <a
                href={buildWhatsAppCheckoutUrl(items, subtotal)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:brightness-110"
              >
                Checkout on WhatsApp
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
