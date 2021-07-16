import React from 'react';
import Container from '../../grid/container';
import DropdownMenu from '../../dropdown-menu';
import {
  TopHeaderWrapper,
  TopHeaderContainer,
  PhoneNumber,
  MenuItem,
  Menu,
  MenuContainer,
} from './style';
import { useRole, UserRole } from '../../../hooks';

const TopHeader = () => {
  const { userRole } = useRole();
  return userRole === UserRole.SELLER ? null : (
    <TopHeaderContainer>
      <Container>
        <TopHeaderWrapper>
          <DropdownMenu id="regions">
            <p default={true}>Ташкент</p>
            <p>Андижан</p>
            <p>Бухара</p>
            <p>Самарканд</p>
          </DropdownMenu>
          <MenuContainer>
            <Menu>
              <MenuItem>Для бизнеса</MenuItem>
              <MenuItem>Доставка и оплата</MenuItem>
              <MenuItem>Поддержка</MenuItem>
              <MenuItem>Гарантии и возврат</MenuItem>
              <MenuItem>Вопросы и ответы</MenuItem>
              <MenuItem>Контакты</MenuItem>
            </Menu>
          </MenuContainer>
          <DropdownMenu id="langs">
            <p>O'zbekcha</p>
            <p default={true}>Русский</p>
            <p>Ўзбекча</p>
          </DropdownMenu>
          <PhoneNumber>+998 (71) 100-10-20</PhoneNumber>
        </TopHeaderWrapper>
      </Container>
    </TopHeaderContainer>
  );
};

export default TopHeader;
