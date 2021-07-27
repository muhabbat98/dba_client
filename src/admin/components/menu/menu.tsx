import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import MenuItem from '../menu-item';
import { MenuContainer } from './style';

const Menu = () => {
  let { url } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      <MenuItem to={`${url}`}>Главная</MenuItem>
      <MenuItem
        to={`${url}/category`}
        isActive={() => pathname.includes('category')}
      >
        Категория
      </MenuItem>
      <MenuItem to={`${url}/goods`}>Товары</MenuItem>
      <MenuItem to={`${url}/moderators`}>Модераторы </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
