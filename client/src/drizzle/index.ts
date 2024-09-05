import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("No database connection string was provided to `neon()`.");
}

const sql = neon(DATABASE_URL);

const db = drizzle(sql, { schema });

export default db;
