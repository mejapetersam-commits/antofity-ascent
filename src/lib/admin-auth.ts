import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { adminSession } from "./session";
import { checkRateLimit, recordFailure, resetRateLimit } from "./rate-limit";

export const adminLogin = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { password: string })
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) {
      throw new Error("ADMIN_PASSWORD is not set");
    }

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const { limited } = await checkRateLimit(ip);
    if (limited) {
      throw new Error("TOO_MANY_ATTEMPTS");
    }

    if (data.password !== expected) {
      await recordFailure(ip);
      throw new Error("INVALID_PASSWORD");
    }

    await resetRateLimit(ip);
    const session = await adminSession();
    await session.update({ isAdmin: true });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const session = await adminSession();
  await session.clear();
  return { ok: true as const };
});

export const getAdminSessionStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await adminSession();
  return { isAdmin: Boolean(session.data.isAdmin) };
});

/** Throws if the current request does not carry a valid admin session. */
export async function requireAdmin() {
  const session = await adminSession();
  if (!session.data.isAdmin) {
    throw new Error("UNAUTHORIZED");
  }
}
