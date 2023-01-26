import 'dayjs/locale/ja';
import { FormData } from 'src/components/molecules/InputModal/inputForm';
import { LedgerCalendar } from 'src/components/molecules/LedgerCalendar';
import {
  useInsertMoneyRecordMutation,
  useMoneyRecordLazyQuery,
  useMoneyRecordQuery,
} from 'src/gql/types';

const Home = () => {
  const [
    fetchMoney,
    { data: moneyData, loading: moneyLoading, error: moneyError },
  ] = useMoneyRecordLazyQuery();
  const {
    data: initialMoney,
    loading: initMoneyLoading,
    error: initMoneyError,
  } = useMoneyRecordQuery();
  const [
    insertMoney,
    { data: insertResult, loading: inserting, error: insertError },
  ] = useInsertMoneyRecordMutation();
  const moneyRecords =
    moneyData?.money_records ?? initialMoney?.money_records ?? [];
  const moneyFetching = moneyLoading || initMoneyLoading;

  // GraphQLエラーをキャッチ
  if (moneyError || initMoneyError || insertError) {
    return <></>;
  }
  const insertForm = ({ money, title, date }: FormData) => {
    console.log(date);
    insertMoney({
      variables: {
        date,
        amount: money,
        title: title,
        payer_id: '0be67a03-8839-4828-beb6-adc82816e6f5',
      },
    });
  };
  return (
    <>
      <LedgerCalendar
        moneyRecords={moneyRecords}
        moneyFetching={moneyFetching}
        onDayClick={insertForm}
      />
    </>
  );
};

export default Home;
