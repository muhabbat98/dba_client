import { useRouteMatch } from 'react-router-dom';
import { Li, StyledLink } from '../style';

const SellerMenu = () => {
  const { url } = useRouteMatch();
  return (
    <>
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
    </>
  );
};

export default SellerMenu;
