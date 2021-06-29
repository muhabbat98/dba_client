import React from 'react';
import LoginContainer from './login-container';
import { LoginProvider } from './context';
import { useSelector } from '../../hooks';

const Login = () => {
  const open = useSelector((state) => state.login.open);

  return open ? (
    <LoginProvider>
      <LoginContainer />
    </LoginProvider>
  ) : (
    <></>
  );
};

export default Login;
