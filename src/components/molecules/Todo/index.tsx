import { ActionIcon, Anchor, Button, Modal, Group, List, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { BsFillTrashFill } from 'react-icons/bs';

export const Todo = () => {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState<{title: string, summary: string, id: number}[]>([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [id, setId] = useState(0);

  return (
    <>
      <Stack spacing='md' w='500px' p='xs'>
        <Title order={1}>Todo List</Title>
        <Text c='dimmed'>This is your todo list</Text>
        <List>
          {tasks.map((item) => {
            return (
              <Paper key={item.id} shadow='sm' radius='md' p='lg' mb='xs' withBorder>
                <Group position='apart'>
                  <Title order={5}>{item.title}</Title>
                  <ActionIcon onClick={() => setTasks((tasks) => tasks.filter((task) => task.id !== item.id))}>
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
        <Stack>
          <Title order={4}>New Task</Title>
          <TextInput placeholder="Task title" label='Title' withAsterisk value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
          <TextInput placeholder="Task Summary" label='Summary' withAsterisk value={summary} onChange={(e) => setSummary(e.currentTarget.value)} />
          <Group position='apart'>
            <Anchor component='button' type='button' onClick={() => {
              setTitle('');
              setSummary('');
              setOpened(false);
            }}>
              <Text>cancel</Text>
            </Anchor>
            <Button onClick={() => {
              if (!(title && summary)) return;
              setTasks((pre) => [...pre, {title, summary, id}]);
              setTitle('');
              setSummary('');
              setId((id) => id + 1);
              setOpened(false);
            }}>
              Create Task
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
