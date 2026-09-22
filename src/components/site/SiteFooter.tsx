import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, solutions } from "@/lib/company";
import lockupLogo from "@/assets/antofity-badge.png";

export function SiteFooter() {
  return (
    <footer className="bg-void text-on-dark-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <img
            src={lockupLogo}
            alt="Antofity Concepts"
            className="h-20 w-auto sm:h-24"
            width={924}
            height={480}
          />
          <p className="mt-2 text-sm font-medium tracking-wide text-gold/90">
            First class digital strategies
          </p>
          <p className="mt-5 text-sm leading-relaxed">End-to-end ICT solutions. Nairobi, Kenya.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="eyebrow text-on-dark">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-on-dark">Solutions</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link to="/solutions" hash={s.slug} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="eyebrow text-on-dark">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={company.phoneHref} className="transition-colors hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Antofity Concepts on Instagram"
              className="grid size-9 place-items-center rounded-full border border-on-dark/20 text-on-dark-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Antofity Concepts on Facebook"
              className="grid size-9 place-items-center rounded-full border border-on-dark/20 text-on-dark-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </address>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Antofity Concepts. All rights reserved.</p>
          <p>ICT solutions provider · Nairobi, Kenya · Established {company.founded}</p>
        </div>
      </div>
    </footer>
  );
}
