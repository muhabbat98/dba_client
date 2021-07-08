import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import MenuItem from '../menu-item';
import { MenuContainer } from './style';

const Menu = () => {
  let { url } = useRouteMatch();
  return (
    <MenuContainer>
      <MenuItem to={`${url}`}>Главная</MenuItem>
      <MenuItem to={`${url}/category`}>Категория</MenuItem>
      <MenuItem to={`${url}/goods`}>Товары</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
