import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeading, ActionLink } from "@/components/site/primitives";
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
        title="Technology for Organizations That Can't Afford to Stand Still."
        intro="We work with organizations whose operations depend on connectivity, uptime and secure information systems — across sectors, but never off the shelf."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Who we serve"
          title="Sector Experience, Built into Every Engagement"
          intro="Each sector below brings its own compliance, scale and continuity requirements. Our solutions are shaped around those, not retrofitted to them."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <article
              key={ind.name}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-lift"
            >
              <span className="rule-gold absolute inset-x-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="font-mono text-xs font-semibold text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold text-foreground">{ind.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {ind.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <SectionHeading
            dark
            eyebrow="Don't see your sector?"
            title="If Uptime and Security Matter to Your Operation, We Can Help."
            intro="Antofity Concepts scopes every engagement around the client's operating environment, not a generic package. Tell us what you run and we'll tell you what it takes to keep it running."
          />
          <div className="flex lg:justify-end">
            <ActionLink to="/contact">
              Talk to our team <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
