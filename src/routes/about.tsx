import { createFileRoute } from "@tanstack/react-router";
import { Compass, Flag, Target } from "lucide-react";
import skyline from "@/assets/nairobi-skyline.jpg";
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

const evolution = [
  {
    label: "Infrastructure",
    text: "Structured cabling and network infrastructure engineered as the foundation of the environment.",
  },
  {
    label: "Integration",
    text: "Architecture design, systems integration and migration that connect existing and new systems.",
  },
  {
    label: "Communication",
    text: "IP telephony, conferencing and messaging that keep people and organisations connected.",
  },
  {
    label: "Managed Technology",
    text: "Ongoing monitoring, maintenance and support of the complete technology environment.",
  },
];

const mvg = [
  {
    icon: Target,
    heading: "Mission",
    body: "To provide affordable, high-quality ICT solutions that meet the evolving needs of clients while upholding the highest standards of professionalism, ethics and customer satisfaction.",
  },
  {
    icon: Compass,
    heading: "Vision",
    body: "To be recognized as a trusted leader in ICT service delivery, known for integrity, innovation and a client-centric approach — a top-tier provider of technology-based corporate solutions delivering measurable value across diverse industries.",
  },
  {
    icon: Flag,
    heading: "Goal",
    body: "To remain on a sustained growth path, continuously expanding capabilities and services to meet new challenges and exceed client expectations — pushing boundaries, with the sky as the limit.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Antofity"
        title="An ICT Partner Built on Infrastructure, Integrity and Delivery."
        intro="Founded in September 2017, Antofity Concepts is a Nairobi-based ICT solutions provider delivering end-to-end technology services to organizations across Kenya."
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Company story"
              title="Technology Services That Improve Performance and Strengthen Security."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Antofity Concepts helps organizations improve performance, enhance security and
                streamline operations through integrated information and communication technology.
              </p>
              <p>
                The company works across government, NGOs, multinational corporations, large
                enterprises and telecom organizations — environments where connectivity, uptime and
                information security are operational requirements, not conveniences.
              </p>
              <p>
                Antofity is committed to delivering innovative, high-quality and cost-effective
                solutions through highly skilled professionals, acting as a one-stop ICT partner
                across structured cabling, active device supply, CCTV, IP telephony, network
                infrastructure, hardware, managed IT and unified communications.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-sm border border-border">
            <img
              src={skyline}
              alt="Nairobi corporate skyline at dusk"
              width={1400}
              height={900}
              loading="lazy"
              className="size-full object-cover"
            />
            <figcaption className="bg-card px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Headquartered in Nairobi, Kenya
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Capability evolution"
          title="Infrastructure → Integration → Communication → Managed Technology"
          intro="Our capability set builds on itself: each layer strengthens the one before it."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-on-dark/10 bg-on-dark/10 md:grid-cols-4">
          {evolution.map((e, i) => (
            <li key={e.label} className="relative bg-midnight p-8">
              <span className="flow-line absolute inset-x-0 top-0 h-px bg-on-dark/10" aria-hidden="true" />
              <p className="eyebrow text-cyan">Layer 0{i + 1}</p>
              <h3 className="mt-4 text-lg font-bold text-on-dark">{e.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{e.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Direction" title="Mission, Vision & Goal" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {mvg.map(({ icon: Icon, heading, body }) => (
            <article key={heading} className="bg-card p-8 md:p-10">
              <Icon className="size-6 text-cyan" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-extrabold text-foreground">{heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="rounded-sm border border-dashed border-border bg-card p-8 md:p-10">
          <p className="eyebrow text-muted-foreground">Coming soon</p>
          <h2 className="mt-4 text-xl font-bold text-foreground">
            Team profiles, certifications and company profile download
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Dedicated sections for leadership profiles, professional certifications, technology
            partners and a downloadable company profile will be published here once the supporting
            material is supplied.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
