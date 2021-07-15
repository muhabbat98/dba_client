import React from 'react';
import {useRouteMatch} from "react-router-dom";
import {BuyerMenuContainer, Li, StyledLink, Ul} from './style';
import {Exit} from "../../settings/menu/style";
import {useActionCreators} from "../../../hooks";

const BuyerMenu = () => {
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
                    Мои данные
                </StyledLink>
            </Li>
            <Li>
                <StyledLink exact to={`${url}/delivery-address`}>
                    Адреса доставки
                </StyledLink>
            </Li>
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
    );
};

export default BuyerMenu;