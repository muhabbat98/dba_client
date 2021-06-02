import React from 'react';
import {
  NoCardsContainer,
  NoCardsIconContainer,
  Title,
  AddButton,
} from './style';
import { ReactComponent as NoCardsIcon } from './no-cards.svg';
import { usePayment } from '../context';

interface Props {}

const NoCards: React.FC<Props> = () => {
  const { openAddModal } = usePayment();
  return (
    <NoCardsContainer>
      <NoCardsIconContainer>
        <NoCardsIcon />
      </NoCardsIconContainer>
      <Title>Вы еще не добавили реквизиты для оплаты</Title>
      <AddButton onClick={openAddModal}>Добавить реквизиты</AddButton>
    </NoCardsContainer>
  );
};

export default NoCards;
