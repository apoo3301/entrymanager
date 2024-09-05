import db from "@/drizzle";
import { customers } from "@/drizzle/schema"; // Assurez-vous que le chemin est correct
import { eq, desc, count, or, ilike } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const customersRouter = router({
  get: publicProcedure.input(z.object({
    page: z.number().min(1), // Assurez-vous que la page est au moins 1
    totalItems: z.number().min(1), // Assurez-vous que totalItems est au moins 1
    search: z.string().nullable(),
  })).query(async (opts) => {
    try {
      const { input } = opts;

      const offset = (input.page - 1) * input.totalItems;
      const limit = input.totalItems;

      const totalCount = await db
        .select({ count: count() })
        .from(customers)
        .where(
          input.search
            ? or(
                ilike(customers.email, `%${input.search}%`),
                ilike(customers.fullname, `%${input.search}%`)
              )
            : undefined
        );

      const totalPages = Math.ceil(totalCount[0].count / limit);

      const items = await db
        .select()
        .from(customers)
        .where(
          input.search
            ? or(
                ilike(customers.email, `%${input.search}%`),
                ilike(customers.fullname, `%${input.search}%`)
              )
            : undefined
        )
        .offset(offset)
        .limit(limit)
        .orderBy(desc(customers.createdAt)); // Trier par date de création décroissante

      return {
        items,
        totalPages
      };
    } catch (e) {
      console.error('Error fetching customers:', e);
      throw e;
    }
  }),

  create: publicProcedure.input(z.object({
    fullname: z.string().nonempty(), // Assurez-vous que le nom est non vide
    email: z.string().email(), // Validation email
    duree: z.number().min(0), // Assurez-vous que duree est positif// Assurez-vous que le pays est non vide
  })).mutation(async (opts) => {
    const { input } = opts;

    try {
      await db.insert(customers).values({
        fullname: input.fullname,
        email: input.email,
        duree: input.duree,
        createdAt: new Date(),
      });
    } catch (e) {
      console.error('Error creating customer:', e);
      throw new Error('Failed to create customer.'); // Fournir un message d'erreur plus utile
    }
  }),
  getById: publicProcedure.input(z.object({
    id: z.string(), // Assurez-vous que l'ID est une chaîne
  })).query(async ({ input }) => {
    try {
      const customer = await db.select().from(customers).where(eq(customers.id, input.id)).limit(1);
      if (customer.length === 0) {
        throw new Error('Customer not found');
      }
      return customer[0];
    } catch (e) {
      console.error('Error fetching customer by ID:', e);
      throw new Error('Failed to fetch customer.');
    }
  }),
  delete: publicProcedure.input(z.string()).mutation(async ({ input: id }) => {
    try {
      await db.delete(customers).where(eq(customers.id, id));
    } catch (e) {
      console.error('Error deleting customer:', e);
      throw new Error('Failed to delete customer.');
    }
  }),
});
