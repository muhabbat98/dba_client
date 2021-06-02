import React from 'react';
import { useActionCreators } from '../../../hooks';
import { useRouteMatch } from 'react-router-dom';
import { MenuContainer, Ul, Li, StyledLink, Exit } from './style';

const Menu = () => {
  const { url } = useRouteMatch();
  const { setConfirm, cleanUser, cleanConfirm } = useActionCreators();

  const handleExit = () => {
    setConfirm({
      message: 'Вы действительно хотите выйти',
      callback: () => {
        cleanUser();
        cleanConfirm();
      },
    });
  };

  return (
    <MenuContainer>
      <Ul>
        <Li>
          <StyledLink exact to={`${url}`}>
            Мои данные
          </StyledLink>
        </Li>
        <Li>
          <StyledLink exact to={`${url}/delivery-address`}>
            Адреса доставки
          </StyledLink>
        </Li>
        {/* <Li>
          <StyledLink exact to={`${url}/notifications`}>
            Уведомления
          </StyledLink>
        </Li>
        <Li>
          <StyledLink exact to={`${url}/change-password`}>
            Изменить пароль
          </StyledLink>
        </Li> */}
        <Li>
          <StyledLink exact to={`${url}/personal-data`}>
            Данные профиля Marketplace
          </StyledLink>
        </Li>
        <Li>
          <StyledLink exact to={`${url}/payment`}>
            Оплата
          </StyledLink>
        </Li>
        <Li>
          <StyledLink exact to={`${url}/orders`}>
            Мои заказы
          </StyledLink>
        </Li>
        <Li>
          <StyledLink exact to={`${url}/discussion`}>
            Споры
          </StyledLink>
        </Li>
        <Li onClick={handleExit}>
          <Exit>Выйти</Exit>
        </Li>
      </Ul>
    </MenuContainer>
  );
};

export default Menu;
