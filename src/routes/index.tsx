import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cable,
  Headphones,
  Network,
  Server,
  ShieldCheck,
  Activity,
  Clock,
  Wallet,
  Lock,
} from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import nocImage from "@/assets/noc-operations.jpg";
import { ActionLink, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { industries, pillars, process, solutions } from "@/lib/company";

const title = "Antofity Concepts | ICT Solutions Company in Nairobi, Kenya";
const description =
  "Antofity Concepts delivers end-to-end ICT solutions in Kenya: network infrastructure, structured cabling, CCTV, IP telephony, hardware supply and managed IT services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "keywords",
        content:
          "ICT solutions Kenya, ICT company Nairobi, IT infrastructure Kenya, managed IT services Kenya, network cabling Kenya, IP telephony Kenya, CCTV installation Kenya",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillarIcons = [Network, Server, Headphones, ShieldCheck, Activity];
const outcomeIcons = [Clock, Wallet, Lock, Activity];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="surface-dark relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <img
          src={heroImage}
          alt="Enterprise data centre aisle with server racks and fibre cabling"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--midnight)_18%,color-mix(in_oklab,var(--midnight)_72%,transparent)_58%,color-mix(in_oklab,var(--graphite)_55%,transparent)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl reveal">
            <Eyebrow dark>Nairobi, Kenya · Established September 2017</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-on-dark sm:text-5xl md:text-6xl lg:text-7xl">
              Technology Infrastructure{" "}
              <span className="text-gradient-tech">Built for Business.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg">
              Antofity Concepts delivers end-to-end ICT solutions that help organizations improve
              performance, strengthen security and operate with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/contact">
                Talk to our team <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink to="/solutions" variant="outlineLight">
                Explore our solutions
              </ActionLink>
            </div>
          </div>

          <dl className="mt-16 grid gap-px overflow-hidden rounded-sm border border-on-dark/10 bg-on-dark/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Infrastructure", "Structured cabling & network design"],
              ["Hardware", "Procure, configure, deploy, maintain"],
              ["Communications", "IP telephony & collaboration"],
              ["Managed IT", "Monitoring, backup & support"],
            ].map(([term, detail]) => (
              <div key={term} className="bg-midnight/85 px-6 py-7 backdrop-blur-sm">
                <dt className="eyebrow text-cyan">{term}</dt>
                <dd className="mt-2 text-sm text-on-dark-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flow-line absolute inset-x-0 bottom-0 h-px bg-on-dark/10" aria-hidden="true" />
      </section>

      {/* CREDIBILITY */}
      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="Who we are"
            title="Your Technology Partner from Infrastructure to Operations."
            intro="Antofity Concepts is a one-stop ICT partner. We design, supply, implement and support the technology environments organizations depend on — spanning infrastructure, hardware, communications, security and managed IT."
          />
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? Network;
              return (
                <article
                  key={p.title}
                  className="group bg-card p-7 transition-colors duration-300 hover:bg-secondary"
                >
                  <Icon className="size-6 text-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </article>
              );
            })}
            <div className="flex items-center bg-card p-7">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan transition-all hover:gap-3"
              >
                All solutions <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section tone="white" id="solutions">
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions That Keep Your Business Connected"
          intro="Four integrated capability areas, delivered by one accountable technology partner."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.slug}
              className="group relative bg-card p-8 transition-all duration-300 hover:bg-background md:p-10"
            >
              <span className="rule-tech absolute inset-x-0 top-0 h-0.5 scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="eyebrow text-cyan">{s.number}</p>
              <h3 className="mt-4 text-2xl font-extrabold text-foreground">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-6 space-y-2">
                {s.capabilities.slice(0, 4).map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {s.benefits.map((b) => (
                  <span
                    key={b}
                    className="rounded-sm border border-border bg-secondary px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <Link
                to="/solutions"
                hash={s.slug}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan transition-all hover:gap-3"
              >
                Details <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* MANAGED IT — dark */}
      <Section tone="dark">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Managed IT Services"
              title="Focus on Your Business. We'll Handle Your IT."
              intro="Proactive monitoring, maintenance and support across your network, applications and data — so technology stops being a source of interruption."
            />
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-on-dark/10 bg-on-dark/10 sm:grid-cols-2">
              {[
                "Reduced Downtime",
                "Predictable IT Costs",
                "Enhanced System Security",
                "24/7 Monitoring & Support",
              ].map((o, i) => {
                const Icon = outcomeIcons[i] ?? Activity;
                return (
                  <div key={o} className="bg-midnight px-6 py-7">
                    <Icon className="size-5 text-cyan" aria-hidden="true" />
                    <h3 className="mt-4 text-sm font-bold text-on-dark">{o}</h3>
                  </div>
                );
              })}
            </div>
            <ActionLink to="/solutions" hash="managed-it" className="mt-10">
              See managed services <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
          </div>
          <figure className="relative overflow-hidden rounded-sm border border-on-dark/10">
            <img
              src={nocImage}
              alt="Network operations centre with monitoring dashboards"
              width={1200}
              height={800}
              loading="lazy"
              className="size-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-midnight/85 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-on-dark-muted backdrop-blur-sm">
              Monitoring, maintenance and support
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Industries"
          title="Technology for Organizations That Can't Afford to Stand Still."
          intro="We work with organizations whose operations depend on connectivity, uptime and secure information systems."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <article key={ind.name} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex items-center gap-3">
                <span className="node-pulse size-2 rounded-full bg-cyan" aria-hidden="true" />
                <h3 className="text-lg font-bold text-foreground">{ind.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {ind.description}
              </p>
            </article>
          ))}
          <div className="flex items-center bg-card p-8">
            <ActionLink to="/industries" variant="ghost">
              All industries <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Service delivery"
          title="A Clear Path from Requirement to Support"
          intro="A visualization of how Antofity engagements typically progress."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="relative bg-card p-8">
              <span className="rule-tech absolute inset-x-0 top-0 h-0.5" aria-hidden="true" />
              <p className="text-3xl font-extrabold text-cyan">{p.step}</p>
              <h3 className="mt-4 text-base font-bold uppercase tracking-[0.1em] text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* TRUST */}
      <Section tone="graphite">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <SectionHeading
            dark
            eyebrow="Long-term partnership"
            title="Built for Long-Term Technology Partnerships."
            intro="Professionalism, reliability, technical expertise, security, scalability and responsive support — the foundations of how we work with clients over time."
          />
          <div className="grid gap-px overflow-hidden rounded-sm border border-on-dark/10 bg-on-dark/10 sm:grid-cols-3">
            {[
              [Cable, "Infrastructure discipline"],
              [ShieldCheck, "Security-first delivery"],
              [Headphones, "Responsive support"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Cable;
              return (
                <div key={label as string} className="bg-graphite px-6 py-8">
                  <I className="size-5 text-cyan" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-on-dark">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
