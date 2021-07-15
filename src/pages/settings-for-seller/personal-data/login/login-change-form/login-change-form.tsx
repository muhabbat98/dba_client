import React from 'react';
import Backdrop from '../../../../../components/backdrop';
import LoginForms from './login-forms';
import { LoginChangeFormContainer } from './style';

interface Props {
  closeModal: () => void;
}

const LoginChangeForm: React.FC<Props> = ({ closeModal }) => {
  return (
    <LoginChangeFormContainer>
      <Backdrop close={closeModal} />
      <LoginForms closeModal={closeModal} />
    </LoginChangeFormContainer>
  );
};

export default LoginChangeForm;
