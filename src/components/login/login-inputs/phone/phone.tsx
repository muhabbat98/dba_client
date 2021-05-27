import React, { useState, useRef, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import {
  PhoneContainer,
  Title,
  Input,
  Mask,
  InputContainer,
  Placeholder,
  PhoneContainerLabel,
  Warning,
} from './style';

interface PhoneProps {
  onchange?: any;
  noPhoneError?: boolean;
  incorrectPhoneError?: boolean;
}

const Phone: React.FC<PhoneProps> = ({
  onchange,
  incorrectPhoneError,
  noPhoneError,
}) => {
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);
  const [focus, setIsFocus] = useState(false);

  // const inp = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inp.current?.focus();
  //   setIsFocus(true);
  // }, []);

  let s = input.replace(/\s/g, '');
  s = s.replace(/_/g, '');
  const length = s.length;

  const change = (e: any) => {
    const value = e.target.value;
    setInput(value);
    let phone = value.replace(/\s/g, '');
    phone = phone.replace(/_/g, '');
    onchange(phone);
  };

  return (
    <>
      <PhoneContainer error={incorrectPhoneError || noPhoneError}>
        <PhoneContainerLabel>
          <Title focus={focus || length > 0}>Телефон номер</Title>
          <InputContainer>
            {(focus || length > 0) && <Mask>+998</Mask>}

            <Input
              // inputRef={inp}
              name='phone'
              mask='99 999 99 99'
              onChange={change}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />

            {!focus && length === 0 && <Placeholder>Телефон номер</Placeholder>}
          </InputContainer>
        </PhoneContainerLabel>
      </PhoneContainer>
      {noPhoneError === true && !incorrectPhoneError && (
        <Warning>Введите телефон номер</Warning>
      )}
    </>
  );
};

export default Phone;
