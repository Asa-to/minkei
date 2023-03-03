import { ActionIcon, Group, List, Paper, Title, Text } from '@mantine/core';
import { BsFillTrashFill } from 'react-icons/bs';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
  onClickRemoveButton: (id: number) => void;
};

export const TodoList = (props: Props) => {
  const { todos, onClickRemoveButton } = props;
  return (
    <List>
      {todos.map((item, index) => {
        return (
          <Paper key={index} shadow='sm' radius='md' p='lg' mb='xs' withBorder>
            <Group position='apart'>
              <Title order={5}>{item.title}</Title>
              <ActionIcon onClick={() => onClickRemoveButton(index)}>
                <BsFillTrashFill color='red' />
              </ActionIcon>
            </Group>
            <Text c='dimmed'>{item.summary}</Text>
          </Paper>
        );
      })}
    </List>
  );
};
