import { Inter } from '@next/font/google';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getConfig } from 'src/config';
import { Button, Center, Code, Stack, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { Prism } from '@mantine/prism';
import { useState } from 'react';

const Home = () => {
  const [response, setResponse] = useState('');
  const { config } = getConfig();
  const httpLink = createHttpLink({
    uri: config.HASURA_ENDPOINT,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        'x-hasura-admin-secret': config.HASURA_SECRET_KEY,
        ...headers,
      }
    }
  })
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  const theme = useMantineTheme();
  const router = useRouter();
  const getUsers = async () => {
    const result = await apolloClient.query({
      query: gql`
        query users {
          user {
            id
            name
          }
        }
      `
    });
    setResponse(result.error?.message ?? JSON.stringify(result.data));
  }

  return (
    // TODO Header追加
    <Center>
      <Stack>
        <Button onClick={() => router.push('/home')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} color={theme.colors.cyan[3]}>Go Home</Button>
        <Button onClick={() => router.push('/login')} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>Go Login Page</Button>
        <Button onClick={getUsers} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>get users</Button>
        <Prism language='json' style={{width: '300px'}}>{response || 'no data'}</Prism>
      </Stack>
    </Center>
  );
};

export default Home;
