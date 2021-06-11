import React, { useRef, useState, useEffect } from 'react';
import Button from '../button';
import TimerButton from './timer-button/timer-button';

import {
  SmsContainer,
  InputContainer,
  Input,
  Confirm,
  Div,
  Error,
} from './style';

interface SmsProps {
  reSend: () => void;
  sendSms: (
    code: string,
    callback: (error: string | undefined) => void
  ) => void;
}

const Sms: React.FC<SmsProps> = ({ reSend, sendSms }) => {
  const [error, setError] = useState<string | undefined>();

  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');

  const oneRef = useRef<HTMLInputElement>(null);
  const twoRef = useRef<HTMLInputElement>(null);
  const threeRef = useRef<HTMLInputElement>(null);
  const fourRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    oneRef.current?.focus();
  }, []);

  const confirmRegistration = () => {
    const code = one + two + three + four;
    setError(undefined);
    sendSms(code, (e) => {
      setError(e);
      fourRef.current?.focus();
    });
  };

  const resendHandler = () => {
    setError(undefined);
    reSend();
  };

  const oneChange = (e: any) => {
    const value = e.target.value;
    if (value.length === 1) {
      setOne(e.target.value);
      twoRef.current?.focus();
    } else if (value.length === 0) {
      setOne(e.target.value);
    } else {
      twoRef.current?.focus();
    }
  };

  const twoChange = (e: any) => {
    const value = e.target.value;
    if (value.length === 1) {
      setTwo(e.target.value);
      threeRef.current?.focus();
    } else if (value.length === 0) {
      setTwo(e.target.value);
    } else {
      threeRef.current?.focus();
    }
  };

  const threeChange = (e: any) => {
    const value = e.target.value;
    if (value.length === 1) {
      setThree(e.target.value);
      fourRef.current?.focus();
    } else if (value.length === 0) {
      setThree(e.target.value);
    } else {
      fourRef.current?.focus();
    }
  };

  const fourChange = (e: any) => {
    const value = e.target.value;
    if (value.length === 1) {
      setFour(e.target.value);
      fourRef.current?.focus();
    } else if (value.length === 0) {
      setFour(e.target.value);
    } else {
      fourRef.current?.focus();
    }
  };

  const oneKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      console.log('delete');
    }
  };

  const twoKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      e.preventDefault();
      setTwo('');
      oneRef.current?.focus();
    }
  };

  const threeKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      e.preventDefault();
      setThree('');
      twoRef.current?.focus();
    }
  };

  const fourKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      e.preventDefault();
      setFour('');
      threeRef.current?.focus();
    }
  };

  const isActive = (one + two + three + four).length === 4;

  return (
    <SmsContainer>
      {/* <Warning error={error}>Неверный код</Warning> */}

      <Confirm>
        <InputContainer error={error}>
          <Input
            onKeyDown={oneKeyDown}
            ref={oneRef}
            onChange={oneChange}
            value={one}
          />
        </InputContainer>

        <InputContainer error={error}>
          <Input
            onKeyDown={twoKeyDown}
            ref={twoRef}
            onChange={twoChange}
            value={two}
          />
        </InputContainer>

        <InputContainer error={error}>
          <Input
            onKeyDown={threeKeyDown}
            ref={threeRef}
            onChange={threeChange}
            value={three}
          />
        </InputContainer>

        <InputContainer error={error}>
          <Input
            onKeyDown={fourKeyDown}
            ref={fourRef}
            onChange={fourChange}
            value={four}
          />
        </InputContainer>
      </Confirm>

      {error && <Error>{error}</Error>}
      <TimerButton reSend={resendHandler} />

      <Div />

      {!isActive ? (
        <Button btnType='disabled'>Продолжить</Button>
      ) : (
        <Button onClick={confirmRegistration}>Продолжить</Button>
      )}
    </SmsContainer>
  );
};

export default Sms;
