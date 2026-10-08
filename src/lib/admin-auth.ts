import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { adminSession } from "./session";
import { checkRateLimit, recordFailure, resetRateLimit } from "./rate-limit";
import { saveAdminPassword, verifyAdminPassword } from "./admin-password";

export const adminLogin = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { password: string })
  .handler(async ({ data }) => {
    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const { limited } = await checkRateLimit(ip);
    if (limited) {
      throw new Error("TOO_MANY_ATTEMPTS");
    }

    if (!(await verifyAdminPassword(data.password))) {
      await recordFailure(ip);
      throw new Error("INVALID_PASSWORD");
    }

    await resetRateLimit(ip);
    const session = await adminSession();
    await session.update({ isAdmin: true });
    return { ok: true as const };
  });

export const changeAdminPassword = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { currentPassword: string; newPassword: string })
  .handler(async ({ data }) => {
    await requireAdmin();

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const { limited } = await checkRateLimit(ip);
    if (limited) throw new Error("TOO_MANY_ATTEMPTS");

    if (!(await verifyAdminPassword(data.currentPassword))) {
      await recordFailure(ip);
      throw new Error("INVALID_PASSWORD");
    }
    if (typeof data.newPassword !== "string" || data.newPassword.length < 10) {
      throw new Error("PASSWORD_TOO_SHORT");
    }

    await resetRateLimit(ip);
    await saveAdminPassword(data.newPassword);
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
