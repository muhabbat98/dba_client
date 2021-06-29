import { useRouteMatch } from 'react-router-dom';
import MenuItem from './menu-item';
import { useSelector } from '../../../hooks';
import { ReactComponent as Account } from '../../assets/icons/account.svg';
import { checkUSer } from '../../utils/checkUser';

import {
  MenuContainer,
  MenuItems,
  MenuUl,
  Info,
  Username,
  Email,
} from './style';

function Menu() {
  let { url } = useRouteMatch();
  const { username, email } = useSelector((state) => state.user);
  // const admin = useSelector((state) => checkUSer(state.user));
  const admin = true;

  return (
    <MenuContainer>
      <Info>
        <Account />
        <Username>{username}</Username>
        <Email>{email}</Email>
      </Info>
      <MenuItems>
        <MenuUl>
          <MenuItem to={url}>Главная</MenuItem>

          <MenuItem to={`${url}/add-category`}>Добавить категорию</MenuItem>

          <MenuItem to={`${url}/references`}>Справочник</MenuItem>

          {admin && (
            <MenuItem parent="Модератор">
              <MenuItem to={`${url}/moderator/moderators`}>Модераторы</MenuItem>
              <MenuItem to={`${url}/moderator/moderators-reg`}>
                Регистрация
              </MenuItem>
            </MenuItem>
          )}
        </MenuUl>
      </MenuItems>
    </MenuContainer>
  );
}

export default Menu;
