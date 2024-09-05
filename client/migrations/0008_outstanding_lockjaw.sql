ALTER TABLE "emails" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "emails" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "emails" ADD COLUMN "name" text NOT NULL;