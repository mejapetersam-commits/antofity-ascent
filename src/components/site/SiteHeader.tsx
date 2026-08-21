import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/company";
import { ActionLink } from "./primitives";
import badgeLogo from "@/assets/antofity-badge.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold/15 bg-void/95 backdrop-blur-md"
          : "border-b border-transparent bg-void/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={badgeLogo}
            alt="Antofity Concepts"
            className="h-11 w-auto sm:h-12"
            width={924}
            height={480}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-[0.8rem] font-semibold tracking-wide text-on-dark-muted transition-colors hover:text-on-dark"
              activeProps={{ className: "text-gold hover:text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ActionLink to="/contact" size="sm">
            Talk to us
          </ActionLink>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-sm border border-on-dark/20 text-on-dark lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-void lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-on-dark/10 py-3.5 text-sm font-semibold text-on-dark-muted"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <ActionLink to="/contact" className="mt-5" onClick={() => setOpen(false)}>
              Talk to us
            </ActionLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
