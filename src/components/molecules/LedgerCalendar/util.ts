import { isSameDate } from "@mantine/dates";
import { MoneyRecord } from "src/types/moneyRecord";

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
export const getTotalFeeOfDay = (date: Date, records: MoneyRecord[]) => {
  const recordsOfDate = records.filter((record) => isSameDate(date, record.date));
  return {
    in: recordsOfDate.filter((record) => record.amount >= 0).reduce((sum, record) => sum + record.amount, 0),
    out: recordsOfDate.filter((record) => record.amount < 0).reduce((sum, record) => sum + record.amount, 0),
  };
};
