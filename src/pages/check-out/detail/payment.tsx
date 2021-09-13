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
    buyer: {
      name: dataShare.allData.userInfo.fio,
      phoneNumber: dataShare.allData.userInfo.phoneNumber
    },
    cardId: dataShare.allData.payment&&dataShare.allData.payment.id,
    goods: dataShare.cart.checkedAll.map((one:any)=>({amount:one.count, goodId:one.id, sellerId:one.sellerId})),
    paymentType: "fromCard",    
    locationId: dataShare.allData.address.id
  }
  
  const sendOrder = async(e:any)=>{
    e.target.disabled = true

    try{
      
      const response = await axios.post('order',resData);
      if(response.status===200){
        e.target.disabled = false
        console.log(response)
      }
     
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
        <OrderNumber isFree={true}>{dataShare.cart.deliveryCost}</OrderNumber>
      </Order>
      <Order>
        <SummData>Итого</SummData>
        <SummNumber>{dataShare.cart.totalSum }сум</SummNumber>
      </Order>
      <AddressButton as={DetailButton}>Отмена</AddressButton>
      <AddressButton onClick={sendOrder} as={DetailButton}>Перейти к оплате</AddressButton>
    </CheckOutBox>
  );
};

export default Payment;
