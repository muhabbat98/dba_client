import { useRouteMatch } from 'react-router-dom';
import { Li, StyledLink } from '../style';

const BuyerMenu = () => {
  const { url } = useRouteMatch();
  return (
    <>
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
    </>
  );
};

export default BuyerMenu;
