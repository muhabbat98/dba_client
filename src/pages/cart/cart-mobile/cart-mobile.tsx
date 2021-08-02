import React, { FC } from 'react'
import Container from '../../../components/grid/container';
import formatMoney from '../../../utils/format-money';

import Title from '../../../components/products-title';
import {
   CartMobileContainer, CartMobileList, CartMobileItem, CartMobileItemLeft, CartMobileItemRight,
   CartMobileItemImgLink, CartMobileImg, Price, Sum, Name, CartMobileInfo, Manufactor, ManufactorName,
   CheckboxWrapper, CartDeleteWrapper
} from './style';
import Checkbox from '../../../components/checkbox';
import CartIncrementButton from '../../../components/cart-increment-button';
import { ReactComponent as CartDelete } from '../../../assets/icons/cart-delete.svg';

interface CartMobileProps {
   items: any[]
}

const CartMobile: FC<CartMobileProps> = ({ items }) => {
   console.log('cart => ', items);
   return (
      <CartMobileContainer>
         <Container>
            <Title title="Корзина" />
         </Container>

         <CartMobileList>
            {
               items.map((item: any) => {
                  console.log('item=>>> ', item);
                  return (
                     <CartMobileItem >
                        <CartMobileItemLeft>
                           <CartMobileItemImgLink to="">
                              <CartMobileImg src={item.images[0]} />
                           </CartMobileItemImgLink>

                           <CartIncrementButton item={item} isMobile={true} />
                        </CartMobileItemLeft>

                        <CartMobileItemRight>
                           <CheckboxWrapper>
                              <Checkbox isMobileVersion={true} />
                           </CheckboxWrapper>
                           <Price>{formatMoney(item.priceResponse.value)} <Sum>сум</Sum></Price>
                           <Name>{item.name}</Name>
                           <CartMobileInfo>
                              <Manufactor>Продавец:</Manufactor>
                              <ManufactorName>ООО "ДИХАУС"</ManufactorName>
                           </CartMobileInfo>
                           <CartDeleteWrapper>
                              <CartDelete />
                           </CartDeleteWrapper>
                        </CartMobileItemRight>
                     </CartMobileItem>
                  )
               })
            }
         </CartMobileList>

      </CartMobileContainer >
   )
}

export default CartMobile
