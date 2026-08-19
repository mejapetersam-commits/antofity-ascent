import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-glow hover:brightness-110 hover:shadow-lift",
        outlineLight:
          "border border-on-dark-muted/40 text-on-dark hover:border-gold hover:text-gold",
        outlineDark:
          "border border-foreground/20 text-foreground hover:border-gold hover:text-gold",
        ghost: "text-gold hover:gap-3 px-0 py-0",
      },
      size: {
        default: "",
        sm: "px-4 py-2.5 text-[0.65rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ActionProps = VariantProps<typeof actionVariants> & { className?: string };

export function ActionLink({
  variant,
  size,
  className,
  ...props
}: ActionProps & ComponentProps<typeof Link>) {
  return <Link className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionAnchor({
  variant,
  size,
  className,
  ...props
}: ActionProps & ComponentProps<"a">) {
  return <a className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function Section({
  tone = "light",
  className,
  children,
  id,
}: {
  tone?: "light" | "white" | "dark" | "graphite";
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    white: "bg-card text-card-foreground",
    dark: "surface-dark grid-tech",
    graphite: "bg-graphite text-on-dark",
  } as const;
  return (
    <section id={id} className={cn("relative py-20 md:py-28", tones[tone], className)}>
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        dark ? "text-gold" : "text-muted-foreground",
      )}
    >
      <span className="rule-gold inline-block h-px w-8" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  as: As = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <As
        className={cn(
          "mt-5 text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl",
          dark ? "text-on-dark" : "text-foreground",
        )}
      >
        {title}
      </As>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="surface-dark grid-tech relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading as="h1" dark eyebrow={eyebrow} title={title} intro={intro} />
      </div>
      <div className="flow-line absolute inset-x-0 bottom-0 h-px bg-on-dark/10" aria-hidden="true" />
    </section>
  );
}
