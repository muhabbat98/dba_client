import React from 'react';
import Backdrop from '../../../../../../components/backdrop';
import PasswordForm from './password-form';
import { PasswordChangeFormContainer } from './style';

interface Props {
  closeModal: () => void;
}

const PasswordChangeForm: React.FC<Props> = ({ closeModal }) => {
  return (
    <PasswordChangeFormContainer>
      <Backdrop close={closeModal} />
      <PasswordForm closeModal={closeModal} />
    </PasswordChangeFormContainer>
  );
};

export default PasswordChangeForm;
