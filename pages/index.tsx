import { Button, Center, Input, List, Stack, useMantineTheme } from '@mantine/core';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { INSERT_USER, USER } from 'src/api/users';
import { useState } from 'react';

const Home = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [name, setName] = useState('');

  const [getUsers, { data: userData }] = useLazyQuery(USER);
  const [insertUser, { data: resultData, loading }] = useMutation(INSERT_USER);

  return (
    // TODO Header追加
    <Center>
      <Stack>
        <Button onClick={() => router.push('/home')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} color={theme.colors.cyan[3]}>Go Home</Button>
        <Button onClick={() => router.push('/login')} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>Go Login Page</Button>
        <Button onClick={() => router.push('/todo')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}}>Go Todo Page</Button>
        <Button onClick={() => getUsers()} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>get users</Button>
        <Input value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder='input your name' radius='sm' />
        <Button onClick={() => { if(name.length === 0) return; insertUser({ variables: { name }}); setName(''); }} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} loading={loading}>insert users</Button>
        <List>
          {userData?.user?.map((user, index) => {
            return <List.Item key={index}>{user?.name}</List.Item>
          })}
        </List>
      </Stack>
    </Center>
  );
};

export default Home;
