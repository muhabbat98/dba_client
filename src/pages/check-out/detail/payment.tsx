import React, { useState, FC } from 'react';
import { AddressButton } from '../address/style';
import {useSelector, axios, useError } from '../../../hooks'

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
interface PaymentProps {
  dataShare: any;
}
const Payment: FC<PaymentProps> = ({ dataShare }) => {
  const [loading, setLoading] = useState(true)
  const {checkError} =useError()
  let resData = {
    "locationId": dataShare.allData.address.id,
    "productIds": [...dataShare.cart.cartItems].map(one=>one.id),
    "recipientName": dataShare.allData.userInfo.fio,
    "recipientPhoneNumber": dataShare.allData.userInfo.phoneNumber
  }
  console.log('dataShare', resData)
  const sendOrder = async()=>{
    try{
      
      const response = await axios.post('order',resData);
      
      console.log(response)
      setLoading(false)
    
    }
    catch(err){
      checkError(err)
      setLoading(false);
    }
  }

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
        <SummNumber>{dataShare.cart.totalPrice }сум</SummNumber>
      </Order>
      <AddressButton as={DetailButton}>Отмена</AddressButton>
      <AddressButton onClick={sendOrder} as={DetailButton}>Перейти к оплате</AddressButton>
    </CheckOutBox>
  );
};

export default Payment;
