import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../grid/container';
import BreadCrumb from '../../../hambuger-menu';
import {
  BottomHeaderContainer,
  MenuContainer,
  MenuItem,
  BottomHeaderWrapper,
  MenuItemAll,
  MenuWrapper,
} from './style';
interface MenuStateProps {
  state?: boolean | undefined;
  stateHandler?: () => void | undefined;
}
const BottomHeader: React.FC<MenuStateProps> = ({ state, stateHandler }) => {

  const [componentState, setMenuComponentState] = useState<any>();
  useEffect(() => {
    setMenuComponentState(state);
  }, [state]);
  const handleMenuIcon = () => {
    setMenuComponentState(!state);
    setTimeout(function () {
      if (stateHandler) stateHandler();
    }, 200);
  };
  return (
    <BottomHeaderContainer>
      <Container>
        <BottomHeaderWrapper>
          <div onClick={handleMenuIcon}>
            <BreadCrumb menuState={state} />
          </div>
          <MenuWrapper>
            <MenuContainer>
              <MenuItem>
                <Link to="/">Мобильные телефоны</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Телевизоры</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Товари длядома</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Авто</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Гигиена</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Зоотовари</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Красота</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Строительство и ремонт</Link>
              </MenuItem>
            </MenuContainer>
          </MenuWrapper>
          {/* <MenuItemAll>Ещё...</MenuItemAll> */}
        </BottomHeaderWrapper>
      </Container>
    </BottomHeaderContainer>
  );
};

export default BottomHeader;
