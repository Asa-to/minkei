import {
  ActionIcon,
  Anchor,
  Button,
  Modal,
  Group,
  List,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { InputCard } from './InputCard';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState<{ title: string; summary: string }[]>([]);
  const removeTodo = (id: number) => {
    setTasks((tasks) => tasks.slice(0, id).concat(tasks.slice(id + 1)));
  };

  return (
    <>
      <Stack spacing='md' w='500px' p='xs'>
        <Title order={1}>Todo List</Title>
        <Text c='dimmed'>This is your todo list</Text>
        <Group>
          <Button fullWidth onClick={() => setOpened((now) => !now)}>
            New Task
          </Button>
        </Group>
        <TodoList todos={tasks} onClickRemoveButton={removeTodo} />
      </Stack>
      <Modal
        opened={opened}
        centered
        withCloseButton={false}
        onClose={() => setOpened(false)}
        exitTransitionDuration={500}
        overlayOpacity={0}
        closeOnEscape
      >
        <InputCard
          onSubmit={(todo) => {
            setTasks((todos) => [...todos, todo]);
            setOpened(false);
          }}
        />
      </Modal>
    </>
  );
};
