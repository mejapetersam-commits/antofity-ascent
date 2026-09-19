import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, PackageSearch } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { getCatalogueItem } from "@/lib/catalogue-server";
import { company } from "@/lib/company";

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

  const enquiryHref =
    `${company.whatsappHref.split("?text=")[0]}?text=` +
    encodeURIComponent(`Hi Antofity Concepts, I'd like to enquire about the ${item.name}.`);

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
              src={item.imageUrl}
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

            <div className="mt-4 flex items-center gap-4">
              {item.price ? (
                <span className="text-2xl font-bold text-gold">{item.price}</span>
              ) : null}
              <span
                className={
                  item.inStock
                    ? "text-xs font-semibold uppercase tracking-[0.08em] text-emerald-600"
                    : "text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                }
              >
                {item.inStock ? "In stock" : "Out of stock"}
              </span>
            </div>

            {item.description ? (
              <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={enquiryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-glow transition-all duration-200 hover:brightness-110"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Enquire on WhatsApp
              </a>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all duration-200 hover:border-gold hover:text-gold"
              >
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
