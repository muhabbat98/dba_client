import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer, HeaderContainerLeft, HeaderContainerRight, HeaderTitle, HeaderNotification, HeaderGoToHome,
  HeaderProfile, HeaderProfileLeft, HeaderProfileRight, AvatarBox, AvatarImg
} from './style';

import { ReactComponent as NotificationIcon } from '../../assets/icons/notification-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import Avatar from '../../assets/images/profile-avatar.png';

const Header = () => {

  const { replace } = useHistory();

  const goHome = () => {
    replace('/');
  }

  return <HeaderContainer>
    <HeaderContainerLeft>
      <HeaderTitle>Все Категории</HeaderTitle>
    </HeaderContainerLeft>

    <HeaderContainerRight>
      <HeaderNotification>
        <NotificationIcon />
      </HeaderNotification>

      <HeaderGoToHome onClick={goHome}>
        <HomeIcon />
        <span>Перейти к сайту</span>
      </HeaderGoToHome>

      <HeaderProfile>
        <HeaderProfileLeft>Diyorbek <br /> Abdushukurov</HeaderProfileLeft>
        <HeaderProfileRight>
          <AvatarBox>
            <div>
              <AvatarImg src={Avatar} />
            </div>
          </AvatarBox>
        </HeaderProfileRight>
      </HeaderProfile>
    </HeaderContainerRight>
  </HeaderContainer>;
};

export default Header;
