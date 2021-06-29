import React from 'react';
import { useHistory } from 'react-router-dom';
import { WishlistEmptyContainer, WishlistEmptyImg, WishlistEmptyTextBox, WishlistEmptyTitle, WishlistEmptyText } from './style';
import { ReactComponent as WishlistEmptyIcon } from '../../assets/icons/love.svg'
import Col from '../../components/grid/col';
import Button from '../../components/button';

const WishlistEmpty = () => {
   const {push} = useHistory();

   const goHome = () =>{
      push("/");
   }

   return (
      <Col xl={12}>
         <WishlistEmptyContainer>
            <WishlistEmptyImg>
               <WishlistEmptyIcon />
            </WishlistEmptyImg>
            <WishlistEmptyTextBox>
               <WishlistEmptyTitle>Ещё не готовы к покупке?</WishlistEmptyTitle>
               <WishlistEmptyText>Жмите ♡ на странице товара и добавляйте сюда то,
                  что нравится. И если цена на эти товары упадёт,
                  мы вам напишем.</WishlistEmptyText>
            </WishlistEmptyTextBox>
            <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
               <Button onClick={goHome} style={{marginBottom: "24px"}}>Перейти на Главную</Button>
               <Button btnType="disabled" style={{ cursor: "pointer" }}>Войти в свой аккаунт</Button>
            </div>
         </WishlistEmptyContainer>
      </Col>
   )
}

export default WishlistEmpty;
