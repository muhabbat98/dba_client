import React, { useState } from 'react';
import { useSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import Container from '../../components/grid/container';
import { ReactComponent as AccountIcon } from '../../assets/icons/account-white.svg';
import { ReactComponent as NavigationIcon } from '../../assets/icons/map-navigation.svg';
import { ReactComponent as NavigationIconWhite } from '../../assets/icons/map-navigation-white.svg';
import { ReactComponent as PaymantIconWhite } from '../../assets/icons/money-payment-white.svg';
import { ReactComponent as PaymantIcon } from '../../assets/icons/money-payment.svg';
import RecipientItem from './recipient/';
import AddressItem from './address';
import PaymentItem from './payment';
import PaymentDetails from './detail';
import {
  SmallerContainer,
  CheckOutHeader,
  CheckOutBox,
  CartContain,
  CartHeader,
  CountItems,
  CartItemText,
  CartContainItem,
  CartItemMedia,
  CartItemImg,
  StepsOrder,
  Recipient,
  RecipientIcon,
  RecipientText,
  Address,
  Payment,
  AddressText,
  AddressIcon,
  PaymentIcon,
  PaymentText,
  Line
} from './style';

enum ActionSteps {
  RECIPIENT = 1,
  ADDRESS = 0,
  PAYMENT = 0,
}

const CheckOut = () => {
  const { cart } = useSelector((state) => state);
  const [allData, setData] = useState({});
  const [tab, setTab] = useState('resipient');
  const [step, setStep] = useState({
    resipient: ActionSteps.RECIPIENT,
    address: ActionSteps.ADDRESS,
    payment: ActionSteps.PAYMENT,
  });

  return (
    <Container>
      <SmallerContainer>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/check-out">Оформление заказа</Link>
        <CheckOutHeader>Оформление заказа</CheckOutHeader>
        <CheckOutBox>
          <CartHeader>
            Корзина (<CountItems>{cart.checkedAllCount}</CountItems>)
          </CartHeader>
          <CartContain>
            {cart.checkedAll.map((element, index) => (
              <CartContainItem key={index}>
                <CartItemMedia>
                  <CartItemImg src={element.images[0]} />
                </CartItemMedia>
                <CartItemText count={element.count}>
                  {element.name}
                </CartItemText>
              </CartContainItem>
            ))}
          </CartContain>
        </CheckOutBox>
        <CheckOutBox>
          <CartHeader>Оформление заказа </CartHeader>

          <StepsOrder>
            <Recipient onClick={()=>{if(step.resipient) {setTab('resipient')}}}>
              <RecipientIcon active={step.resipient}>
                <AccountIcon />
              </RecipientIcon>
              <RecipientText>Получатель</RecipientText>
            </Recipient>
            <Line/>
            <Address onClick={()=>{if(step.address) {setTab('address')}}}>
              <AddressIcon   active={step.address}>
                {step.address === 1 ? (
                  <NavigationIconWhite />
                ) : (
                  <NavigationIcon />
                )}
              </AddressIcon>
              <AddressText>Адрес доставки</AddressText>
            </Address>
            <Line/>
            <Payment onClick={()=>{if(step.payment) {setTab('payment')}}} >
              <PaymentIcon active={step.payment}>
                {step.payment === 1 ? <PaymantIconWhite /> : <PaymantIcon />}
              </PaymentIcon>
              <PaymentText>Способ оплаты</PaymentText>
            </Payment>
          </StepsOrder>
          {tab === 'address' ? (
            <AddressItem
              dataShare={{ allData, setData }}
              nextStep={{ tab, setTab, setStep, step }}
            />
          ) : tab === 'payment' ? (
            <PaymentItem dataShare={{ allData, setData }} />
          ) : (
            <RecipientItem
              dataShare={{ allData, setData }}
              nextStep={{ tab, setTab, setStep, step }}
            />
          )}
        </CheckOutBox>
        {tab === 'payment' ? (
          <PaymentDetails dataShare={{ allData, setData }} />
        ) : (
          <></>
        )}
      </SmallerContainer>
    </Container>
  );
};
export default CheckOut;
