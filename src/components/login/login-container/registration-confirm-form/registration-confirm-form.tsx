import React from 'react';
import LoginHeader from '../../login-header';
import Button from '../../../button';
import { useLogin, UserType } from '../../context';
import { RegistrationConfirmContainer, NoButton } from './style';

const RegistrationConfirm = () => {
  const {
    setLoginForm,
    setRegistrationForm,
    state: { userType },
  } = useLogin();
  return (
    <RegistrationConfirmContainer>
      <LoginHeader
        isConfirm={true}
        title={
          userType === UserType.BUYER
            ? 'Вы зарегистрируетесь как покупатель.'
            : 'Вы зарегистрируетесь как продавец.'
        }
      />
      <Button onClick={setRegistrationForm}>Да</Button>
      <NoButton onClick={setLoginForm}>Нет</NoButton>
    </RegistrationConfirmContainer>
  );
};

export default RegistrationConfirm;
