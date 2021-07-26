import React from 'react';
import { useSelector } from '../../hooks';
import Container from '../../components/grid/container';
import {
  SmallerContainer,
  HomeLink,
  CheckOutLink,
  CartLink,
  CheckOutHeader,
  CheckOutBox,
  CartContain,
  CartHeader,
  CountItems,
  CartItemText,
  CartContainItem,
  CartItemMedia,
  CartItemImg,
} from './style';

const CheckOut = () => {
  const { cart } = useSelector((state) => state);

  console.log('cart => ', cart);

  return (
    <Container>
      <SmallerContainer>
        <HomeLink to="/">Главная</HomeLink>
        <CartLink to="/cart">Корзина</CartLink>
        <CheckOutLink to="/check-out">Оформление заказа</CheckOutLink>
        <CheckOutHeader>Оформление заказа</CheckOutHeader>
        <CheckOutBox>
          <CartHeader>
            Корзина (<CountItems>12</CountItems>)
          </CartHeader>
          <CartContain>
            {cart.checkedAll.map((element, index) => (
              <CartContainItem key={index}>
                <CartItemMedia>
                  <CartItemImg src={element.images[0]} />
                </CartItemMedia>
                <CartItemText>
                  {' '}
                  Смартфон Xiaomi Redmi 9 4/64GB (NFC)
                </CartItemText>
              </CartContainItem>
            ))}
          </CartContain>
        </CheckOutBox>
        <CheckOutBox></CheckOutBox>
      </SmallerContainer>
    </Container>
  );
};
export default CheckOut;
