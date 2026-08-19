import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { differentiators, process } from "@/lib/company";

const title = "Why Antofity | Antofity Concepts ICT Solutions";
const description =
  "End-to-end ICT solutions, a client-centric approach and a proven track record — what sets Antofity Concepts apart as a technology partner in Kenya.";

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
        title="Seven Reasons Clients Stay with Antofity Concepts."
        intro="Technology partnerships are judged over years, not projects. Here's what we hold ourselves to on every engagement."
      />

      <Section tone="white">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <article
              key={d.title}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-void"
            >
              <p className="font-mono text-xs font-semibold text-gold/60 group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-on-dark">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-on-dark-muted">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="How we work"
          title="A Clear Path from Requirement to Support"
          intro="Every engagement follows the same disciplined sequence, whichever solution area it starts in."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-gold/10 bg-gold/10 md:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="relative bg-void p-8">
              <span className="rule-gold absolute inset-x-0 top-0 h-0.5" aria-hidden="true" />
              <p className="font-mono text-3xl font-semibold text-gold">{p.step}</p>
              <h3 className="mt-4 text-base font-bold uppercase tracking-[0.1em] text-on-dark">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{p.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
