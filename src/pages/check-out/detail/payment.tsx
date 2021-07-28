import React, { useState } from 'react';
import { AddressButton } from '../address/style';

import {
  DetailHeader,
  Order,
  OrderName,
  OrderNumber,
  SummNumber,
  SummData,
  DetailButton,
} from './style';
import { CheckOutBox } from '../style';

const Payment = () => {
  return (
    <CheckOutBox>
      <DetailHeader>Детали заказа</DetailHeader>
      <Order>
        <OrderName>Заказ №</OrderName>
        <OrderNumber isFree={false}>44984886</OrderNumber>
      </Order>
      <Order>
        <OrderName> Скидка по акции</OrderName>
        <OrderNumber isFree={false}>7 483 448 сум</OrderNumber>
      </Order>
      <Order>
        <OrderName>Доставка Marketplace</OrderName>
        <OrderNumber isFree={true}>бесплатно</OrderNumber>
      </Order>
      <Order>
        <SummData>Итого</SummData>
        <SummNumber>7 483 448 сум</SummNumber>
      </Order>
      <AddressButton as={DetailButton}>Отмена</AddressButton>
      <AddressButton as={DetailButton}>Перейти к оплате</AddressButton>
    </CheckOutBox>
  );
};
export default Payment;
