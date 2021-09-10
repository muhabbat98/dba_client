import React, { FC } from 'react';

import Container from '../../../components/grid/container';
import formatMoney from '../../../utils/format-money';
import Title from '../../../components/products-title';
import Checkbox from '../../../components/checkbox';
import CartIncrementButton from '../../../components/cart-increment-button';
import { useActionCreators, useSelector } from '../../../hooks';

import {
  CartMobileContainer,
  CartMobileList,
  CartMobileItem,
  CartMobileItemLeft,
  CartMobileItemRight,
  CartMobileItemImgLink,
  CartMobileImg,
  Price,
  Sum,
  Name,
  CartMobileInfo,
  Manufactor,
  ManufactorName,
  CheckboxWrapper,
  CartDeleteWrapper,
  CartDelivery
} from './style';

import { ReactComponent as CartDelete } from '../../../assets/icons/cart-delete.svg';

interface CartMobileProps {
  items: any[];
}

const CartMobile: FC<CartMobileProps> = ({ items }) => {
  const { cart } = useSelector((state) => state);
  const { getTotalSum, removeCart } = useActionCreators();

  console.log(cart);

  const deleteCart = (data: any) => {
    removeCart(data);
  };

  const getCheckedTotalSum = (id: any, ev: any) => {
    if (ev.target.checked) {
      getTotalSum({ id, isChecked: true });
    } else {
      getTotalSum({ id, isChecked: false });
    }
  };

  return (
    <CartMobileContainer>
      <Container>
        <Title title="Корзина" />
      </Container>

      <CartMobileList>
        {items.map((item: any) => {
          return (
            <CartMobileItem key={item.id}>
              <CartMobileItemLeft>
                <CartMobileItemImgLink isChecked={item.isChecked} to="">
                  {item.addedPhotoWithImageUrls!==null?<CartMobileImg src={item.addedPhotoWithImageUrls[0].photoUrl} />:<></>}
                </CartMobileItemImgLink>
                <CartIncrementButton item={item} isMobile={true} />
              </CartMobileItemLeft>
              <CartMobileItemRight>
                <CheckboxWrapper>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={(ev) => getCheckedTotalSum(item.id, ev)}
                    isMobileVersion={true}
                  />
                </CheckboxWrapper>
                <Price>
                  {formatMoney(item.addProductData.price)} <Sum>сум</Sum>
                </Price>
                <Name>{item.addProductData.name}</Name>
                <CartMobileInfo>
                  <Manufactor>Продавец:</Manufactor>
                  <ManufactorName>ООО "ДИХАУС"</ManufactorName>
                </CartMobileInfo>
                <CartMobileInfo>
                  <Manufactor>Сумма доставка:</Manufactor>
                  <CartDelivery>
                    {item.deliveryAddress.deliveryPrice - 0} сум
                  </CartDelivery>
                </CartMobileInfo>
                <CartDeleteWrapper onClick={() => deleteCart(item)}>
                  <CartDelete />
                </CartDeleteWrapper>
              </CartMobileItemRight>
            </CartMobileItem>
          );
        })}
      </CartMobileList>
    </CartMobileContainer>
  );
};

export default CartMobile;
