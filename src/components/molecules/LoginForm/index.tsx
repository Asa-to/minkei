import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

export const LoginForm = (props: PaperProps) => {
  return (
    <Paper p='xl' radius='md' withBorder {...props}>
      <Title order={3}>Welcome back to Mikei, login with</Title>
      <Group spacing='sm' noWrap mb='md' mt='md'>
        <Button
          leftIcon={<FcGoogle />}
          radius='lg'
          size='sm'
          variant='default'
          color='dark'
          fullWidth
        >
          Google
        </Button>
        <Button
          leftIcon={<AiFillGithub />}
          radius='lg'
          size='sm'
          variant='default'
          color='dark'
          fullWidth
        >
          GitHub
        </Button>
      </Group>
      <Divider my='lg' label='Or continue with email' labelPosition='center' />

      <Stack justify='center' spacing='md'>
        <TextInput
          placeholder='hello@email.com'
          label='Email address'
          radius='sm'
          size='sm'
          withAsterisk
        />
        <PasswordInput
          placeholder='Password'
          label='Password'
          radius='sm'
          size='sm'
          withAsterisk
        />
        <Checkbox label='keep me logged in' radius='sm' size='sm' />
      </Stack>
      <Group noWrap position='apart'>
        <Text>
          <Anchor variant='link' color='dimmed'>
            Don&apos;t have an account? Register
          </Anchor>
        </Text>
        <Button
          variant='gradient'
          gradient={{ from: 'indigo', to: 'cyan' }}
          radius='sm'
          size='sm'
        >
          Login
        </Button>
      </Group>
    </Paper>
  );
};
