import React from 'react';
import { useActionCreators, useRole, UserRole } from '../../../hooks';
import { useRouteMatch } from 'react-router-dom';
import { MenuContainer, Ul, Li, Exit } from './style';
import BuyerMenu from './buyer-menu';

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

  return (
    <MenuContainer>
      <Ul>
        <BuyerMenu />
        <Li onClick={handleExit}>
          <Exit>Выйти</Exit>
        </Li>
      </Ul>
    </MenuContainer>
  );
};

export default Menu;
