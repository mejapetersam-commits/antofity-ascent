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
};

export const getCatalogueItems = createServerFn({ method: "GET" }).handler(async () => {
  const rows = await sql()`
    select
      id, name, description, price,
      original_price as "originalPrice", features, category,
      image_url as "imageUrl", in_stock as "inStock",
      sort_order as "sortOrder", created_at as "createdAt"
    from catalogue_items
    order by sort_order asc, created_at desc
  `;
  return rows as unknown as CatalogueItem[];
});

export const getCatalogueItem = createServerFn({ method: "GET" })
  .validator((data: unknown) => data as { id: number })
  .handler(async ({ data }) => {
    const rows = await sql()`
      select
        id, name, description, price,
        original_price as "originalPrice", features, category,
        image_url as "imageUrl", in_stock as "inStock",
        sort_order as "sortOrder", created_at as "createdAt"
      from catalogue_items
      where id = ${data.id}
    `;
    return (rows[0] as CatalogueItem | undefined) ?? null;
  });

export const createCatalogueItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as CatalogueItemInput)
  .handler(async ({ data }) => {
    await requireAdmin();
    const rows = await sql()`
      insert into catalogue_items
        (name, description, price, original_price, features, category, image_url, in_stock, sort_order)
      values (
        ${data.name},
        ${data.description ?? null},
        ${data.price ?? null},
        ${data.originalPrice ?? null},
        ${data.features ?? null},
        ${data.category ?? null},
        ${data.imageUrl ?? null},
        ${data.inStock ?? true},
        ${data.sortOrder ?? 0}
      )
      returning id
    `;
    return rows[0] as { id: number };
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
        sort_order = ${data.sortOrder ?? 0}
      where id = ${data.id}
    `;
    return { ok: true as const };
  });

export const deleteCatalogueItem = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { id: number })
  .handler(async ({ data }) => {
    await requireAdmin();
    await sql()`delete from catalogue_items where id = ${data.id}`;
    return { ok: true as const };
  });
