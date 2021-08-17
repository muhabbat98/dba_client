import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Settings } from './settings.svg';
import {
  LoginContainer,
  Left,
  Right,
  LogoContainer,
  Header,
  BrandName,
  SettingsContainer,
} from './style';

const Login = () => {
  return (
    <LoginContainer>
      <Left>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <BrandName>Marketplace</BrandName>
        </Header>
        <SettingsContainer>
          <Settings />
        </SettingsContainer>
      </Left>
      <Right></Right>
    </LoginContainer>
  );
};

export default Login;
