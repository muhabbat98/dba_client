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

import Humo from '../../../assets/images/humocard-small.png';

import {
  CardData,
  CardImage,
  CardMoney,
  MainCardData,
  SampleCard,
  NameCard,
  NumberCard,
} from './style';

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
        <>работа в прогрессии</>
      ) : type === 1 ? (
        <PackmenBody>
          <AddressList>
            <SampleAdress as={SampleCard}>
              <CardImage src={Uzcard} />
              <CardData>
                <MainCardData>
                  <NameCard>AAB Humo</NameCard>
                  <NumberCard>Humo **** 6600</NumberCard>
                </MainCardData>
                <CardMoney>125 300 </CardMoney>
              </CardData>
            </SampleAdress>
            <SampleAdress as={SampleCard}>
              <CardImage src={Humo} />
              <CardData>
                <MainCardData>
                  <NameCard>AAB Humo</NameCard>
                  <NumberCard>Humo **** 6600</NumberCard>
                </MainCardData>
                <CardMoney>125 300 </CardMoney>
              </CardData>
            </SampleAdress>
            <SampleAdress as={SampleCard}>
              <CardImage src={Uzcard} />
              <CardData>
                <MainCardData>
                  <NameCard>AAB Humo</NameCard>
                  <NumberCard>Humo **** 6600</NumberCard>
                </MainCardData>
                <CardMoney>125 300 </CardMoney>
              </CardData>
            </SampleAdress>

            <AddressButton>+ Добавить карту</AddressButton>
          </AddressList>
        </PackmenBody>
      ) : (
        <>работа в прогрессии</>
      )}
    </Address>
  );
};
export default Payment;
