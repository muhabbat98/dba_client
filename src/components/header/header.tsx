import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BottomHeader from './bottom-header';
import MiddleHeader from './middle-header';
import TopHeader from './top-header';
import MenuContent from '../menu';
import { HeaderContainer } from './style';
import menuJson from './menu.json';
import BottomHeaderForSeller from './bottom-header-for-seller';
import { useSellerPathname } from '../../hooks';

const Header = () => {
  const [state, setMenuState] = useState<boolean>(false);
  const { isSellerPath } = useSellerPathname();

  const handleMenuState = () => {
    setMenuState(!state);
  };

  return (
    <>
      <HeaderContainer>
        <TopHeader />
        <MiddleHeader />

        {isSellerPath ? (
          <BottomHeaderForSeller />
        ) : (
          <BottomHeader state={state} stateHandler={handleMenuState} />
        )}
      </HeaderContainer>

      {/*{state && (*/}
      {/*  <MenuContent menuEls={menuJson} stateHandler={handleMenuState} />*/}
      {/*)}*/}
      {state && (
        <MenuContent menuEls={menuJson} stateHandler={handleMenuState} />
      )}
    </>
  );
};

export default Header;
