CREATE TABLE IF NOT EXISTS "listing" (
	"id" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"address" text,
	"coordinates" json,
	"createdBy" text,
	"active" boolean DEFAULT false NOT NULL,
	CONSTRAINT "listing_address_unique" UNIQUE("address")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "listing" ADD CONSTRAINT "listing_createdBy_user_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
