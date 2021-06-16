import React from 'react';
import { useActionCreators, useRole, UserRole } from '../../../hooks';
import { useRouteMatch } from 'react-router-dom';
import { MenuContainer, Ul, Li, Exit } from './style';
import BuyerMenu from './buyer-menu';
import SellerMenu from './seller-menu';

const Menu = () => {
  const { setConfirm, cleanUser, cleanConfirm } = useActionCreators();
  const { isBuyer, userRole } = useRole();

  const handleExit = () => {
    setConfirm({
      message: 'Вы действительно хотите выйти',
      callback: () => {
        cleanUser();
        cleanConfirm();
      },
    });
  };

  console.log('UserRole', userRole === UserRole.SELLER);

  return (
    <MenuContainer>
      <Ul>
        {isBuyer ? <BuyerMenu /> : <SellerMenu />}
        <Li onClick={handleExit}>
          <Exit>Выйти</Exit>
        </Li>
      </Ul>
    </MenuContainer>
  );
};

export default Menu;
