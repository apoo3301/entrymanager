import db from "@/drizzle";
import { customers } from "@/drizzle/schema";
import { eq, desc, count, or, ilike } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const customersRouter = router({
  get: publicProcedure.input(z.object({
    page: z.number().min(1),
    totalItems: z.number().min(1),
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
        .orderBy(desc(customers.createdAt));

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
    fullname: z.string().nonempty(),
    email: z.string().email(),
    duree: z.number().min(0),
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
      throw new Error('Failed to create customer.');
    }
  }),
  getById: publicProcedure.input(z.object({
    id: z.string(),
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
  edit: publicProcedure.input(z.object({
    id: z.string(),
    fullname: z.string().optional(),
    email: z.string().email().optional(),
    duree: z.number().min(0).optional(),
  })).mutation(async ({ input }) => {
    const { id, ...updateFields } = input;

    try {
      if (Object.keys(updateFields).length === 0) {
        throw new Error('No fields to update.');
      }

      await db.update(customers).set(updateFields).where(eq(customers.id, id));
    } catch (e) {
      console.error('Error updating customer:', e);
      throw new Error('Failed to update customer.');
    }
  }),
  getEmails: publicProcedure.query(async () => {
    try {
      const emails = await db
        .select({ email: customers.email })
        .from(customers)
        .orderBy(customers.email);

      return emails.map(({ email }) => email);
    } catch (e) {
      console.error('Error fetching customer emails:', e);
      throw new Error('Failed to fetch customer emails.');
    }
  }),
});
