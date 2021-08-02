import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import { CartEmptyContainer, CartEmptyImg, CartEmptyTextBox, CartEmptyTitle, CartEmptyText } from "./style";
import { ReactComponent as CartEmptyIcon } from '../../assets/icons/empty-cart.svg';


const CartEmpty = () => {
   const { push } = useHistory();

   const goHome = () => {
      push("/");
   }

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
               <Button onClick={goHome} style={{ marginBottom: "24px" }}>Перейти на Главную</Button>
               {/* <Button btnType="disabled" style={{ cursor: "pointer" }}>Войти в свой аккаунт</Button> */}
            </div>
         </CartEmptyContainer>
      </div>
   )
}

export default CartEmpty;