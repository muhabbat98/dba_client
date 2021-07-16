import React, { useState } from 'react';
import BottomHeader from './bottom-header';
import MiddleHeader from './middle-header';
import TopHeader from './top-header';
import MenuContent from '../menu';
import { HeaderContainer } from './style';
import menuJson from './menu.json';
import { useRole, UserRole } from '../../hooks';
import BottomHeaderForSeller from './bottom-header-for-seller';

const Header = () => {
  const [state, setMenuState] = useState<boolean>(false);
  const { userRole } = useRole();

  const handleMenuState = () => {
    setMenuState(!state);
  };

  return (
    <>
      <HeaderContainer>
        <TopHeader />
        <MiddleHeader />

        {userRole === UserRole.BUYER || userRole === null ? (
          <BottomHeader state={state} stateHandler={handleMenuState} />
        ) : (
          <BottomHeaderForSeller />
        )}
      </HeaderContainer>

      {state && (
        <MenuContent menuEls={menuJson} stateHandler={handleMenuState} />
      )}
    </>
  );
};

export default Header;
