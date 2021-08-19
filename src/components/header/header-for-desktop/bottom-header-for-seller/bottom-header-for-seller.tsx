import React, { useEffect, useState } from 'react';
import {
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams,
} from 'react-router-dom';
import Container from '../../../grid/container';
import BreadCrumb from '../../../hambuger-menu';
import MenuItem from './menu-item';
import {
  BottomHeaderContainer,
  MenuContainer,
  BottomHeaderWrapper,
  MenuItemAll,
  MenuWrapper,
} from './style';

interface MenuStateProps {}
const BottomHeaderForSeller: React.FC<MenuStateProps> = () => {
  const { url, path } = useRouteMatch();
  const { pathname } = useLocation();

  //console.log(loc);

  console.log('url --- ', url);
  console.log('path --- ', path);
  return (
    <BottomHeaderContainer>
      <Container>
        <MenuContainer>
          <MenuItem to={'/seller'}>Приборная панель</MenuItem>
          <MenuItem to={`/seller/settings`}>Настройки</MenuItem>
          <MenuItem to={`/seller/add-product`}>Добавить товар</MenuItem>
        </MenuContainer>
      </Container>
    </BottomHeaderContainer>
  );
};

export default BottomHeaderForSeller;
