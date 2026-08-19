import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionHeading, ActionLink } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { solutions } from "@/lib/company";

const title = "Solutions | Antofity Concepts ICT Services in Kenya";
const description =
  "Network & infrastructure, hardware sales & support, unified communications and managed IT services from Antofity Concepts — an end-to-end ICT partner in Nairobi, Kenya.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Four Capability Areas. One Accountable Partner."
        intro="From the cabling in the wall to the helpdesk ticket that gets resolved before you notice — Antofity Concepts designs, supplies, implements and supports every layer of your technology environment."
      />

      {solutions.map((s, i) => (
        <Section
          key={s.slug}
          id={s.slug}
          tone={i % 2 === 0 ? "white" : "light"}
          className="scroll-mt-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="font-mono text-6xl font-semibold text-gold/25 md:text-7xl">
                {s.number}
              </p>
              <SectionHeading title={s.title} intro={s.summary} className="mt-2" />
              <div className="mt-8 flex flex-wrap gap-2">
                {s.benefits.map((b) => (
                  <span
                    key={b}
                    className="rounded-sm border border-gold/30 bg-void px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-border bg-card p-8 shadow-card md:p-10">
              <p className="eyebrow text-muted-foreground">What's included</p>
              <ul className="mt-6 space-y-4">
                {s.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <ActionLink to="/contact" className="mt-8">
                Discuss this solution <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
            </div>
          </div>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
