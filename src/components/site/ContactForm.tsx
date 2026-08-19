import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { actionVariants } from "./primitives";
import { company } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Requirement: ${data.get("requirement")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "ICT enquiry from " + String(data.get("organisation") || data.get("name") || "website"),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
  const label = "block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required className={`mt-2 ${field}`} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="organisation">
            Organisation
          </label>
          <input id="organisation" name="organisation" className={`mt-2 ${field}`} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${field}`}
            autoComplete="email"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`mt-2 ${field}`}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="requirement">
          Requirement
        </label>
        <select id="requirement" name="requirement" className={`mt-2 ${field}`} defaultValue="">
          <option value="" disabled>
            Select a requirement
          </option>
          <option>Network &amp; Infrastructure</option>
          <option>Hardware Sales &amp; Support</option>
          <option>Unified Communications</option>
          <option>Managed IT Services</option>
          <option>CCTV &amp; Security Systems</option>
          <option>Other / General enquiry</option>
        </select>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Project details
        </label>
        <textarea id="message" name="message" rows={5} className={`mt-2 ${field}`} />
      </div>

      <button type="submit" className={actionVariants({ variant: "primary" })}>
        Send enquiry <ArrowRight className="size-4" aria-hidden="true" />
      </button>

      {sent ? (
        <p className="flex items-center gap-2 text-sm text-muted-foreground" role="status">
          <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
          Your email client has been opened with the enquiry details. You can also write to{" "}
          {company.email} directly.
        </p>
      ) : null}
    </form>
  );
}
