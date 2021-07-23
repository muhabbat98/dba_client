import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Account } from '../../../assets/icons/account.svg';
import { ReactComponent as LoginAfter } from '../../../assets/icons/after_login.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart2.svg';
import { ReactComponent as Cart } from '../../../assets/icons/shopping-cart.svg';
import { checkUSer } from '../../../utils/check-user';
import {
  AccountLogo,
  Action,
  CartLogo,
  Count,
  HeartLogo,
  MiddleHeaderActionContainer,
} from './style';
import {
  useActionCreators,
  useRole,
  UserRole,
  useSelector,
} from '../../../hooks';
import { Profile } from '../middle-header-action-for-seller/middle-header-action-for-seller';

const MiddleHeaderActionForBuyer = () => {
  const { wishlist, cart, user } = useSelector((state) => ({
    wishlist: state.wishlist.wishlistItems.length,
    cart: state.cart.totalCount,
    user: checkUSer(state.user),
  }));

  const { userRole } = useRole();

  const { openLogin } = useActionCreators();

  const buyerHeader = (
    <>
      {user ? (
        <Action>
          <Link to="/settings" title="Перейти к личный кабинет">
            <AccountLogo>
              <LoginAfter className="login-after" />
            </AccountLogo>
          </Link>
        </Action>
      ) : (
        <Action onClick={openLogin}>
          <AccountLogo>
            <Account />
          </AccountLogo>
        </Action>
      )}
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
      </Action>
    </>
  );

  return (
    <MiddleHeaderActionContainer>
      {userRole === UserRole.SELLER ? <Profile /> : buyerHeader}
    </MiddleHeaderActionContainer>
  );
};

export default MiddleHeaderActionForBuyer;
