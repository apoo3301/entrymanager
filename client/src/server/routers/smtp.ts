import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import db from '@/drizzle';
import { smtpconfig } from '@/drizzle/schema';
import { eq, desc } from "drizzle-orm";

export const smtpRouter = router({
  create: publicProcedure.input(z.object({
    host: z.string().nonempty("Host is required"),
    port: z.number().min(1, "Port must be a positive number"),
    username: z.string().nonempty("Username is required"),
    password: z.string().nonempty("Password is required"),
    ssl: z.boolean().optional(),
  })).mutation(async ({ input }) => {
    try {
      console.log('Creating SMTP config with input:', input);

      await db.insert(smtpconfig).values({
        host: input.host,
        port: input.port,
        username: input.username,
        password: input.password,
        ssl: input.ssl || false,
      });

      console.log('SMTP config created successfully');
      return { success: true };
    } catch (error) {
      console.error('Error creating SMTP config:', error);
      throw new Error('Failed to create SMTP config.');
    }
  }),

  getCurrent: publicProcedure.query(async () => {
    try {      
      console.log('Fetching current SMTP config');

      const currentConfig = await db
        .select()
        .from(smtpconfig)
        .orderBy(desc(smtpconfig.createdAt))
        .limit(1);

      console.log('Current SMTP config:', currentConfig);

      if (currentConfig.length === 0) {
        throw new Error('No SMTP config found.');
      }

      return currentConfig[0];
    } catch (error) {
      console.error('Error fetching current SMTP config:', error);
      throw new Error('Failed to retrieve SMTP config.');
    }
  }),
});
