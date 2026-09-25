import { sql } from "./db";

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

/**
 * Fixed-window rate limiter backed by Postgres (in-memory counters don't
 * survive serverless cold starts or multiple instances). Call `check()`
 * before doing the sensitive work; call `recordFailure()` only when it
 * actually fails, and `reset()` on success.
 */
export async function checkRateLimit(identifier: string) {
  const rows = await sql()`
    select attempts, window_start as "windowStart"
    from admin_login_attempts
    where identifier = ${identifier}
  `;
  const row = rows[0] as { attempts: number; windowStart: string } | undefined;
  if (!row) return { limited: false as const };

  const windowExpired = Date.now() - new Date(row.windowStart).getTime() > WINDOW_MS;
  if (windowExpired) return { limited: false as const };

  if (row.attempts >= MAX_ATTEMPTS) {
    return { limited: true as const };
  }
  return { limited: false as const };
}

export async function recordFailure(identifier: string) {
  await sql()`
    insert into admin_login_attempts (identifier, attempts, window_start)
    values (${identifier}, 1, now())
    on conflict (identifier) do update set
      attempts = case
        when now() - admin_login_attempts.window_start > interval '15 minutes'
          then 1
        else admin_login_attempts.attempts + 1
      end,
      window_start = case
        when now() - admin_login_attempts.window_start > interval '15 minutes'
          then now()
        else admin_login_attempts.window_start
      end
  `;
}

export async function resetRateLimit(identifier: string) {
  await sql()`delete from admin_login_attempts where identifier = ${identifier}`;
}
