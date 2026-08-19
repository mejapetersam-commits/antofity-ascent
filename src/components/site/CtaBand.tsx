import { ArrowRight } from "lucide-react";
import { company } from "@/lib/company";
import { ActionAnchor, ActionLink, Eyebrow } from "./primitives";

export function CtaBand() {
  return (
    <section className="surface-dark grid-tech border-t border-on-dark/10 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow dark>Start a conversation</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-on-dark sm:text-4xl md:text-5xl">
            Let's Build a More Connected Business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-dark-muted md:text-lg">
            Talk to Antofity Concepts about your organisation's ICT infrastructure, technology
            and managed service requirements.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink to="/contact">
              Talk to our team <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
            <ActionAnchor href={company.phoneHref} variant="outlineLight">
              Call {company.phone}
            </ActionAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
