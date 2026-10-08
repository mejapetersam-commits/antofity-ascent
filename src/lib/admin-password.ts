import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { sql } from "./db";

const scrypt = promisify(scryptCb) as (
  password: string,
  salt: Buffer,
  keylen: number,
) => Promise<Buffer>;

const KEY_LEN = 64;

let tableReady: Promise<void> | undefined;

/** Creates the settings table on first use so no manual migration is needed. */
export function ensureAdminSettingsTable() {
  tableReady ??= sql()`
    create table if not exists admin_settings (
      id integer primary key default 1 check (id = 1),
      password_hash text not null,
      updated_at timestamptz not null default now()
    )
  `.then(
    () => undefined,
    (err) => {
      tableReady = undefined;
      throw err;
    },
  );
  return tableReady;
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, KEY_LEN);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

async function verifyHash(password: string, stored: string) {
  const [scheme, saltHex, hashHex] = stored.split("$");
  if (scheme !== "scrypt" || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = await scrypt(password, Buffer.from(saltHex, "hex"), expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

async function getStoredHash() {
  await ensureAdminSettingsTable();
  const rows = await sql()`select password_hash as "hash" from admin_settings where id = 1`;
  return (rows[0] as { hash: string } | undefined)?.hash ?? null;
}

/**
 * Checks a password against the hash stored in Neon. If no password has been
 * set there yet, falls back to the ADMIN_PASSWORD env var. Once a password is
 * saved in Neon it is the only one that works.
 * To reset: `delete from admin_settings;` falls back to ADMIN_PASSWORD.
 */
export async function verifyAdminPassword(password: string) {
  const stored = await getStoredHash();
  if (stored) return verifyHash(password, stored);

  const envPassword = process.env.ADMIN_PASSWORD;
  if (!envPassword) throw new Error("ADMIN_PASSWORD is not set");
  const a = Buffer.from(password);
  const b = Buffer.from(envPassword);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function saveAdminPassword(newPassword: string) {
  await ensureAdminSettingsTable();
  const hash = await hashPassword(newPassword);
  await sql()`
    insert into admin_settings (id, password_hash, updated_at)
    values (1, ${hash}, now())
    on conflict (id) do update set password_hash = excluded.password_hash, updated_at = now()
  `;
}
