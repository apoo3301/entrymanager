import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("No database connection string was provided to `neon()`.");
}

const sql = neon("postgresql://crm_owner:gtrcP6zifD7W@ep-quiet-resonance-a5n0k547.us-east-2.aws.neon.tech/crm?sslmode=require");

const db = drizzle(sql, { schema });

export default db;
