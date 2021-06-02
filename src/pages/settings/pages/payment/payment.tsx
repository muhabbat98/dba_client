import React, { useState } from 'react';
import AddCards from './add-cards';
import NoCards from './no-cards';
import { PaymentContainer } from './styles';

const Payment = () => {
  const [cards, setCards] = useState([]);

  return (
    <PaymentContainer>
      <NoCards />
      <AddCards />
    </PaymentContainer>
  );
};

export default Payment;
