import { router } from "./trpc";
import { customersRouter } from "./routers/customers";

export const appRouter = router({
  customers: customersRouter,
});

export type AppRouter = typeof appRouter;
