import { neon } from "@neondatabase/serverless";

let client: ReturnType<typeof neon> | undefined;

/**
 * Lazily-created Neon serverless SQL client. Call as a tagged template:
 *   const rows = await sql()`select * from catalogue_items`;
 */
export function sql() {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    client = neon(url);
  }
  return client;
}
