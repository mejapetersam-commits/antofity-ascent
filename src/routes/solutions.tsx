import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { solutions } from "@/lib/company";

const title = "Solutions | Antofity Concepts ICT Services in Kenya";
const description =
  "Network & infrastructure, hardware sales & support, unified communications and managed IT services from Antofity Concepts in Nairobi, Kenya.";

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
        title="Four Capabilities. One Partner."
        intro="Infrastructure, hardware, communications and managed IT — delivered end to end."
      />

      {solutions.map((s, i) => (
        <Section
          key={s.slug}
          id={s.slug}
          tone={i % 2 === 0 ? "white" : "light"}
          className="scroll-mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="font-mono text-6xl font-semibold text-gold/25">{s.number}</p>
              <SectionHeading title={s.title} intro={s.summary} className="mt-2" />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
