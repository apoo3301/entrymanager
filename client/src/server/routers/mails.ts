import { eq, desc, count, or, ilike } from "drizzle-orm";
import { publicProcedure, router } from "../trpc";
import { emails } from "@/drizzle/schema";
import db from "@/drizzle";
import { z } from "zod";

export const emailRouter = router({
  saveTemplate: publicProcedure
    .input(
      z.object({
        subject: z.string(),
        body: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { subject, body } = input;

      const [savedTemplate] = await db
        .insert(emails)
        .values({
          subject,
          body,
        })
        .returning();

      return savedTemplate;
    }),
});
