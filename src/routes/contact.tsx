import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/lib/company";

const title = "Contact Antofity Concepts | ICT Solutions in Nairobi, Kenya";
const description =
  "Talk to Antofity Concepts about network infrastructure, hardware, unified communications and managed IT services. Office in Nairobi, Kenya.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Technology Environment."
        intro="Tell us what you're running and what you need — we'll come back with a clear scope, not a sales pitch."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Office & Direct Lines"
              intro="Reach us directly, or send the form and we'll route it to the right team."
            />
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm border border-gold/30 bg-void text-gold">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <div className="text-sm leading-relaxed text-foreground/90">
                  {company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm border border-gold/30 bg-void text-gold">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <a
                  href={company.phoneHref}
                  className="text-sm font-semibold text-foreground/90 hover:text-gold"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm border border-gold/30 bg-void text-gold">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm font-semibold text-foreground/90 hover:text-gold"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 shadow-card md:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
