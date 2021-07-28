import React, { FC, useState } from 'react';
import AddressBox from '../../../components/address-box';
import {
  Address,
  CallHeader,
  HeaderAddress,
  PackmenHeader,
  MailHeader,
  PackmenBody,
  MailBody,
  CallBody,
  SampleAdress,
  AddressList,
  AddressButton,
} from './style';

interface AdressItemProps {
  nextStep: any;
}
const AdressItem: FC<AdressItemProps> = ({ nextStep }) => {
  enum Tabs {
    PACKMEN,
    CALL,
    MAIL,
  }
  const [type, setType] = useState(Tabs.PACKMEN);
  const [state, setState] = useState(false);
  console.log(nextStep);
  const sendData = (data: any) => {
    console.log('data', data);
    if (data) {
      nextStep.setStep({ ...nextStep.step, payment: 1 });
      nextStep.setTab('payment');
    }
  };
  return (
    <Address>
      <HeaderAddress>
        <PackmenHeader
          isActive={type === 0 ? true : false}
          onClick={() => setType(Tabs.PACKMEN)}
        >
          Курьером
        </PackmenHeader>
        <CallHeader
          isActive={type === 1 ? true : false}
          onClick={() => setType(Tabs.CALL)}
        >
          Самовывоз
        </CallHeader>
        <MailHeader
          isActive={type === 2 ? true : false}
          onClick={() => setType(Tabs.MAIL)}
        >
          Почтой
        </MailHeader>
      </HeaderAddress>
      {type === 0 ? (
        <PackmenBody>
          <AddressList>
            <SampleAdress>
              Ташкент, Чиланзарский район ,<br /> 100135
            </SampleAdress>
            <SampleAdress>
              Ташкент, Чиланзарский район ,<br /> 100135
            </SampleAdress>
            <SampleAdress>
              Ташкент, Чиланзарский район ,<br /> 100135
            </SampleAdress>

            <AddressButton onClick={() => setState(true)}>
              + Указать адрес
            </AddressButton>
            {state && (
              <AddressBox
                closeModal={setState}
                modalTitle="Указать адрес"
                getItems={(data: any) => sendData(data)}
              />
            )}
          </AddressList>
        </PackmenBody>
      ) : type === 1 ? (
        <CallBody>работа в прогрессии</CallBody>
      ) : (
        <MailBody>работа в прогрессии</MailBody>
      )}
    </Address>
  );
};
export default AdressItem;
