import { useSession } from "@tanstack/react-start/server";

type AdminSessionData = {
  isAdmin?: boolean;
};

/**
 * Encrypted, signed, httpOnly cookie session for the shared admin login.
 * Requires SESSION_SECRET (32+ characters) to be set in the environment.
 */
export function adminSession() {
  const password = process.env.SESSION_SECRET;
  if (!password) {
    throw new Error("SESSION_SECRET is not set");
  }
  // Not a React hook — this is TanStack Start's server-only h3 session helper.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSession<AdminSessionData>({
    name: "antofity_admin",
    password,
    maxAge: 60 * 60 * 24 * 14, // 14 days
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  });
}
