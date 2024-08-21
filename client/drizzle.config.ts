import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://whriv_owner:R4PumBqQOwt7@ep-broad-hall-a5hm2ebb.us-east-2.aws.neon.tech/auth_db?sslmode=require";

const drizzleConfig = {
  schema: "./src/drizzle/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: { url: DATABASE_URL },
} satisfies Config;

export default defineConfig(drizzleConfig);
