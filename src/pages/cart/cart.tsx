import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useActionCreators, useSelector, useRole, UserRole } from '../../hooks';

import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import Checkbox from '../../components/checkbox';
import ProductsTitle from '../../components/products-title';
import Button from '../../components/button';
import CartIncrementButton from '../../components/cart-increment-button';
import formatMoney from '../../utils/format-money';
import CartIconWishlist from './cart-icon-wishlist';
import CartEmpty from './cart-empty';
import { useWindowSize } from '../../hooks/useWindowSize';
import CartMobile from './cart-mobile';

import {
  CartContainer,
  CartWrapper,
  CartBox,
  CartBoxLeft,
  CartBoxRight,
  CartBoxLeftContainer,
  CartBoxRightContainer,
  CartItemImageLink,
  CartItemImage,
  CartInfo,
  CartTitle,
  CartManufactor,
  CartManufactorName,
  CartDostup,
  CartCalculationPart,
  CartIncrementPart,
  CartIconPart,
  CartPrice,
  CartPriceSpan,
  CartIconDelete,
  CartSoldCount,
  CartSoldNameWrapper,
  CartSoldName,
  CartSoldPrice,
  CartSoldAllPrice,
  CartSoldAllWrapper,
  CartSoldAll,
  CartIconWrapper,
  CartCheckBoxWrapper,
} from './style';

import { ReactComponent as CartDelete } from '../../assets/icons/cart-delete.svg';

const Cart = () => {
  const { push } = useHistory();
  const { cartItems, tSum, totalCount } = useSelector((state) => state.cart);
  const { removeCart, getTotalSum, openLogin } = useActionCreators();
  const { userRole } = useRole();
  const [isCheckedState, setIsCheckedState] = useState<boolean>(true);
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    checkIsCheckedHandler();
  }, [state]);

  const checkIsCheckedHandler = () => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].isChecked) {
        setIsCheckedState(false);
        return;
      }
    }
    setIsCheckedState(true);
  };

  const deleteCart = (data: any) => {
    removeCart(data);
  };

  const getCheckedTotalSum = (id: any, ev: any) => {
    setState(!state);

    if (ev.target.checked) {
      getTotalSum({ id, isChecked: true });
    } else {
      getTotalSum({ id, isChecked: false });
    }
  };

  const gotoOrdersPage = () => {
    if (userRole === UserRole.BUYER) {
      push('/checkout');
    } else {
      openLogin();
    }
  };

  const [width, height] = useWindowSize();

  return (
    <CartContainer>
      {width <= 768 ? (
        <>
          {cartItems.length > 0 ? (
            <>
              <CartMobile items={cartItems} />
              <Container style={{ marginTop: '16px' }}>
                <Row>
                  <Col xl={4}>
                    <CartSoldCount>
                      <CartSoldNameWrapper>
                        <CartSoldName>Вес заказа</CartSoldName>
                        <CartSoldPrice>15 кг</CartSoldPrice>
                      </CartSoldNameWrapper>
                      <CartSoldNameWrapper>
                        <CartSoldName>Товары ({totalCount})</CartSoldName>
                        <CartSoldPrice>{formatMoney(tSum)} сум</CartSoldPrice>
                      </CartSoldNameWrapper>
                      <CartSoldNameWrapper>
                        <CartSoldName>Скидка по акции</CartSoldName>
                        <CartSoldPrice>{formatMoney(tSum)} сум</CartSoldPrice>
                      </CartSoldNameWrapper>
                      <CartSoldAllWrapper>
                        <CartSoldAll>Итого</CartSoldAll>
                        <CartSoldAllPrice>
                          {formatMoney(tSum)} сум
                        </CartSoldAllPrice>
                      </CartSoldAllWrapper>
                      <Button
                        disabled={isCheckedState}
                        onClick={gotoOrdersPage}
                        style={{ width: '100%' }}
                      >
                        Перейти к оформлению
                      </Button>
                    </CartSoldCount>
                  </Col>
                </Row>
              </Container>
            </>
          ) : (
            <Container>
              <Row>
                <Col xl={12}>
                  <CartEmpty />
                </Col>
              </Row>
            </Container>
          )}
        </>
      ) : (
        <Container>
          <Row>
            <Col>
              <ProductsTitle title="Корзина" />
            </Col>
          </Row>
          <Row style={{ gridGap: '40px', paddingBottom: '260px ' }}>
            {cartItems.length == 0 ? (
              <Col xl={12}>
                <CartEmpty />
              </Col>
            ) : (
              <>
                <Col xl={8}>
                  <CartWrapper>
                    {cartItems.map((item: any) => (
                      <CartBox key={item.id}>
                        <CartBoxLeft>
                          <CartBoxLeftContainer>
                            <CartCheckBoxWrapper>
                              <Checkbox
                                checked={item.isChecked}
                                onChange={(ev) =>
                                  getCheckedTotalSum(item.id, ev)
                                }
                              />
                            </CartCheckBoxWrapper>
                            <CartIconWrapper isChecked={item.isChecked}>
                              <CartItemImageLink to="">
                                <CartItemImage src={item.addedPhotoWithImageUrls[0].photoUrl} />
                              </CartItemImageLink>
                            </CartIconWrapper>
                            <CartInfo>
                              <CartTitle to="">{item.addProductData.name}</CartTitle>
                              <CartManufactor>Продавец:</CartManufactor>
                              <CartManufactorName>
                                ООО "ДИХАУС"
                              </CartManufactorName>
                            </CartInfo>
                          </CartBoxLeftContainer>
                        </CartBoxLeft>

                        <CartBoxRight>
                          <CartBoxRightContainer>
                            <CartDostup>Доступно: 40 </CartDostup>
                            <CartCalculationPart>
                              <CartIncrementPart>
                                <CartPrice>
                                  {formatMoney(item.addProductData.price)}
                                  <CartPriceSpan>
                                    sum
                                    {/* {item.priceResponse.currency.shortName} */}
                                  </CartPriceSpan>
                                </CartPrice>
                                {/* Cart Increment Button Component */}
                                <CartIncrementButton item={item} />
                              </CartIncrementPart>
                              <CartIconPart>
                                {/* Cart Icon Wishlist Component */}
                                <CartIconWishlist item={item} />
                                <CartIconDelete
                                  onClick={() => deleteCart(item)}
                                >
                                  <CartDelete />
                                </CartIconDelete>
                              </CartIconPart>
                            </CartCalculationPart>
                          </CartBoxRightContainer>
                        </CartBoxRight>
                      </CartBox>
                    ))}
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
                      <CartSoldPrice>{formatMoney(tSum)} сум</CartSoldPrice>
                    </CartSoldNameWrapper>
                    <CartSoldNameWrapper>
                      <CartSoldName>Скидка по акции</CartSoldName>
                      <CartSoldPrice>{formatMoney(tSum)} сум</CartSoldPrice>
                    </CartSoldNameWrapper>
                    <CartSoldAllWrapper>
                      <CartSoldAll>Итого</CartSoldAll>
                      <CartSoldAllPrice>
                        {formatMoney(tSum)} сум
                      </CartSoldAllPrice>
                    </CartSoldAllWrapper>
                    <Button
                      btnType={isCheckedState ? 'disabled' : 'default'}
                      disabled={isCheckedState}
                      onClick={gotoOrdersPage}
                      style={{ width: '100%' }}
                    >
                      Перейти к оформлению
                    </Button>
                  </CartSoldCount>
                </Col>
              </>
            )}
          </Row>
        </Container>
      )}
    </CartContainer>
  );
};

export default Cart;
