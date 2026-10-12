import { createServerFn } from "@tanstack/react-start";
import { sql } from "./db";
import { requireAdmin } from "./admin-auth";

export type CatalogueItem = {
  id: number;
  name: string;
  description: string | null;
  price: string | null;
  originalPrice: string | null;
  features: string | null;
  category: string | null;
  imageUrl: string | null;
  inStock: boolean;
  sortOrder: number;
  createdAt: string;
  isSpecialOffer: boolean;
  isNewArrival: boolean;
  isFeatured: boolean;
  isLimitedStock: boolean;
  /** Optional explicit brand; when empty the brand is read from the name. */
  brand: string | null;
  /** Extra pictures shown in the product gallery, after `imageUrl`. */
  galleryImages: string[];
};

type CatalogueItemInput = {
  name: string;
  description?: string | null;
  price?: string | null;
  originalPrice?: string | null;
  features?: string | null;
  category?: string | null;
  imageUrl?: string | null;
  inStock?: boolean;
  sortOrder?: number;
  isSpecialOffer?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isLimitedStock?: boolean;
  brand?: string | null;
  galleryImages?: string[];
};

const MAX_GALLERY_IMAGES = 8;

let galleryColumn: Promise<boolean> | undefined;

/** Adds the optional `gallery_images` column on first use; resolves false if that fails. */
function hasGalleryColumn() {
  galleryColumn ??= sql()`alter table catalogue_items add column if not exists gallery_images text`.then(
    () => true,
    () => false,
  );
  return galleryColumn;
}

function parseGallery(raw: string | null | undefined): string[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((u): u is string => typeof u === "string" && u.trim() !== "")
      : [];
  } catch {
    return [];
  }
}

async function galleriesById(): Promise<Map<number, string[]>> {
  if (!(await hasGalleryColumn())) return new Map();
  try {
    const rows = await sql()`select id, gallery_images as "gallery" from catalogue_items`;
    return new Map(
      (rows as { id: number; gallery: string | null }[]).map((r) => [r.id, parseGallery(r.gallery)]),
    );
  } catch {
    return new Map();
  }
}

async function saveGallery(id: number, images: string[] | undefined) {
  if (images === undefined || !(await hasGalleryColumn())) return;
  const cleaned = images
    .map((u) => (typeof u === "string" ? u.trim() : ""))
    .filter(Boolean)
    .slice(0, MAX_GALLERY_IMAGES);
  const value = cleaned.length > 0 ? JSON.stringify(cleaned) : null;
  try {
    await sql()`update catalogue_items set gallery_images = ${value} where id = ${id}`;
  } catch {
    // extra pictures are optional; never fail the save because of them
  }
}

let brandColumn: Promise<boolean> | undefined;

/**
 * Adds the optional `brand` column on first use. Resolves false (instead of
 * throwing) if that is not possible, so the catalogue keeps working without it.
 */
function hasBrandColumn() {
  brandColumn ??= sql()`alter table catalogue_items add column if not exists brand text`.then(
    () => true,
    () => false,
  );
  return brandColumn;
}

async function brandsById(): Promise<Map<number, string | null>> {
  if (!(await hasBrandColumn())) return new Map();
  try {
    const rows = await sql()`select id, brand from catalogue_items`;
    return new Map((rows as { id: number; brand: string | null }[]).map((r) => [r.id, r.brand]));
  } catch {
    return new Map();
  }
}

async function saveBrand(id: number, brand: string | null | undefined) {
  if (brand === undefined || !(await hasBrandColumn())) return;
  const value = brand?.trim() || null;
  try {
    await sql()`update catalogue_items set brand = ${value} where id = ${id}`;
  } catch {
    // brand is optional; never fail the save because of it
  }
}

export const getCatalogueItems = createServerFn({ method: "GET" }).handler(async () => {
  const rows = await sql()`
    select
      id, name, description, price,
      original_price as "originalPrice", features, category,
      image_url as "imageUrl", in_stock as "inStock",
      sort_order as "sortOrder", created_at as "createdAt",
      is_special_offer as "isSpecialOffer", is_new_arrival as "isNewArrival",
      is_featured as "isFeatured", is_limited_stock as "isLimitedStock"
    from catalogue_items
    order by sort_order asc, created_at desc
  `;
  const [brands, galleries] = await Promise.all([brandsById(), galleriesById()]);
  return (rows as unknown as Omit<CatalogueItem, "brand" | "galleryImages">[]).map((r) => ({
    ...r,
    brand: brands.get(r.id) ?? null,
    galleryImages: galleries.get(r.id) ?? [],
  })) as CatalogueItem[];
});

export const getCatalogueItem = createServerFn({ method: "GET" })
  .validator((data: unknown) => data as { id: number })
  .handler(async ({ data }) => {
    const rows = await sql()`
      select
        id, name, description, price,
        original_price as "originalPrice", features, category,
        image_url as "imageUrl", in_stock as "inStock",
        sort_order as "sortOrder", created_at as "createdAt",
      is_special_offer as "isSpecialOffer", is_new_arrival as "isNewArrival",
      is_featured as "isFeatured", is_limited_stock as "isLimitedStock"
      from catalogue_items
      where id = ${data.id}
    `;
    const row = rows[0] as Omit<CatalogueItem, "brand" | "galleryImages"> | undefined;
    if (!row) return null;
    const [brands, galleries] = await Promise.all([brandsById(), galleriesById()]);
    return {
      ...row,
      brand: brands.get(row.id) ?? null,
      galleryImages: galleries.get(row.id) ?? [],
    } as CatalogueItem;
  });

export const createCatalogueItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as CatalogueItemInput)
  .handler(async ({ data }) => {
    await requireAdmin();
    const rows = await sql()`
      insert into catalogue_items
        (name, description, price, original_price, features, category, image_url, in_stock, sort_order,
         is_special_offer, is_new_arrival, is_featured, is_limited_stock)
      values (
        ${data.name},
        ${data.description ?? null},
        ${data.price ?? null},
        ${data.originalPrice ?? null},
        ${data.features ?? null},
        ${data.category ?? null},
        ${data.imageUrl ?? null},
        ${data.inStock ?? true},
        ${data.sortOrder ?? 0},
        ${data.isSpecialOffer ?? false},
        ${data.isNewArrival ?? false},
        ${data.isFeatured ?? false},
        ${data.isLimitedStock ?? false}
      )
      returning id
    `;
    const created = rows[0] as { id: number };
    await saveBrand(created.id, data.brand);
    await saveGallery(created.id, data.galleryImages);
    return created;
  });

export const updateCatalogueItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as CatalogueItemInput & { id: number })
  .handler(async ({ data }) => {
    await requireAdmin();
    await sql()`
      update catalogue_items set
        name = ${data.name},
        description = ${data.description ?? null},
        price = ${data.price ?? null},
        original_price = ${data.originalPrice ?? null},
        features = ${data.features ?? null},
        category = ${data.category ?? null},
        image_url = ${data.imageUrl ?? null},
        in_stock = ${data.inStock ?? true},
        sort_order = ${data.sortOrder ?? 0},
        is_special_offer = ${data.isSpecialOffer ?? false},
        is_new_arrival = ${data.isNewArrival ?? false},
        is_featured = ${data.isFeatured ?? false},
        is_limited_stock = ${data.isLimitedStock ?? false}
      where id = ${data.id}
    `;
    await saveBrand(data.id, data.brand);
    await saveGallery(data.id, data.galleryImages);
    return { ok: true as const };
  });

export const deleteCatalogueItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { id: number })
  .handler(async ({ data }) => {
    await requireAdmin();
    await sql()`delete from catalogue_items where id = ${data.id}`;
    return { ok: true as const };
  });
