import React from 'react';
import { ModalContainer, ModalContent, CloseContainer } from './style';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface ModalProps {
  close: () => void;
  center?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, close, center }) => {
  return (
    <ModalContainer center={center!}>
      <ModalContent>
        <CloseContainer onClick={close} title='Закрыть'>
          <Close />
        </CloseContainer>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
