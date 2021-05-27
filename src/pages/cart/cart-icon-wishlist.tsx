import React, { useState, useEffect } from 'react';
import { useActionCreators, useSelector } from '../../hooks';

import { CartIconWishlistItem } from './style';

import { ReactComponent as CartEmptyHeart } from '../../assets/icons/cart-page-empty-heart.svg';
import { ReactComponent as CartFullHeart } from '../../assets/icons/heart-full3.svg';

interface CartIconWishlistProps {
   item?: any
}

const CartIconWishlist: React.FC<CartIconWishlistProps> = ({ item }) => {
   const { addToWishlist, removeWishlist } = useActionCreators();
   const { wishlistItems } = useSelector(state => state.wishlist);

   const [isInWishlist, setIsInWishlist] = useState(false);

   useEffect(() => {
      for (let i = 0; i < wishlistItems.length; i++) {
         if (wishlistItems[i].id === item.id) {
            setIsInWishlist(true);
         }
      }
   }, []);

   const removeWishlistHandle = (data: any) => {
      removeWishlist(data);
      setIsInWishlist(!isInWishlist);
   }

   const addToWishlistHandle = (data: any) => {
      addToWishlist(data);
      setIsInWishlist(!isInWishlist);
   }

   return (
      <CartIconWishlistItem
         onClick={() => isInWishlist ? removeWishlistHandle(item) : addToWishlistHandle(item)}>
         {
            isInWishlist ? <CartFullHeart /> : <CartEmptyHeart />
         }
      </CartIconWishlistItem>
   )
}

export default CartIconWishlist;