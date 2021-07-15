import React, { useEffect, useState } from 'react';
import { ContentContainer, CloseIconContainer } from './style';
import AddMarketAccount from './add-market-account';
import AddCard from './add-card';
import AddBankAccount from './add-bank-account';
import { usePayment, CardFormType } from '../../context';

interface Props {}

const Content: React.FC<Props> = () => {
  const {
    state: { cardFormType },
    closeAddModal,
  } = usePayment();

  return (
    <ContentContainer>
      <CloseIconContainer onClick={closeAddModal} />
      {cardFormType === CardFormType.MARKET_ACCOUNT && <AddMarketAccount />}
      {cardFormType === CardFormType.CREDIT_CARD && <AddCard />}
      {cardFormType === CardFormType.BANK_ACCOUNT && <AddBankAccount />}
    </ContentContainer>
  );
};

export default Content;
