import {
  Anchor,
  Text,
  Button,
  Group,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCallback } from 'react';
import { Todo } from '../types';
import { formSchema } from './schema';

type Props = {
  onSubmit: (todo: Todo) => void;
};

export const InputCard = (props: Props) => {
  const { onSubmit } = props;
  const form = useForm<Todo>({
    initialValues: {
      title: '',
      summary: '',
    },
    // validate: (todo) => formSchema.parse(todo),
  });
  // const onSubmit = form.onSubmit((value, e) => {
  //   const result = form.validate();
  //   if (result.hasErrors) return;
  //   setTodo(value);
  //   form.reset();
  // });

  return (
    <form
      onSubmit={form.onSubmit((value, e) => {
        // const result = form.validate();
        // if (result.hasErrors) return;
        onSubmit(value);
        form.reset;
      })}
    >
      <Stack>
        <Title order={4}>New Task</Title>
        <TextInput
          placeholder='Task title'
          label='Title'
          withAsterisk
          {...form.getInputProps('title')}
        />
        <TextInput
          placeholder='Task Summary'
          label='Summary'
          withAsterisk
          {...form.getInputProps('summary')}
        />
        <Group position='apart'>
          <Anchor component='button' type='reset'>
            <Text>cancel</Text>
          </Anchor>
          <Button type='submit'>Create Task</Button>
        </Group>
      </Stack>
    </form>
  );
};
