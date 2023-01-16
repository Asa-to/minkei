import { Button, Center, Stack, useMantineTheme } from '@mantine/core';
import { useLazyQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { Prism } from '@mantine/prism';

const Home = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const GET_USER = gql`
    query users {
      user {
        id
        name
      }
    }
  `;

  const [getUsers, { data, loading, error }] = useLazyQuery(GET_USER);

  return (
    // TODO Header追加
    <Center>
      <Stack>
        <Button onClick={() => router.push('/home')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} color={theme.colors.cyan[3]}>Go Home</Button>
        <Button onClick={() => router.push('/login')} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>Go Login Page</Button>
        <Button onClick={() => getUsers()} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>get users</Button>
        <Prism language='json' style={{width: '300px'}}>{data && JSON.stringify(data?.user) || 'no data'}</Prism>
      </Stack>
    </Center>
  );
};

export default Home;
