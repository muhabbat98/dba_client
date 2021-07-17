import React from 'react';
import src from './image.png';
import { ReactComponent as Logout } from './logout.svg';
import {
  MiddleHeaderActionForSellerContainer,
  Img,
  InfoContainer,
  ProfileContainer,
  ProfilePicture,
  Role,
  Exit,
  Name,
  Right,
  Title,
} from './style';
import DropdownMenu from '../../dropdown-menu';

const MiddleHeaderActionForSeller = () => {
  return (
    <MiddleHeaderActionForSellerContainer>
      <ProfileContainer>
        <ProfilePicture>
          <Img src={src} />
        </ProfilePicture>
        <InfoContainer>
          <Name>Азамат Азаматов</Name>
          <Role>Продавец</Role>
        </InfoContainer>
      </ProfileContainer>
      <Right>
        <DropdownMenu id="langs">
          <p>O'zbekcha</p>
          <p default={true}>Русский</p>
          <p>Ўзбекча</p>
        </DropdownMenu>
        <Exit>
          <Logout />
          <Title>Выйти</Title>
        </Exit>
      </Right>
    </MiddleHeaderActionForSellerContainer>
  );
};

export default MiddleHeaderActionForSeller;
