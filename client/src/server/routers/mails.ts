import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { emails } from "@/drizzle/schema";
import db from "@/drizzle";

export const emailRouter = router({
    createTemplate: publicProcedure
    .input(z.object({
      name: z.string(),
    }))
    .mutation(async ({ input }) => {
      const { name } = input;

      const [newTemplate] = await db.insert(emails).values({
        name,
        subject: "",
        body: "",
        createdat: new Date(),
      }).returning();

      return newTemplate;
    }),
    getTemplates: publicProcedure.query(async () => {
        const templates = await db.select().from(emails);
        return templates;
    }),
});
