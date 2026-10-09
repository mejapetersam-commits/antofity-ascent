import { createFileRoute } from "@tanstack/react-router";
import { sql } from "@/lib/db";

const SITE = "https://www.antofityconcepts.co.ke";
const STATIC_PATHS = ["/", "/about", "/solutions", "/catalogue", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        let products: { id: number; createdAt: string }[] = [];
        try {
          products = (await sql()`
            select id, created_at as "createdAt" from catalogue_items order by id
          `) as unknown as { id: number; createdAt: string }[];
        } catch {
          // DB unavailable: still serve the static pages
        }

        const urls = [
          ...STATIC_PATHS.map((path) => `  <url><loc>${SITE}${path === "/" ? "" : path}</loc></url>`),
          ...products.map((p) => {
            const last = new Date(p.createdAt);
            const lastmod = Number.isNaN(last.getTime()) ? "" : `<lastmod>${last.toISOString().slice(0, 10)}</lastmod>`;
            return `  <url><loc>${SITE}/catalogue/${p.id}</loc>${lastmod}</url>`;
          }),
        ].join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        });
      },
    },
  },
});
