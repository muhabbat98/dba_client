import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BottomHeader from './bottom-header';
import MiddleHeader from './middle-header';
import TopHeader from './top-header';
import MenuContent from '../../menu';
import { HeaderContainer } from './style';
import BottomHeaderForSeller from './bottom-header-for-seller';
import {
  useSellerPathname,
  useActionCreators,
  useSelector,
} from '../../../hooks';
import { useWindowSize } from '../../../hooks/useWindowSize';

const Header = () => {
  const [state, setMenuState] = useState<boolean>(false);
  const { isSellerPath } = useSellerPathname();
  const { menu } = useSelector((state) => state.menu);
  const { fetchMenu } = useActionCreators();

  const size = useWindowSize();
  console.log('size -- ', size);

  useEffect(() => {
    fetchMenu();
  }, []);

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

      {state && <MenuContent menuEls={menu} stateHandler={handleMenuState} />}
    </>
  );
};

export default Header;
