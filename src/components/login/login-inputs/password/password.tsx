import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { ReactComponent as Visibility } from '../../../../assets/icons/ic_visibility_off.svg';
import { ReactComponent as VisibilityBlue } from '../../../../assets/icons/ic_visibility_off_blue.svg';
import {
  PhoneContainer,
  Title,
  Input,
  Mask,
  InputContainer,
  PhoneContainerLabel,
  Placeholder,
} from './style';

interface PhoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  label: string;
  error?: boolean;
  warning?: boolean;
}

const Password: React.FC<PhoneProps> = ({
  warning,
  error,
  register,
  label,
  ...rest
}) => {
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);
  const [focus, setIsFocus] = useState(false);

  const visibleHandler = () => {
    setVisible((v) => !v);
  };

  const length = input.length;

  return (
    <PhoneContainer error={error} warning={warning}>
      <PhoneContainerLabel>
        <Title focus={focus || length > 0}>{label}</Title>
        <InputContainer>
          <Input
            ref={register}
            type={visible ? 'text' : 'password'}
            {...rest}
            autoComplete='off'
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              setIsFocus(false);
              setVisible(false);
            }}
            onChange={(e) => setInput(e.target.value)}
          />
          {visible ? (
            <VisibilityBlue onClick={visibleHandler} />
          ) : (
            <Visibility onClick={visibleHandler} />
          )}
          {!focus && length === 0 && <Placeholder>{label}</Placeholder>}
        </InputContainer>
      </PhoneContainerLabel>
    </PhoneContainer>
  );
};

export default Password;
