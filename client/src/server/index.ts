import { router } from './trpc';
import { customersRouter } from './routers/customers';
import { smtpRouter } from './routers/smtp'

export const appRouter = router({
  customers: customersRouter,
  smtp: smtpRouter,
});

export type AppRouter = typeof appRouter;
