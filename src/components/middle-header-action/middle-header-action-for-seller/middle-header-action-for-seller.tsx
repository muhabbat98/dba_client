import React from 'react';
import src from './image.png';
import { ReactComponent as Logout } from './logout.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
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
import { useActionCreators, useSellerPathname } from '../../../hooks';

export function Profile() {
  const { push } = useHistory();
  const { isSellerPath } = useSellerPathname();
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
    <>
      <ProfileContainer onClick={() => push('seller')}>
        <ProfilePicture>
          <Img src={src} />
        </ProfilePicture>
        <InfoContainer>
          <Name>Азамат Азаматов</Name>
          <Role>Продавец</Role>
        </InfoContainer>
      </ProfileContainer>
      {!isSellerPath && (
        <Exit onClick={handleExit}>
          <Logout />
          <Title>Выйти</Title>
        </Exit>
      )}
    </>
  );
}

const MiddleHeaderActionForSeller = () => {
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
    <MiddleHeaderActionForSellerContainer>
      <Profile />
      <Right>
        <DropdownMenu id="langs">
          <p>O'zbekcha</p>
          <p default={true}>Русский</p>
          <p>Ўзбекча</p>
        </DropdownMenu>
        <Exit onClick={handleExit}>
          <Logout />
          <Title>Выйти</Title>
        </Exit>
      </Right>
    </MiddleHeaderActionForSellerContainer>
  );
};

export default MiddleHeaderActionForSeller;
