import { createFileRoute } from "@tanstack/react-router";
import { Compass, Flag, Target } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

const title = "About Antofity Concepts | ICT Company in Nairobi, Kenya";
const description =
  "Founded in September 2017, Antofity Concepts is a Nairobi-based ICT solutions provider serving government, NGOs, multinationals, large enterprises and telecom.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const mvg = [
  {
    icon: Target,
    heading: "Mission",
    body: "Affordable, high-quality ICT solutions, delivered with professionalism and integrity.",
  },
  {
    icon: Compass,
    heading: "Vision",
    body: "A trusted, client-centric technology partner across every industry we serve.",
  },
  {
    icon: Flag,
    heading: "Goal",
    body: "Sustained growth — expanding capability to meet what clients need next.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Antofity"
        title="Infrastructure. Integrity. Delivery."
        intro="A Nairobi-based ICT partner since 2017, serving organizations that depend on uptime and security."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Direction" title="Mission, Vision & Goal" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {mvg.map(({ icon: Icon, heading, body }) => (
            <article key={heading} className="bg-card p-8 md:p-10">
              <Icon className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-bold text-foreground">{heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
