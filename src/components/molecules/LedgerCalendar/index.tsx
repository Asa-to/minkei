import { Stack, Text, useMantineTheme } from '@mantine/core';
import { Calendar, isSameMonth } from '@mantine/dates';
import { useState } from 'react';
import 'dayjs/locale/ja';
import { getTotalFeeOfDay } from './util';
import { Money_Records } from 'src/gql/types';

type Props = {
  moneyRecords: Money_Records[];
  moneyFetching: boolean;
};

export const LedgerCalendar = (props: Props) => {
  const { moneyRecords } = props;
  const [date, setDate] = useState<Date | null>(new Date());
  // 表示中の月のデータを抜き出す
  const curMonthRecords = moneyRecords.filter((record) =>
    date ? isSameMonth(new Date(record.date), date) : false
  );
  const theme = useMantineTheme();

  return (
    <Calendar
      onChange={(value) => setDate(value)}
      weekendDays={[]}
      locale='ja'
      fullWidth
      labelFormat='YYYY年 MM月'
      styles={(theme) => ({
        calendarBase: {
          minWidth: '400px',
          maxWidth: '660px',
        },
        cell: {
          border: `1px solid ${theme.colors.gray[4]}`,
        },
        weekdayCell: {
          border: `1px solid ${theme.colors.gray[4]}`,
          background: theme.colors.gray[2],
        },
        day: {
          height: '60px',
        },
      })}
      renderDay={(date) => {
        const fees = getTotalFeeOfDay(date, curMonthRecords);
        return (
          <Stack spacing={0} justify='space-evenly' align='stretch'>
            <Text align='left' size='xs'>
              {' '}
              {date.getDate()}
            </Text>
            <Text align='right' size='xs' color={theme.colors.blue[5]}>
              {fees.in}
            </Text>
            <Text align='right' size='xs' color={theme.colors.red[5]}>
              {fees.out}
            </Text>
          </Stack>
        );
      }}
    />
  );
};
