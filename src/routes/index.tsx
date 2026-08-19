import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Headphones, Network, Server, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import { ActionLink, Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { pillars } from "@/lib/company";

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

const pillarIcons = [Network, Server, Headphones, ShieldCheck];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="surface-dark relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16">
        <img
          src={heroImage}
          alt="Enterprise data centre aisle with server racks and fibre cabling"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--void)_22%,color-mix(in_oklab,var(--void)_78%,transparent)_60%,color-mix(in_oklab,var(--graphite)_60%,transparent)_100%)]"
          aria-hidden="true"
        />
        <svg
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[46%] opacity-60 lg:block"
          viewBox="0 0 600 800"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M600 90H430l-40 40v120l-30 30H230M600 260H480l-30 30v90M600 430H360l-40 40v160l-30 30H80M600 560H520l-30 30v120"
            stroke="var(--gold)"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          <circle className="node-pulse" cx="230" cy="280" r="4" fill="var(--gold)" />
          <circle
            className="node-pulse"
            cx="450"
            cy="320"
            r="3"
            fill="var(--gold)"
            style={{ animationDelay: "0.6s" }}
          />
          <circle
            className="node-pulse"
            cx="80"
            cy="630"
            r="4"
            fill="var(--gold)"
            style={{ animationDelay: "1.2s" }}
          />
        </svg>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl reveal">
            <Eyebrow dark>Nairobi, Kenya · Est. 2017</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-on-dark sm:text-5xl md:text-6xl lg:text-7xl">
              Technology, <span className="text-gradient-gold">built to last.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-on-dark-muted">
              End-to-end ICT infrastructure, hardware and managed IT for organizations that can't
              afford downtime.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink to="/contact">
                Talk to us <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink to="/solutions" variant="outlineLight">
                Our solutions
              </ActionLink>
            </div>
          </div>
        </div>
        <div className="flow-line absolute inset-x-0 bottom-0 h-px bg-gold/10" aria-hidden="true" />
      </section>

      {/* CAPABILITY STRIP */}
      <section className="border-b border-border bg-card py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {pillars.slice(0, 4).map((p, i) => {
            const Icon = pillarIcons[i] ?? Network;
            return (
              <div key={p.title} className="flex items-start gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
