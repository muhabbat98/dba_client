import React,{useState} from 'react';
import BottomHeader from './bottom-header';
import MiddleHeader from './middle-header';
import TopHeader from './top-header';
import MenuContent from '../menu';
import { HeaderContainer } from './style';
import menuJson from './menu.json'

const Header = () => {
  const [state,setMenuState] = useState<boolean>(false);
 const handleMenuState=()=>{
   setMenuState(!state);
 }
  return (<>
    <HeaderContainer>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader state={state} stateHandler={handleMenuState}/>
    </HeaderContainer>
    {state?<MenuContent menuEls={menuJson} stateHandler={handleMenuState} />:''}
    </>
  );
};

export default Header;
