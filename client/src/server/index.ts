import { customers } from "@/drizzle/schema";
import { customersRouter } from "./routers/customers";
import { router } from "./trpc";

export const appRouter = router({
  customers: customersRouter,
});

export type AppRouter = typeof appRouter;