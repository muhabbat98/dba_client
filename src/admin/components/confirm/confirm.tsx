import React, { useEffect, useState } from 'react';
import {
  ConfirmContainer,
  ConfirmContent,
  ConfirmWrapper,
  Message,
  ActionContainer,
  Yes,
  No,
} from './style';

import { useSelector, useActionCreators } from '../../../hooks';

const Confirm = () => {
  const { callback, message } = useSelector((state) => state.confirm);
  const { cleanConfirm } = useActionCreators();
  const [isClose, setIsClose] = useState(false);

  const close = (e: any) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('confirm-container')) {
      setIsClose(true);
      setTimeout(() => {
        cleanConfirm();
      }, 150);
    }
  };

  useEffect(() => {
    if (message) {
      window.addEventListener('click', close);
    }

    return () => {
      window.removeEventListener('click', close);
      setIsClose(false);
    };
  }, [message]);

  const closeBTN = () => {
    setIsClose(true);
    setTimeout(() => {
      cleanConfirm();
    }, 150);
  };

  return message ? (
    <ConfirmContainer className='confirm-container'>
      <ConfirmWrapper isClose={isClose}>
        <ConfirmContent>
          <Message>{message}</Message>
        </ConfirmContent>
        <ActionContainer>
          <Yes onClick={callback}>Да</Yes>
          <No onClick={closeBTN}>Отмена</No>
        </ActionContainer>
      </ConfirmWrapper>
    </ConfirmContainer>
  ) : null;
};

export default Confirm;
