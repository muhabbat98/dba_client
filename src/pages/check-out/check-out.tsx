import React, { useState } from 'react';
import { useSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
} from './style';

enum ActionSteps {
  RECIPIENT = 1,
  ADDRESS = 0,
  PAYMENT = 0,
}

const CheckOut = () => {
  const { cart } = useSelector((state) => state);

  const [tab, setTab] = useState('resipient');
  const [step, setStep] = useState({
    resipient: ActionSteps.RECIPIENT,
    address: ActionSteps.ADDRESS,
    payment: ActionSteps.PAYMENT,
  });

  const onSubmit = (data: any, ev: any) => {
    console.log('data => ', data);
  };

  console.log('cart => ', cart);

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
            <Recipient>
              <RecipientIcon active={step.resipient}>
                <AccountIcon />
              </RecipientIcon>
              <RecipientText>Получатель</RecipientText>
            </Recipient>
            <Address>
              <AddressIcon active={step.address}>
                {step.address === 1 ? (
                  <NavigationIconWhite />
                ) : (
                  <NavigationIcon />
                )}
              </AddressIcon>
              <AddressText>Адрес доставки</AddressText>
            </Address>
            <Payment>
              <PaymentIcon active={step.payment}>
                {step.payment === 1 ? <PaymantIconWhite /> : <PaymantIcon />}
              </PaymentIcon>
              <PaymentText>Способ оплаты</PaymentText>
            </Payment>
          </StepsOrder>
          {tab === 'address' ? (
            <AddressItem nextStep={{ tab, setTab, setStep, step }} />
          ) : tab === 'payment' ? (
            <PaymentItem />
          ) : (
            <RecipientItem nextStep={{ tab, setTab, setStep, step }} />
          )}
        </CheckOutBox>
        {tab === 'payment' ? <PaymentDetails /> : <></>}
      </SmallerContainer>
    </Container>
  );
};
export default CheckOut;
