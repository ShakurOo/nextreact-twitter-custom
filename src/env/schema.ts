import { z } from 'zod';

export const serverSchema = z.object({
  // Définis toutes tes variables utilisées côté backend
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});
export const clientSchema = z.object({
  // Définis toutes tes variables utilisées côté frontend
});

type ClientScheme = {
  [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined;
};

export const clientEnv: ClientScheme = {};
