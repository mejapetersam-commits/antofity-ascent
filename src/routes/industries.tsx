import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { industries } from "@/lib/company";

const title = "Industries We Serve | Antofity Concepts";
const description =
  "Antofity Concepts delivers ICT infrastructure and managed services to government, NGOs, multinational corporations, large enterprises and telecom organizations across Kenya.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for Organizations That Can't Stand Still."
        intro="Sectors where connectivity, uptime and security aren't optional."
      />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <article
              key={ind.name}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-gold/40"
            >
              <span className="rule-gold absolute inset-x-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="font-mono text-xs font-semibold text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{ind.name}</h3>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
