import React from 'react';
import LoginContainer from './login-container';
import { LoginProvider } from './context';

interface LoginProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setOpen, open }) => {
  return (
    <LoginProvider open={open} setOpen={setOpen}>
      <LoginContainer />
    </LoginProvider>
  );
};

export default Login;
