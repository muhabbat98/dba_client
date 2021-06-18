import React from 'react';
import { CartEmptyContainer, CartEmptyImg, CartEmptyTextBox, CartEmptyTitle, CartEmptyText } from "./style";
import { ReactComponent as CartEmptyIcon } from '../../assets/icons/empty-cart.svg';
import Button from '../../components/button';

const CartEmpty = () => {
   return (
      <div>
         <CartEmptyContainer>
            <CartEmptyImg>
               <CartEmptyIcon />
            </CartEmptyImg>
            <CartEmptyTextBox>
               <CartEmptyTitle>В корзине пока пусто</CartEmptyTitle>
               <CartEmptyText>Перейдите в каталог, чтобы добавить товары
                  или войдите в свой аккаунт, чтобы посмотреть
                  уже добавленные товары</CartEmptyText>
            </CartEmptyTextBox>
            <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
               <Button style={{ marginBottom: "24px" }}>Перейти на Главную</Button>
               <Button btnType="disabled" style={{ cursor: "pointer" }}>Войти в свой аккаунт</Button>
            </div>
         </CartEmptyContainer>
      </div>
   )
}

export default CartEmpty;