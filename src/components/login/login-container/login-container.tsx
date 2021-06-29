import React from 'react';
import LoginForm from './login-form';
import RegistrationConfirmForm from './registration-confirm-form';
import RegistrationForm from './registration-form';
import ForgotPassword from './forgot-password';
import GlassLayer from '../../../components/glass-layer';
import { useLogin, FormType } from '../context';
import { ReactComponent as Close } from '../../../assets/icons/ic_close.svg';
import { LoginContainerWrapper } from './style';

const LoginContainer = () => {
  const {
    closeLogin,
    state: { formType },
  } = useLogin();

  return (
    <GlassLayer close={closeLogin}>
      <LoginContainerWrapper>
        <Close onClick={closeLogin} />

        {formType === FormType.LoginForm && <LoginForm />}

        {formType === FormType.RegistratiomConfirmForm && (
          <RegistrationConfirmForm />
        )}

        {formType === FormType.RegistrationForm && <RegistrationForm />}

        {formType === FormType.ForgotPassword && <ForgotPassword />}
      </LoginContainerWrapper>
    </GlassLayer>
  );
};

export default LoginContainer;
