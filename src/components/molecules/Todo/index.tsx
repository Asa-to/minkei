import { ActionIcon, Anchor, Button, Modal, Group, List, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { BsFillTrashFill } from 'react-icons/bs';

type Form = {
  title: string,
  summary: string,
}

export const Todo = () => {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState<{ title: string, summary: string }[]>([]);
  const form = useForm<Form>({
    initialValues: {
      title: '',
      summary: '',
    },
    validate: {
      title: (title) => title.length === 0 ? 'Please input title' : null,
      summary: (summary) => summary.length === 0 ? 'Please input summary' : null,
    },
  });

  return (
    <>
      <Stack spacing='md' w='500px' p='xs'>
        <Title order={1}>Todo List</Title>
        <Text c='dimmed'>This is your todo list</Text>
        <List>
          {tasks.map((item, index) => {
            return (
              <Paper key={index} shadow='sm' radius='md' p='lg' mb='xs' withBorder>
                <Group position='apart'>
                  <Title order={5}>{item.title}</Title>
                  <ActionIcon onClick={() => setTasks((tasks) => tasks.slice(0, index).concat(tasks.slice(index+1)))}>
                    <BsFillTrashFill color='red'/>
                  </ActionIcon>
                </Group>
                <Text c='dimmed'>{item.summary}</Text>
              </Paper>
            )
          })}
        </List>
        <Group>
          <Button fullWidth onClick={() => setOpened((now) => !now)}>New Task</Button>
        </Group>
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
        <form 
          onSubmit={form.onSubmit((value, e) => {
            e.preventDefault();
            const result = form.validate();
            if (result.hasErrors) return;
            setTasks((tasks) => [...tasks, { ...value }]);
            form.reset();
            setOpened(false);
          })}
          onReset={(e) => {
            e.preventDefault();
            form.reset();
            setOpened(false);
          }}
        >
          <Stack>
            <Title order={4}>New Task</Title>
            <TextInput placeholder="Task title" label='Title' withAsterisk {...form.getInputProps('title')} />
            <TextInput placeholder="Task Summary" label='Summary' withAsterisk {...form.getInputProps('summary')} />
            <Group position='apart'>
              <Anchor component='button' type='reset'>
                <Text>cancel</Text>
              </Anchor>
              <Button type='submit'>
                Create Task
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
