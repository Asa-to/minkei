import { Button, Center, Stack, useMantineTheme } from '@mantine/core';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Prism } from '@mantine/prism';
import { INSERT_USER, USER } from 'src/api/users';
import { useForm } from '@mantine/form';

const Home = () => {
  const theme = useMantineTheme();
  const router = useRouter();

  const [getUsers, { data: userData }] = useLazyQuery(USER);
  const [insertUser, { data: mudationResult }] = useLazyQuery(INSERT_USER);

  return (
    // TODO Header追加
    <Center>
      <Stack>
        <Button onClick={() => router.push('/home')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} color={theme.colors.cyan[3]}>Go Home</Button>
        <Button onClick={() => router.push('/login')} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>Go Login Page</Button>
        <Button onClick={() => getUsers()} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>get users</Button>
        <Prism language='json' style={{width: '300px'}}>{userData && JSON.stringify(userData?.user) || 'no data'}</Prism>
      </Stack>
    </Center>
  );
};

export default Home;
