import { isSameDate } from '@mantine/dates';
import { Money_Records } from 'src/gql/types';

/**
 * dateと一致する日の総出金額,総入金額を返す。
 * @param date
 * @param records
 * @param isPayment
 * @returns {
 *   in: 入金総額,
 *   out: 出金総額,
 * }
 */
export const getTotalFeeOfDay = (date: Date, records: Money_Records[]) => {
  const recordsOfDate = records.filter((record) =>
    isSameDate(date, new Date(record.date))
  );
  return {
    in: recordsOfDate
      .filter((record) => record.amount >= 0)
      .reduce((sum, record) => sum + record.amount, 0),
    out: recordsOfDate
      .filter((record) => record.amount < 0)
      .reduce((sum, record) => sum + record.amount, 0),
  };
};
