import React, { useState, useEffect, memo } from 'react';
import { isEqual } from 'lodash';
import formatMoney from '../../utils/format-money';
import { useActionCreators, useSelector, useRole } from '../../hooks';

import {
  CardWrapper,
  CardHeader,
  CardLabel,
  CardImg,
  CardImageWrapper,
  CardWishlist,
  CardBody,
  CardTitle,
  CardComents,
  CardStarsWrapper,
  CardCommentCount,
  CardOldPrice,
  CardCartWrapper,
  CardCurrentPrice,
  CardCartIcon,
  CardSpan,
} from './style';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartFull } from '../../assets/icons/heart-full2.svg';
import { ReactComponent as StarFill } from '../../assets/icons/star-full.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/star-empty.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

interface CardProps {
  item?: any;
  style?: any;
}

const Card: React.FC<CardProps> = ({ item, style }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const { addToCart, removeCart, addToWishlist, removeWishlist } =
    useActionCreators();

  const { cartItems } = useSelector((state) => state.cart);

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const role = useRole()

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

  return (
    <CardWrapper style={style}>
      <CardHeader>
        <CardLabel>Новинка</CardLabel>
        <CardImageWrapper>
          <CardImg src={item.images[0]} />
        </CardImageWrapper>
      </CardHeader>
      <CardBody>
        <CardTitle title={item.name} to={`/product-detail/${item.id}`}>
          {item.name}
        </CardTitle>
        <CardComents>
          <CardStarsWrapper>
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarEmpty />
          </CardStarsWrapper>
          <CardCommentCount>51 отзивов</CardCommentCount>
        </CardComents>
        <CardOldPrice>
          {formatMoney(item.priceResponse.value)}{' '}
          <span>{item.priceResponse.currency.shortName}</span>
        </CardOldPrice>
        <CardCartWrapper>
          <CardCurrentPrice>
            {formatMoney(item.priceResponse.value)}{' '}
            <span>{item.priceResponse.currency.shortName}</span>
          </CardCurrentPrice>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <CardWishlist
              onClick={() => (!role.isBuyer&&!role.userRole)||(role.isBuyer) ?  (  isInWishlist
                ? removeFromWishlistHandle(item)
                : addToWishlistHandle(item)) :false  }
  
            >
              {isInWishlist ? <HeartFull /> : <HeartIcon />}
            </CardWishlist>
            <CardCartIcon
              isInCartStyle={isInCart}
              onClick={() =>(!role.isBuyer&&!role.userRole)||(role.isBuyer) ?  ( isInCart ? deleteFromCartHandle(item) : addToCartHandle(item)) :false  }
            >
              <CardSpan />
              <CartIcon />
            </CardCartIcon>
          </div>
        </CardCartWrapper>
      </CardBody>
    </CardWrapper>
  );
};

export default memo(Card, isEqual);
