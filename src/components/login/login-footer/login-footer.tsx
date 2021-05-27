import React from 'react';
import { useLogin } from '../context';
import {
  LoginFooterContainer,
  Footer,
  Title,
  Forgot,
  Middle,
  Registration,
  Top,
  Btn,
} from './style';

const LoginFooter: React.FC = () => {
  const { setRegistrationConfirmForm, setForgotPssswordForm } = useLogin();
  return (
    <LoginFooterContainer>
      <Top>
        <Forgot onClick={setForgotPssswordForm}>
          Забыли пароль или логин ?
        </Forgot>
        <Registration onClick={setRegistrationConfirmForm}>
          Регистрация
        </Registration>
      </Top>
      <Middle>
        <Title>Регистрация через </Title>
      </Middle>
      <Footer>
        <Btn>ID.GOV.UZ</Btn>
        <Btn>Digital bank</Btn>
      </Footer>
    </LoginFooterContainer>
  );
};

export default LoginFooter;
