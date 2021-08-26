import React, { FC, useEffect, useState } from 'react';
import { useActionCreators, useSelector, useRole } from '../../hooks';
import formatMoney from '../../utils/format-money';
import {
  CardMobileContainer,
  CardMobileImageWrapper,
  CardMobileImage,
  CardMobileBody,
  CardMobileTitle,
  CardMobileWishlist,
  CardOldPrice,
  CardPrice,
  CardMobileCart,
  CardBottom,
} from './style';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartFull } from '../../assets/icons/heart-full2.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

interface CardMobileProps {
  item: any;
}

const CardMobile: FC<CardMobileProps> = ({ item }) => {
  const { addToCart, removeCart, addToWishlist, removeWishlist } =
    useActionCreators();
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const role =useRole()
  useEffect(() => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        setIsInCart(true);
      }
    }

    for (let i = 0; i < wishlistItems.length; i++) {
      if (wishlistItems[i].id === item.id) {
        setIsInWishlist(true);
      }
    }
  }, []);

  const addToCartHandle = (item: any) => {
    addToCart(item);
    setIsInCart(!isInCart);
  };

  const deleteFromCartHandle = (item: any) => {
    removeCart(item);
    setIsInCart(!isInCart);
  };

  const addToWishlistHandle = (item: any) => {
    setIsInWishlist(!isInWishlist);
    addToWishlist(item);
  };

  const removeFromWishlistHandle = (item: any) => {
    setIsInWishlist(!isInWishlist);
    removeWishlist(item);
  };

  console.log(isInCart);

  return (
    <CardMobileContainer>
      <CardMobileImageWrapper>
        <CardMobileWishlist
          onClick={() =>   (!role.isBuyer&&!role.userRole)||(role.isBuyer) ?    isInWishlist   ? removeFromWishlistHandle(item) : addToWishlistHandle(item) :false }
        >
          {isInWishlist ? <HeartFull /> : <HeartIcon />}
        </CardMobileWishlist>
        <CardMobileImage src={item.images[0]} />
      </CardMobileImageWrapper>

      <CardMobileBody>
        <CardMobileTitle to="/">{item.name}</CardMobileTitle>
        <CardOldPrice> {formatMoney(1300000)} сум</CardOldPrice>
        <CardBottom>
          <CardPrice>{formatMoney(item.priceResponse.value)} сум</CardPrice>
          <CardMobileCart
            isInCartStyle={isInCart}
            onClick={() => (!role.isBuyer&&!role.userRole)||(role.isBuyer) ?  (  isInCart ? deleteFromCartHandle(item) : addToCartHandle(item)) :false }
          >
            <CartIcon />
          </CardMobileCart>
        </CardBottom>
      </CardMobileBody>
    </CardMobileContainer>
  );
};

export default CardMobile;
