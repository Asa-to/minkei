import { z } from "zod";

const configSchema = z.object({
  HASURA_ENDPOINT: z.string().url(),
  HASURA_SECRET_KEY: z.string(),
});

type Config = z.infer<typeof configSchema>;

const env: Config = {
  HASURA_ENDPOINT: process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
  HASURA_SECRET_KEY: process.env.NEXT_PUBLIC_HASURA_SECRET_KEY as string,
};

export const getConfig = () => {
  // configの型チェック(足りない型があればcatchされる)
  try {
    configSchema.parse(env);
  } catch (e) {
    console.error(e);
  }

  return {
    config: env as Config,
  };
};
