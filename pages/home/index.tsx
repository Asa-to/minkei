import 'dayjs/locale/ja';
import { FormData } from 'src/components/molecules/InputModal/inputForm';
import { LedgerCalendar } from 'src/components/molecules/LedgerCalendar';
import { showNotification, updateNotification } from '@mantine/notifications';
import {
  useInsertMoneyRecordMutation,
  useMoneyRecordLazyQuery,
  useMoneyRecordQuery,
} from 'src/gql/types';
import { BsCheck } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

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
  const isMoneyFetching = moneyLoading || initMoneyLoading;

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
      onError: () => {
        updateNotification({
          id: 'load-money-records',
          color: 'red',
          title: 'an error occurred.',
          message:
            'Notification will close in 2 seconds, you can close this notification now',
          icon: <ImCross size={16} />,
          autoClose: 2000,
        });
      },
      onCompleted: () => {
        updateNotification({
          id: 'load-money-records',
          color: 'teal',
          title: 'Data was loaded',
          message:
            'Notification will close in 2 seconds, you can close this notification now',
          icon: <BsCheck size={16} />,
          autoClose: 2000,
        });
      },
    });
    showNotification({
      id: 'load-money-records',
      loading: true,
      title: 'Loading your data',
      message:
        'Data will be loaded in about 3 seconds, you cannot close this yet',
      autoClose: false,
      disallowClose: true,
    });
  };

  return (
    <>
      <LedgerCalendar moneyRecords={moneyRecords} onDayClick={insertForm} />
    </>
  );
};

export default Home;
