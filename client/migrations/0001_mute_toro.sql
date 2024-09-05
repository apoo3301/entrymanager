CREATE TABLE IF NOT EXISTS "smtpconfig" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"host" text NOT NULL,
	"port" integer NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"ssl" boolean NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
