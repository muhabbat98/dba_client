import React from 'react';
import { usePayment } from '../context';
import Content from './content';
import { AddCardsContainer, BackDrop } from './style';

interface AddCards {}

const AddCards: React.FC<AddCards> = () => {
  const { closeAddModal } = usePayment();
  return (
    <AddCardsContainer>
      <BackDrop onClick={closeAddModal} />
      <Content />
    </AddCardsContainer>
  );
};

export default AddCards;
