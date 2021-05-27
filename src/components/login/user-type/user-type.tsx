import React from 'react';
import { useLogin, UserType } from '../context';
import { UserTypeContainer, Btn } from './style';

const UserTypeForm = () => {
  const {
    state: { userType },
    setBuyer,
    setSeller,
  } = useLogin();

  return (
    <UserTypeContainer>
      <Btn onClick={setBuyer} isActive={userType === UserType.BUYER}>
        Покупатель
      </Btn>
      <Btn onClick={setSeller} isActive={userType === UserType.SELLER}>
        Продавец
      </Btn>
    </UserTypeContainer>
  );
};

export default UserTypeForm;
