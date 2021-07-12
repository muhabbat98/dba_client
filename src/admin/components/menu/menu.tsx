import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import MenuItem from '../menu-item';
import { MenuContainer } from './style';

const Menu = () => {
  let { url } = useRouteMatch();
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  console.log(['/category'].includes(pathname));

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
    </MenuContainer>
  );
};

export default Menu;
