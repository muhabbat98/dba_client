import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login';
import { useSelector } from '../../hooks/useSelector';
import { ReactComponent as Account } from '../../assets/icons/account.svg';
import { ReactComponent as LoginAfter } from '../../assets/icons/after_login.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart2.svg';
import { ReactComponent as Cart } from '../../assets/icons/shopping-cart.svg';
import { checkUSer } from '../../utils/check-user';
import {
  MiddleHeaderActionContainer,
  Action,
  AccountLogo,
  CartLogo,
  Title,
  Price,
  Info,
  HeartLogo,
  CartContainer,
  Count,
} from './style';

const MiddleHeaderAction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { wishlist, cart, user } = useSelector((state) => ({
    wishlist: state.wishlist.wishlistItems.length,
    cart: state.cart.totalCount,
    user: checkUSer(state.user),
  }));

  return (
    <MiddleHeaderActionContainer>
      {open && <Login open={open} setOpen={setOpen} />}
      {user ? (
        <Action>
          <Link to="/settings" title="Перейти к личный кабинет">
            <AccountLogo>
              <LoginAfter className="login-after" />
            </AccountLogo>
          </Link>
        </Action>
      ) : (
        <Action onClick={() => setOpen(true)}>
          <AccountLogo>
            <Account />
          </AccountLogo>
        </Action>
      )}
      {/* <Action onClick={() => setOpen(true)}>
        <AccountLogo>
          <Account />
        </AccountLogo>
      </Action> */}
      <Action>
        <HeartLogo>
          <Link to="/wishlist">
            {wishlist > 0 && <Count>{wishlist}</Count>}
            <Heart />
          </Link>
        </HeartLogo>
      </Action>
      <Action>
        <CartLogo>
          <Link to="/cart">
            {cart > 0 && <Count>{cart}</Count>}
            <Cart />
          </Link>
        </CartLogo>
        {/* <CartContainer>
          <Info>
            <Title>Сумма</Title>
            <Price>120 000 </Price>
          </Info> 
        </CartContainer> */}
      </Action>
    </MiddleHeaderActionContainer>
  );
};

export default MiddleHeaderAction;
