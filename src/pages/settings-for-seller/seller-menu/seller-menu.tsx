import { useRouteMatch } from 'react-router-dom';
import { Li, StyledLink, Ul } from './style';
import {Exit} from "../../settings/menu/style";
import React from "react";
import {useActionCreators} from "../../../hooks";

const SellerMenu = () => {
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
    <Ul>
      <Li>
        <StyledLink exact to={`${url}`}>
          Реквизиты
        </StyledLink>
      </Li>
      <Li>
        <StyledLink exact to={`${url}/delivery-address`}>
          Адрес
        </StyledLink>
      </Li>
      <Li>
        <StyledLink exact to={`${url}/my-products`}>
          Мои товары
        </StyledLink>
      </Li>
      <Li>
        <StyledLink exact to={`${url}/orders`}>
          Заказы к исполнению
        </StyledLink>
      </Li>
      <Li>
        <StyledLink exact to={`${url}/discussion`}>
          Споры
        </StyledLink>
      </Li>
      <Li>
        <StyledLink exact to={`${url}/personal-data`}>
          Данные профиля Marketplace
        </StyledLink>
      </Li>
        <Li onClick={handleExit}>
            <Exit>Выйти</Exit>
        </Li>
    </Ul>
  );
};

export default SellerMenu;
