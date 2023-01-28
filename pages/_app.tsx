import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getConfig } from 'src/config';
import 'styles/globals.css';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { config } = getConfig();
  const httpLink = createHttpLink({
    uri: config.HASURA_ENDPOINT,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        'x-hasura-admin-secret': config.HASURA_SECRET_KEY,
        ...headers,
      },
    };
  });
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  return (
    <>
      <Head>
        <title>みんけい</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <NotificationsProvider>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
