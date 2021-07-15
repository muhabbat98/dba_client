import React from 'react';
import { usePayment, CardFormType } from '../../../context';
import { TabsContainer, TabsWrapper, TabsItem, Title } from './style';

const Tabs = () => {
  const {
    state: { cardFormType },
    setCreditCardForm,
    setBankAccountForm,
    setMarketAccountForm,
  } = usePayment();

  console.log('cardFormType', cardFormType);
  return (
    <TabsContainer>
      <Title>Добавление реквизитов</Title>
      <TabsWrapper>
        <TabsItem
          onClick={setMarketAccountForm}
          active={cardFormType === CardFormType.MARKET_ACCOUNT}
        >
          Эл.кошелёк
        </TabsItem>
        <TabsItem
          onClick={setCreditCardForm}
          active={cardFormType === CardFormType.CREDIT_CARD}
        >
          Карта
        </TabsItem>
        <TabsItem
          onClick={setBankAccountForm}
          active={cardFormType === CardFormType.BANK_ACCOUNT}
        >
          Счет в банке
        </TabsItem>
      </TabsWrapper>
    </TabsContainer>
  );
};

export default Tabs;
