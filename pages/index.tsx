import { Button, Center, Input, List, Stack, useMantineTheme } from '@mantine/core';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { INSERT_USER, USER } from 'src/api/users';
import { useState } from 'react';
import { useUserLazyQuery } from 'src/gql/types';
import { useInputState } from '@mantine/hooks';

const Home = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [name, setName] = useInputState('');

  const [fetchUser, { data: userData, loading: fetchLoading }] = useUserLazyQuery();
  const [insertUser, { data: resultData, loading: insertLoading}] = useMutation(INSERT_USER);

  return (
    // TODO Header追加
    <Center>
      <Stack>
        <Button onClick={() => router.push('/home')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} color={theme.colors.cyan[3]}>Go Home</Button>
        <Button onClick={() => router.push('/login')} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}>Go Login Page</Button>
        <Button onClick={() => router.push('/todo')} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}}>Go Todo Page</Button>
        <Button onClick={() => fetchUser()} variant='gradient' gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0]}}loading={fetchLoading}>get users</Button>
        <Input value={name} onChange={setName} placeholder='input your name' radius='sm' />
        <Button onClick={() => { if(name.length === 0) return; insertUser({ variables: { name }}); setName(''); }} variant='gradient' gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6]}} loading={insertLoading}>insert users</Button>
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
