import React, { useState, InputHTMLAttributes } from 'react';
import { ReactComponent as Key } from '../../assets/icons/key.svg';
import { ReactComponent as Visibility } from '../../assets/icons/visibility.svg';

import {
  LoginInputContainer,
  InputWrapper,
  LoginIcon,
  Input,
  Label,
  LoginIconRight,
  TopLabel,
} from './style';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label?: string;
  version?: '1' | '2';
}

const LoginInput: React.FC<LoginInputProps> = ({
  label,
  register,
  placeholder,
  type,
  version,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [visibile, setVisibility] = useState<boolean>(false);

  return (
    <>
      {version === '2' && <TopLabel>{label} :</TopLabel>}
      <LoginInputContainer isFocus={isFocus} version={version}>
        <LoginIcon isFocus={isFocus}>
          <Key />
        </LoginIcon>

        <InputWrapper>
          <Input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setInputValue(e.target.value)}
            ref={register}
            placeholder={placeholder}
            type={visibile ? 'text' : type}
            autoComplete='off'
            {...rest}
          />
          <LoginIconRight isFocus={isFocus} visibile={visibile}>
            <Visibility
              onMouseDown={() => setVisibility(true)}
              onMouseUp={() => setVisibility(false)}
            />
          </LoginIconRight>

          {version === '1' ||
            (!version && (
              <Label isFocus={isFocus} length={inputValue?.length}>
                {label}
              </Label>
            ))}
        </InputWrapper>
      </LoginInputContainer>
    </>
  );
};

export default LoginInput;
