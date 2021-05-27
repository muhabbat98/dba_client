import React from 'react';
import RegistrationForm from './registration-form';
import { ModeratorsRegContainer, ModeratorsRegWrapper, Title } from './style';

const ModeratorsReg = () => {
  return (
    <ModeratorsRegContainer>
      <ModeratorsRegWrapper>
        <Title>Регистрация модератора</Title>

        <RegistrationForm />
      </ModeratorsRegWrapper>
    </ModeratorsRegContainer>
  );
};

export default ModeratorsReg;
