import 'dayjs/locale/ja';
import { LedgerCalendar } from 'src/components/molecules/LedgerCalendar';
import { useMoneyRecordLazyQuery, useMoneyRecordQuery } from 'src/gql/types';

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

  const moneyRecords =
    moneyData?.money_records ?? initialMoney?.money_records ?? [];
  const moneyFetching = moneyLoading || initMoneyLoading;

  // GraphQLエラーをキャッチ
  if (moneyError || initMoneyError) {
    return <></>;
  }

  return (
    <LedgerCalendar moneyRecords={moneyRecords} moneyFetching={moneyFetching} />
  );
};

export default Home;
