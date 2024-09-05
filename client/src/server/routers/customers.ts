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
    duree: z.number().min(0), // Assurez-vous que duree est positif
  })).mutation(async (opts) => {
    const { input } = opts;

    try {
      await db.insert(customers).values({
        fullname: input.fullname,
        email: input.email,
        duree: input.duree,
        createdAt: new Date(), // Assurez-vous que la date de création est incluse
      });
    } catch (e) {
      console.error('Error creating customer:', e);
      throw new Error('Failed to create customer.'); // Fournir un message d'erreur plus utile
    }
  }),

  getById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input: id } = opts;

    console.log(`Received request to fetch customer with ID: ${id}`);

    try {
      // Utiliser 'eq' pour la comparaison
      const customer = await db
        .select()
        .from(customers)
        .where(eq(customers.id, id))
        .limit(1)
        .execute(); // Peut-être que 'execute' est nécessaire

      console.log(`Fetched customer data: ${JSON.stringify(customer)}`);

      if (customer.length === 0) {
        console.log("Customer not found.");
        throw new Error("Customer not found");
      }

      return customer[0];
    } catch (e) {
      console.error('Error fetching customer by ID:', e);
      throw e;
    }
  }),
});
