import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import { getAdminSessionStatus, adminLogout } from "@/lib/admin-auth";
import {
  getCatalogueItems,
  createCatalogueItem,
  updateCatalogueItem,
  deleteCatalogueItem,
  type CatalogueItem,
} from "@/lib/catalogue-server";
import { actionVariants } from "@/components/site/primitives";
import { promoCategories } from "@/lib/promos";
import { matchesQuery } from "@/lib/search";
import { SearchInput } from "@/components/site/SearchInput";

export const Route = createFileRoute("/admin/catalogue")({
  beforeLoad: async () => {
    const status = await getAdminSessionStatus();
    if (!status.isAdmin) {
      throw redirect({ to: "/admin/login" });
    }
  },
  loader: async () => {
    const items = await getCatalogueItems();
    return { items };
  },
  head: () => ({
    meta: [{ title: "Catalogue Admin | Antofity Concepts" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminCatalogue,
});

const field =
  "w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
const label = "block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground";

function emptyDraft() {
  return {
    id: null as number | null,
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    features: "",
    category: "",
    imageUrl: "",
    inStock: true,
    sortOrder: 0,
    isSpecialOffer: false,
    isNewArrival: false,
    isFeatured: false,
    isLimitedStock: false,
  };
}

function AdminCatalogue() {
  const navigate = useNavigate();
  const { items: initialItems } = Route.useLoaderData();
  const [items, setItems] = useState<CatalogueItem[]>(initialItems);
  const [draft, setDraft] = useState(emptyDraft());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const visibleItems = items.filter((item) => matchesQuery(item, query));

  const isEditing = draft.id !== null;

  async function refresh() {
    setItems(await getCatalogueItems());
  }

  function startEdit(item: CatalogueItem) {
    setDraft({
      id: item.id,
      name: item.name,
      description: item.description ?? "",
      price: item.price ?? "",
      originalPrice: item.originalPrice ?? "",
      features: item.features ?? "",
      category: item.category ?? "",
      imageUrl: item.imageUrl ?? "",
      inStock: item.inStock,
      sortOrder: item.sortOrder,
      isSpecialOffer: item.isSpecialOffer,
      isNewArrival: item.isNewArrival,
      isFeatured: item.isFeatured,
      isLimitedStock: item.isLimitedStock,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = {
        name: draft.name,
        description: draft.description || null,
        price: draft.price || null,
        originalPrice: draft.originalPrice || null,
        features: draft.features || null,
        category: draft.category || null,
        imageUrl: draft.imageUrl || null,
        inStock: draft.inStock,
        sortOrder: Number(draft.sortOrder) || 0,
        isSpecialOffer: draft.isSpecialOffer,
        isNewArrival: draft.isNewArrival,
        isFeatured: draft.isFeatured,
        isLimitedStock: draft.isLimitedStock,
      };
      if (draft.id !== null) {
        await updateCatalogueItem({ data: { ...payload, id: draft.id } });
      } else {
        await createCatalogueItem({ data: payload });
      }
      setDraft(emptyDraft());
      await refresh();
    } catch {
      setError("Couldn't save that item. Check your connection and try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Delete this item?")) return;
    await deleteCatalogueItem({ data: { id } });
    if (draft.id === id) setDraft(emptyDraft());
    await refresh();
  }

  async function handleLogout() {
    await adminLogout();
    await navigate({ to: "/admin/login" });
  }

  return (
    <div className="min-h-screen bg-background px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Catalogue admin</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <LogOut className="size-4" aria-hidden="true" /> Log out
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-sm border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground">
              {isEditing ? "Edit item" : "Add item"}
            </h2>
            {isEditing ? (
              <button
                type="button"
                onClick={() => setDraft(emptyDraft())}
                className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" aria-hidden="true" /> Cancel edit
              </button>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                className={`mt-1.5 ${field}`}
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            </div>
            <div>
              <label className={label} htmlFor="category">
                Category
              </label>
              <input
                id="category"
                className={`mt-1.5 ${field}`}
                value={draft.category}
                onChange={(e) => setDraft({ ...draft, category: e.target.value })}
              />
            </div>
            <div>
              <label className={label} htmlFor="price">
                Price
              </label>
              <input
                id="price"
                className={`mt-1.5 ${field}`}
                placeholder="e.g. KSh 419,900"
                value={draft.price}
                onChange={(e) => setDraft({ ...draft, price: e.target.value })}
              />
            </div>
            <div>
              <label className={label} htmlFor="originalPrice">
                Original price (optional)
              </label>
              <input
                id="originalPrice"
                className={`mt-1.5 ${field}`}
                placeholder="e.g. KSh 425,000 — shown struck through"
                value={draft.originalPrice}
                onChange={(e) => setDraft({ ...draft, originalPrice: e.target.value })}
              />
            </div>
            <div>
              <label className={label} htmlFor="imageUrl">
                Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                className={`mt-1.5 ${field}`}
                placeholder="https://... or a Google Drive share link"
                value={draft.imageUrl}
                onChange={(e) => setDraft({ ...draft, imageUrl: e.target.value })}
              />
              <p className="mt-1.5 text-xs text-muted-foreground">
                You can paste a Google Drive "Share" link directly — just make sure the file is
                shared as "Anyone with the link" (Viewer).
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="features">
                Features (one per line)
              </label>
              <textarea
                id="features"
                rows={4}
                className={`mt-1.5 ${field}`}
                placeholder={
                  "24 PoE+ Gigabit ports\n4 × 10G SFP+ uplinks\n128 Gbps switching capacity"
                }
                value={draft.features}
                onChange={(e) => setDraft({ ...draft, features: e.target.value })}
              />
              <p className="mt-1.5 text-xs text-muted-foreground">
                Shown as a short bullet list at the top of the product page, above the fold.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="description">
                Full description
              </label>
              <textarea
                id="description"
                rows={5}
                className={`mt-1.5 ${field}`}
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              />
              <p className="mt-1.5 text-xs text-muted-foreground">
                Shown in the "Description" section further down the product page.
              </p>
            </div>
            <div>
              <label className={label} htmlFor="sortOrder">
                Display order
              </label>
              <input
                id="sortOrder"
                type="number"
                className={`mt-1.5 ${field}`}
                value={draft.sortOrder}
                onChange={(e) => setDraft({ ...draft, sortOrder: Number(e.target.value) })}
              />
            </div>
            <label className="flex items-center gap-2 self-end pb-2.5 text-sm font-medium text-foreground">
              <input
                type="checkbox"
                checked={draft.inStock}
                onChange={(e) => setDraft({ ...draft, inStock: e.target.checked })}
                className="size-4 accent-gold"
              />
              In stock
            </label>
            <fieldset className="sm:col-span-2">
              <legend className={label}>Promotions (show on home page)</legend>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                {promoCategories.map((c) => (
                  <label
                    key={c.flag}
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <input
                      type="checkbox"
                      checked={draft[c.flag]}
                      onChange={(e) => setDraft({ ...draft, [c.flag]: e.target.checked })}
                      className="size-4 accent-gold"
                    />
                    {c.label}
                  </label>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Each home page section only appears when at least one in-stock item is flagged.
                Special Offers work best with an Original price set.
              </p>
            </fieldset>
          </div>

          {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

          <button
            type="submit"
            disabled={saving}
            className={`${actionVariants({ variant: "primary", size: "sm" })} mt-5`}
          >
            <Plus className="size-4" aria-hidden="true" />
            {saving ? "Saving..." : isEditing ? "Save changes" : "Add item"}
          </button>
        </form>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search items by name, category or price..."
          />
          <p className="text-xs text-muted-foreground">
            {query.trim() ? `${visibleItems.length} of ${items.length}` : `${items.length}`} items
          </p>
        </div>

        <div className="mt-4 overflow-hidden rounded-sm border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Promos</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {visibleItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                    {items.length === 0
                      ? "No items yet. Add your first one above."
                      : "No items match your search."}
                  </td>
                </tr>
              ) : (
                visibleItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 font-medium text-foreground">{item.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{item.category ?? ""}</td>
                    <td className="px-4 py-3 text-muted-foreground">{item.price ?? ""}</td>
                    <td className="px-4 py-3">
                      {item.inStock ? (
                        <span className="text-gold">In stock</span>
                      ) : (
                        <span className="text-muted-foreground">Out of stock</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {promoCategories
                        .filter((c) => item[c.flag])
                        .map((c) => c.badge)
                        .join(", ")}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          aria-label={`Edit ${item.name}`}
                          className="text-muted-foreground hover:text-gold"
                        >
                          <Pencil className="size-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          aria-label={`Delete ${item.name}`}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="size-4" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
