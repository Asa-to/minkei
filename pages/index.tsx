import {
  Button,
  Center,
  Input,
  List,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useRouter } from 'next/router';
import {
  useInsertMoneyRecordMutation,
  useInsertUserMutation,
  useMoneyRecordLazyQuery,
  useUserLazyQuery,
} from 'src/gql/types';
import { useInputState } from '@mantine/hooks';
import { Prism } from '@mantine/prism';
import { InputForm } from 'src/components/molecules/InputModal/inputForm';
import { InputModal } from 'src/components/molecules/InputModal';
import { useState } from 'react';

const Home = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [name, setName] = useInputState('');

  const [fetchUser, { data: userData, loading: fetchLoading }] =
    useUserLazyQuery();
  const [insertUser, { data: resultData, loading: insertLoading }] =
    useInsertUserMutation();
  const [fetchMoneyRecord, { data: moneyRecord, loading: moneyRecordLoading }] =
    useMoneyRecordLazyQuery();
  const [
    insertMoneyRecord,
    { data: resultInsertMoneyRecord, loading: insertMoneyRecordLoading },
  ] = useInsertMoneyRecordMutation();
  const [open, setOpen] = useState(false);

  return (
    // TODO Header追加
    <Center>
      <Stack w={500}>
        <Button
          onClick={() => router.push('/home')}
          variant='gradient'
          gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6] }}
          color={theme.colors.cyan[3]}
        >
          Go Home
        </Button>
        <Button
          onClick={() => router.push('/login')}
          variant='gradient'
          gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0] }}
        >
          Go Login Page
        </Button>
        <Button
          onClick={() => router.push('/todo')}
          variant='gradient'
          gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6] }}
        >
          Go Todo Page
        </Button>
        <Button
          onClick={() => fetchUser()}
          variant='gradient'
          gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0] }}
          loading={fetchLoading}
        >
          get users
        </Button>
        <Button
          onClick={() => fetchMoneyRecord()}
          variant='gradient'
          gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6] }}
          loading={moneyRecordLoading}
        >
          fetch money record
        </Button>
        <Button
          onClick={() =>
            insertMoneyRecord({
              variables: {
                title: 'unko',
                amount: 10000,
                payer_id: userData?.user[0].id,
              },
            })
          }
          variant='gradient'
          gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0] }}
          loading={insertMoneyRecordLoading}
        >
          insert money record
        </Button>
        <Input
          value={name}
          onChange={setName}
          placeholder='input your name'
          radius='sm'
        />
        <Button
          onClick={() => {
            if (name.length === 0) return;
            insertUser({ variables: { name } });
            setName('');
          }}
          variant='gradient'
          gradient={{ from: theme.colors.cyan[0], to: theme.colors.red[6] }}
          loading={insertLoading}
        >
          insert users
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant='gradient'
          gradient={{ from: theme.colors.red[6], to: theme.colors.cyan[0] }}
        >
          openModal
        </Button>
        <List>
          {userData?.user?.map((user, index) => {
            return <List.Item key={index}>{user?.name}</List.Item>;
          })}
        </List>
        <List>
          {moneyRecord?.money_records?.map((moneyRecord, index) => {
            return <Prism language='json'>{JSON.stringify(moneyRecord)}</Prism>;
          })}
        </List>
        <InputModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          selectedDate={new Date()}
          onSubmit={() => {
            setOpen(false);
          }}
        />
      </Stack>
    </Center>
  );
};

export default Home;
