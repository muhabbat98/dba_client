import React from 'react';
import Menu from '../menu';
import { SidebarContainer, Logo } from './style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Marketplace</Logo>
      <Menu />
    </SidebarContainer>
  );
};

export default Sidebar;
