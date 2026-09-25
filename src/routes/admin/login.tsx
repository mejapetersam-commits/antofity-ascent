import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { adminLogin } from "@/lib/admin-auth";
import { actionVariants } from "@/components/site/primitives";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [{ title: "Admin Login | Antofity Concepts" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await adminLogin({ data: { password } });
      await navigate({ to: "/admin/catalogue" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setError(
        message.includes("TOO_MANY_ATTEMPTS")
          ? "Too many attempts. Try again in 15 minutes."
          : "Incorrect password.",
      );
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-sm border border-border bg-card p-8 shadow-card"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm bg-primary text-primary-foreground">
            <Lock className="size-4" aria-hidden="true" />
          </span>
          <h1 className="text-lg font-bold text-foreground">Catalogue admin</h1>
        </div>

        <label
          htmlFor="password"
          className="mt-8 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
        />

        {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className={`${actionVariants({ variant: "primary" })} mt-6 w-full`}
        >
          {loading ? "Checking..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
