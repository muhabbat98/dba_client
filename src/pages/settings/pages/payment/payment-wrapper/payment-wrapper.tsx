import { useEffect } from 'react';
import AddCards from '../add-cards';
import NoCards from '../no-cards';
import { usePayment } from '../context';
import { useActionCreators, useSelector } from '../../../../../hooks';
import { PaymentWrapperContainer } from './style';
import MainLoader from '../../../../../components/main-loader';
import BankDetails from '../bank-details';

const PaymentWrapper = () => {
  const {
    state: { modal },
  } = usePayment();
  const { cards } = useSelector((state) => state.bankDetails);
  const { fetchAllcards } = useActionCreators();

  useEffect(() => {
    fetchAllcards();
  }, []);

  const isCardExist = cards.length === 0;

  console.log(cards);

  return (
    <PaymentWrapperContainer isLoading={isCardExist}>
      {isCardExist && <NoCards />}
      {modal && <AddCards />}
      {/* {isCardExist && <MainLoader />} */}
      {!isCardExist && <BankDetails cards={cards} />}
    </PaymentWrapperContainer>
  );
};

export default PaymentWrapper;
