import React, { useState } from 'react';
import {
  Address,
  CallHeader,
  HeaderAddress,
  MailHeader,
  PackmenHeader,
  PackmenBody,
  AddressButton,
  AddressList,
  SampleAdress,
} from '../address/style';

import Uzcard from '../../../assets/images/uzcard-small.png';

import Humo from '../../../assets/images/humo-small.png';

import { CardImage, CardMoney, MainCardData, SampleCard } from './style';
import {
  CardName,
  CardNumber,
} from '../../settings/pages/payment/bank-details/cards/card/style';

const Payment = () => {
  enum Tabs {
    POCKET,
    CARD,
    NUMBER,
  }
  const [type, setType] = useState(Tabs.POCKET);
  return (
    <Address>
      <HeaderAddress>
        <PackmenHeader
          isActive={type === 0 ? true : false}
          onClick={() => setType(Tabs.POCKET)}
        >
          Эл.кошелёк
        </PackmenHeader>
        <CallHeader
          isActive={type === 1 ? true : false}
          onClick={() => setType(Tabs.CARD)}
        >
          Картой
        </CallHeader>
        <MailHeader
          isActive={type === 2 ? true : false}
          onClick={() => setType(Tabs.NUMBER)}
        >
          Счет в банке
        </MailHeader>
      </HeaderAddress>
      {type === 0 ? (
        <>KOSHELOK</>
      ) : type === 1 ? (
        <PackmenBody>
          <AddressList>
            <SampleCard>
              {/* <CardImage /> */}
              <MainCardData>
                <CardName>AAB Humo</CardName>
                <CardNumber>Humo **** 6600</CardNumber>
              </MainCardData>
              <CardMoney>125 300 сум</CardMoney>
            </SampleCard>
            <SampleCard>Ташкент, Чиланзарский район , 100135</SampleCard>
            <SampleCard>Ташкент, Чиланзарский район , 100135</SampleCard>

            <AddressButton>+ Указать адрес</AddressButton>
          </AddressList>
        </PackmenBody>
      ) : (
        <>SCHOT</>
      )}
    </Address>
  );
};
export default Payment;
