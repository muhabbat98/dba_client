import React, { useState, useEffect } from 'react';
import Button from '../button';
import { ReactComponent as Close } from '../../assets/icons/ic_close.svg';
import { ConfirmContainer, ConfirmContent, Title, Div } from './style';
import { useSelector, useActionCreators } from '../../hooks';

const Confirm = () => {
  const { callback, message } = useSelector((state) => state.confirm);
  const { cleanConfirm } = useActionCreators();
  const [isClose, setIsClose] = useState(false);

  const close = (e: any) => {
    if (e.target.classList.contains('confirm-container-u')) {
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
    <ConfirmContainer className='confirm-container-u'>
      <ConfirmContent isClose={isClose}>
        <Close onClick={closeBTN} />
        <Title>{message}</Title>
        <Button onClick={callback}>Да</Button>
        <Div />
        <Button btnType='gray' onClick={closeBTN}>
          Нет
        </Button>
      </ConfirmContent>
    </ConfirmContainer>
  ) : null;
};

export default Confirm;
