import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, catalogueCategories } from "@/lib/company";
import { ActionLink } from "./primitives";
import { CartSheet } from "./CartSheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import badgeLogo from "@/assets/antofity-badge.png";

function SiteHeaderMobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
      {navLinks.map((l) =>
        l.label === "Catalogue" ? (
          <div key={l.to} className="border-b border-on-dark/10">
            <div className="flex items-center justify-between py-3.5">
              <Link
                to={l.to}
                onClick={onNavigate}
                className="text-sm font-semibold text-on-dark-muted"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
              <button
                type="button"
                aria-label={catalogueOpen ? "Hide categories" : "Show categories"}
                aria-expanded={catalogueOpen}
                onClick={() => setCatalogueOpen((v) => !v)}
                className="p-1.5 text-on-dark-muted"
              >
                <ChevronDown
                  className={cn("size-4 transition-transform", catalogueOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </div>
            {catalogueOpen ? (
              <div className="flex flex-col pb-3.5 pl-4">
                {catalogueCategories.map((c) => (
                  <Link
                    key={c.value}
                    to="/catalogue"
                    search={{ category: c.value }}
                    onClick={onNavigate}
                    className="py-2 text-sm text-on-dark-muted/90"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <Link
            key={l.to}
            to={l.to}
            onClick={onNavigate}
            className="border-b border-on-dark/10 py-3.5 text-sm font-semibold text-on-dark-muted"
            activeProps={{ className: "text-gold" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ),
      )}
      <ActionLink to="/contact" className="mt-5" onClick={onNavigate}>
        Talk to us
      </ActionLink>
    </nav>
  );
}

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2.5 sm:px-8">
        <Link to="/" className="flex flex-col items-start" onClick={() => setOpen(false)}>
          <img
            src={badgeLogo}
            alt="Antofity Concepts"
            className="h-20 w-auto sm:h-24"
            width={924}
            height={480}
          />
          <span className="mt-2 text-sm font-medium tracking-wide text-gold/90">
            First class digital strategies
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) =>
            l.label === "Catalogue" ? (
              <DropdownMenu key={l.to}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="group relative flex items-center gap-1 text-[0.8rem] font-semibold tracking-wide text-on-dark-muted transition-colors hover:text-on-dark data-[state=open]:text-gold"
                  >
                    {l.label}
                    <ChevronDown
                      className="size-3.5 transition-transform group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-[12rem] rounded-sm border-border p-1.5 shadow-card"
                >
                  <DropdownMenuItem asChild>
                    <Link to="/catalogue" className="cursor-pointer text-sm font-semibold">
                      All products
                    </Link>
                  </DropdownMenuItem>
                  {catalogueCategories.map((c) => (
                    <DropdownMenuItem key={c.value} asChild>
                      <Link
                        to="/catalogue"
                        search={{ category: c.value }}
                        className="cursor-pointer text-sm"
                      >
                        {c.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative text-[0.8rem] font-semibold tracking-wide text-on-dark-muted transition-colors hover:text-on-dark"
                activeProps={{ className: "text-gold hover:text-gold" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <CartSheet />
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
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-void lg:hidden">
          <SiteHeaderMobileNav onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
