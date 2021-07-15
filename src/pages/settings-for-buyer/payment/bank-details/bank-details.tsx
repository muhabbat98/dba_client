import React from 'react';
import Cards from './cards';
import { BankDetailsContainer, Add, AddButton, Header, Title } from './style';
import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg';
import { usePayment } from '../context';

interface Props {
  cards: AllCardsType;
}

const BankDetails: React.FC<Props> = ({ cards }) => {
  const { openAddModal } = usePayment();
  return (
    <BankDetailsContainer>
      <Header>
        <Title>Мои карты</Title>
        <AddButton onClick={openAddModal}>
          <AddIcon /> <Add>Добавить</Add>
        </AddButton>
      </Header>
      <Cards />
      {/* <Title>Электронные кошельки</Title>
      <Title>Счет в банке</Title> */}
    </BankDetailsContainer>
  );
};

export default BankDetails;
