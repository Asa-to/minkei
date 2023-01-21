import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
const env = dotenv.config();

const config: CodegenConfig = {
  schema: [
    {
      [env.parsed?.NEXT_PUBLIC_HASURA_ENDPOINT as string]: {
        headers: {
          'x-hasura-admin-secret': env.parsed
            ?.NEXT_PUBLIC_HASURA_SECRET_KEY as string,
        },
      },
    },
  ],
  documents: ['src/api/**/*.ts'],
  generates: {
    './src/gql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHook: true,
        enumsAsConst: true,
        skipTypename: true,
      },
    },
  },
};

export default config;
