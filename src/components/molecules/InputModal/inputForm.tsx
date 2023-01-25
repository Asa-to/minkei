import {
  Button,
  Group,
  NumberInput,
  Stack,
  Switch,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { ImCalendar } from 'react-icons/im';
import { BsCalculator, BsFileEarmarkText } from 'react-icons/bs';

export type FormData = {
  date: Date;
  money: number;
  item: string;
};

type Props = {
  onSubmit: (data?: FormData) => void;
  selectedDate: Date;
  onCancel?: () => void;
};

export const InputForm = ({ onSubmit, onCancel, selectedDate }: Props) => {
  const theme = useMantineTheme();
  const red = theme.colors.red[6];
  const blue = theme.colors.blue[6];
  const form = useForm({
    initialValues: {
      date: selectedDate,
      money: undefined,
      item: '',
      switch: false,
    },
    validate: {
      date: (date) => (date ? null : 'please select date'),
      money: (money) =>
        typeof money !== 'number' ? 'please input number' : null,
      item: (item) => (item.length === 0 ? 'please input text' : null),
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (form.validate().hasErrors) return;
        form.reset();
        onSubmit({ ...form.values, money: form.values.money ?? 0 });
      }}
      onReset={() => {
        onCancel && onCancel();
      }}
    >
      <Stack>
        <Title>帳簿記録</Title>
        <Switch
          onLabel='収入'
          offLabel='支出'
          styles={{
            trackLabel: { color: 'white' },
            thumb: { background: 'white' },
            track: { background: 'red' },
          }}
          color='blue'
          size='lg'
          {...form.getInputProps('switch')}
        />
        <DatePicker
          placeholder='YYYY/MM/DD'
          label='日付'
          locale='ja'
          clearable={false}
          inputFormat='YYYY年MM月DD日'
          icon={<ImCalendar />}
          withAsterisk
          {...form.getInputProps('date')}
        />
        <NumberInput
          icon={
            <BsCalculator
            // color={form.getInputProps('switch').value ? blue : red}
            />
          }
          label='金額'
          hideControls
          styles={{
            input: {
              color: form.getInputProps('switch').value ? blue : red,
            },
          }}
          withAsterisk
          {...form.getInputProps('money')}
        />
        <TextInput
          icon={<BsFileEarmarkText />}
          label='項目'
          withAsterisk
          {...form.getInputProps('item')}
        />
        <Group>
          <Button component='button' type='reset'>
            キャンセル
          </Button>
          <Button component='button' type='submit'>
            登録
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
