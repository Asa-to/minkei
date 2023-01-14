import { z } from 'zod';

const configSchema = z.object({
  HASURA_ENDPOINT: z.string().url(),
});

type Config = z.infer<typeof configSchema>;

const env = {
  HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
}

export const getConfig = () => {
  // configの型チェック(足りない型があればcatchされる)
  try {
    configSchema.parse(env);
  } catch (e) {
    console.error(e);
  }

  return {
    config: env as Config
  };
}
