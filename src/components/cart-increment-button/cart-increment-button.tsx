import React, { useState } from 'react';
import { useActionCreators } from '../../hooks';

import { CartIcrementButtonContainer, CartIcncrementButton, CartDecrementButton, CartIcrementInput, } from "./style";

import { ReactComponent as CartMinus } from '../../assets/icons/cart-minus.svg';
import { ReactComponent as CartPlus } from '../../assets/icons/cart-plus.svg';

interface CartIncrementButtonProps {
   item?: any,
   isMobile?: boolean
}

const CartIncrementButton: React.FC<CartIncrementButtonProps> = ({ item, isMobile }) => {
   const [addClass, setAddClass] = useState('');

   const { decrementCart, incrementCart } = useActionCreators();

   const incrementHandle = (data: any) => {
      incrementCart({ ...data, count: 1 });

      setAddClass('active');
      setTimeout(() => {
         setAddClass('');
      }, 300);
   }

   const decrementHandle = (data: any) => {
      if (item.count === 1) {
         return;
      }
      decrementCart({ ...data, count: 1 });

      setAddClass('active');
      setTimeout(() => {
         setAddClass('');
      }, 300);
   }

   return (
      <CartIcrementButtonContainer isMobileVersion={isMobile}>
         <CartIcncrementButton isMobileVersion={isMobile} onClick={() => incrementHandle(item)}>
            <CartPlus />
         </CartIcncrementButton>
         <CartIcrementInput isMobileVersion={isMobile} className={addClass} value={item.count} type="number" />
         <CartDecrementButton isMobileVersion={isMobile} onClick={() => decrementHandle(item)}>
            <CartMinus />
         </CartDecrementButton>
      </CartIcrementButtonContainer>
   )
}

export default CartIncrementButton;
