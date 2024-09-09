import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';  // Utiliser httpBatchLink
import { type AppRouter } from '@/server';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://146.59.32.165/api/trpc',  // Remplacez par l'URL de votre serveur
    }),
  ],
});
