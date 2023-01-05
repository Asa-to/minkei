import 'dayjs/locale/ja';
import { LedgerCalendar } from 'src/components/molecules/LedgerCalendar';
import { MoneyRecord } from 'src/types/moneyRecord';

const Home = () => {
  const record: MoneyRecord = {
    title: 'test',
    payerId: '111',
    date: new Date(),
    amount: 100,
  }
  const moneyRecords = [
    record,
    record,
    record,
    record,
    {...record, amount: -100},
    {...record, amount: -100},
    {...record, amount: -100},
    {...record, amount: -100},
    {...record, amount: -100},
    {...record, amount: -100},
  ];

  return (
    <LedgerCalendar moneyRecords={moneyRecords} />
  )
};

export default Home;
