import React from 'react';
import Menu from '../menu';
import { SidebarContainer, Logo, Exit } from './style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Marketplace</Logo>
      <Menu />
      <Exit>Exit</Exit>
    </SidebarContainer>
  );
};

export default Sidebar;
