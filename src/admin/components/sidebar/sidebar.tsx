import React from 'react';
import Menu from '../menu';
import { SidebarContainer, Logo, Exit } from './style';
import { useActionCreators } from '../../../hooks';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const { setConfirm, cleanConfirm, cleanUser } = useActionCreators();
  const { push } = useHistory();
  function exit() {
    setConfirm({
      message: <>Вы действительно хотите выйти</>,
      callback: () => {
        cleanConfirm();
        cleanUser();
        push('/admin');
      },
    });
  }

  return (
    <SidebarContainer>
      <Logo>Marketplace</Logo>
      <Menu />
      <Exit onClick={exit}>Exit</Exit>
    </SidebarContainer>
  );
};

export default Sidebar;
