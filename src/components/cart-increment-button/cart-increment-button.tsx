import React, { useState, useEffect } from 'react';
import { useActionCreators, useSelector } from '../../hooks';

import { CartIcrementButtonContainer, CartIcncrementButton, CartDecrementButton, CartIcrementInput, } from "./style";

import { ReactComponent as CartMinus } from '../../assets/icons/cart-minus.svg';
import { ReactComponent as CartPlus } from '../../assets/icons/cart-plus.svg';

interface CartIncrementButtonProps {
   item?: any
}

const CartIncrementButton: React.FC<CartIncrementButtonProps> = ({ item }) => {
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
      <CartIcrementButtonContainer>
         <CartIcncrementButton onClick={() => incrementHandle(item)}>
            <CartPlus />
         </CartIcncrementButton>
         <CartIcrementInput className={addClass} value={item.count} type="number" />
         {console.log(item)}
         <CartDecrementButton onClick={() => decrementHandle(item)}>
            <CartMinus />
         </CartDecrementButton>
      </CartIcrementButtonContainer>
   )
}

export default CartIncrementButton;
