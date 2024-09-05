import { router } from './trpc';
import { customersRouter } from './routers/customers';
import { smtpRouter } from './routers/smtp'
import { emailRouter } from './routers/mails';

export const appRouter = router({
  customers: customersRouter,
  smtp: smtpRouter,
  mails: emailRouter,
});

export type AppRouter = typeof appRouter;
