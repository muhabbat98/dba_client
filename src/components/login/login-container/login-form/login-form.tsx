import React, { useState } from 'react';
import Login from './login/login';
import LoginHeader from '../../login-header';
import UserType from '../../user-type';

import { LoginFormContiner } from './style';

const LoginForm = () => {
  return (
    <LoginFormContiner>
      <LoginHeader title='Вход в Marketplace' />
      <UserType />
      <Login />
    </LoginFormContiner>
  );
};

export default LoginForm;
