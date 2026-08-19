import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { differentiators, process } from "@/lib/company";

const title = "Why Antofity | Antofity Concepts ICT Solutions";
const description = "What sets Antofity Concepts apart as an ICT technology partner in Kenya.";

export const Route = createFileRoute("/why-antofity")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-antofity" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/why-antofity" }],
  }),
  component: WhyAntofity,
});

function WhyAntofity() {
  return (
    <>
      <PageHero
        eyebrow="Why Antofity"
        title="What Sets Us Apart."
        intro="Seven reasons clients stay."
      />

      <Section tone="white">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <article key={d.title} className="bg-card p-8">
              <p className="font-mono text-xs font-semibold text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-bold text-foreground">{d.title}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading dark eyebrow="How we work" title="Requirement to Support" />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-gold/10 bg-gold/10 md:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="relative bg-void p-8">
              <span className="rule-gold absolute inset-x-0 top-0 h-0.5" aria-hidden="true" />
              <p className="font-mono text-3xl font-semibold text-gold">{p.step}</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.1em] text-on-dark">
                {p.title}
              </h3>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
