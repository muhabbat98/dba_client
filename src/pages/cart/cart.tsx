import React from 'react'

import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import Checkbox from '../../components/checkbox';

import ProductsTitle from '../../components/products-title';
import Button from '../../components/button';
import CartIncrementButton from '../../components/cart-increment-button';
import { useActionCreators, useSelector } from '../../hooks';
import formatMoney from '../../utils/format-money';
import CartIconWishlist from './cart-icon-wishlist';

import {
   CartContainer, CartWrapper, CartBox, CartBoxLeft, CartBoxRight, CartBoxLeftContainer, CartBoxRightContainer,
   CartItemImageLink, CartItemImage, CartInfo, CartTitle, CartManufactor, CartManufactorName, CartDostup,
   CartCalculationPart, CartIncrementPart, CartIconPart, CartPrice, CartPriceSpan, CartIconDelete, CartSoldCount,
   CartSoldNameWrapper, CartSoldName, CartSoldPrice, CartSoldAllPrice, CartSoldAllWrapper, CartSoldAll, CartIconWrapper,
   CartCheckBoxWrapper
} from './style';

import { ReactComponent as CartDelete } from '../../assets/icons/cart-delete.svg';
import CartEmpty from './cart-empty';

const Cart = () => {
   const { cartItems, totalPrice, totalCount } = useSelector((state) => state.cart);
   const { removeCart } = useActionCreators();

   const deleteCart = (data: any) => {
      removeCart(data);
   }

   console.log("cartItems = ", cartItems.length);

   return (
      <CartContainer>
         <Container>
            <Row>
               <Col>
                  <ProductsTitle title="Корзина" />
               </Col>
            </Row>
            <Row style={{ gridGap: '40px', paddingBottom: '260px ' }}>
               {
                  cartItems.length == 0 ? (
                     <Col xl={12}>
                        <CartEmpty />
                     </Col>
                  ) : (
                     <>
                        <Col xl={8}>
                           <CartWrapper>
                              {
                                 cartItems.map((item: any) => (
                                    <CartBox key={item.id}>
                                       <CartBoxLeft>
                                          <CartBoxLeftContainer>
                                             <CartCheckBoxWrapper>
                                                <Checkbox />
                                             </CartCheckBoxWrapper>
                                             <CartIconWrapper>
                                                <CartItemImageLink to="">
                                                   <CartItemImage src={item.images[0]} />
                                                </CartItemImageLink>
                                             </CartIconWrapper>
                                             <CartInfo>
                                                <CartTitle to="">{item.name}</CartTitle>
                                                <CartManufactor>Продавец:</CartManufactor>
                                                <CartManufactorName>ООО "ДИХАУС"</CartManufactorName>
                                             </CartInfo>
                                          </CartBoxLeftContainer>
                                       </CartBoxLeft>
                                       <CartBoxRight>
                                          <CartBoxRightContainer>
                                             <CartDostup>Доступно: 40 </CartDostup>
                                             <CartCalculationPart>
                                                <CartIncrementPart>
                                                   {console.log(item.priceResponse.value)}
                                                   <CartPrice>{formatMoney(item.priceResponse.value)}
                                                      <CartPriceSpan>{item.priceResponse.currency.shortName}</CartPriceSpan>
                                                   </CartPrice>
                                                   {/* Cart Increment Button Component */}
                                                   <CartIncrementButton item={item} />
                                                </CartIncrementPart>
                                                <CartIconPart>
                                                   {/* Cart Icon Wishlist Component */}
                                                   <CartIconWishlist item={item} />
                                                   <CartIconDelete onClick={() => deleteCart(item)}>
                                                      <CartDelete />
                                                   </CartIconDelete>
                                                </CartIconPart>
                                             </CartCalculationPart>
                                          </CartBoxRightContainer>
                                       </CartBoxRight>
                                    </CartBox>
                                 ))
                              }
                           </CartWrapper>
                        </Col>
                        <Col xl={4}>
                           <CartSoldCount>
                              <CartSoldNameWrapper>
                                 <CartSoldName>Вес заказа</CartSoldName>
                                 <CartSoldPrice>15 кг</CartSoldPrice>
                              </CartSoldNameWrapper>
                              <CartSoldNameWrapper>
                                 <CartSoldName>Товары ({totalCount})</CartSoldName>
                                 <CartSoldPrice>{formatMoney(totalPrice)} сум</CartSoldPrice>
                              </CartSoldNameWrapper>
                              <CartSoldNameWrapper>
                                 <CartSoldName>Скидка по акции</CartSoldName>
                                 <CartSoldPrice>{formatMoney(totalPrice)} сум</CartSoldPrice>
                              </CartSoldNameWrapper>
                              <CartSoldAllWrapper>
                                 <CartSoldAll>Итого</CartSoldAll>
                                 <CartSoldAllPrice>{formatMoney(totalPrice)} сум</CartSoldAllPrice>
                              </CartSoldAllWrapper>
                              <Button style={{ width: '100%' }}>Перейти к оформлению</Button>
                           </CartSoldCount>
                        </Col>
                     </>
                  )
               }

            </Row>
         </Container>
      </CartContainer>
   )
}

export default Cart;