import React from 'react';
import AddCards from '../add-cards';
import NoCards from '../no-cards';
import { usePayment } from '../context';

const PaymentWrapper = () => {
  const {
    state: { modal, cards },
  } = usePayment();
  return (
    <div>
      {cards.length === 0 && <NoCards />}
      {modal && <AddCards />}
    </div>
  );
};

export default PaymentWrapper;
