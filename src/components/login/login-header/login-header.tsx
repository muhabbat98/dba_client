import React from 'react';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { LoginHeaderContainer, Title } from './style';

interface LoginHeaderProps {
  title: string;
  isConfirm?: boolean | undefined;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ title, isConfirm }) => {
  return (
    <LoginHeaderContainer>
      <Logo />
      <Title isConfirm={isConfirm}>{title}</Title>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;
