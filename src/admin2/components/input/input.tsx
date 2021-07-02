import React, { useState, InputHTMLAttributes } from 'react';
import {
  LoginInputContainer,
  InputWrapper,
  LoginIcon,
  InputTag,
  Label,
  TopLabel,
} from './style';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  register?: any;
  label?: string;
  version?: '1' | '2';
  change?: any;
}

const Input: React.FC<LoginInputProps> = ({
  Icon,
  label,
  register,
  version,
  change,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onchange = (v: string) => {
    setInputValue(v);
    change && change(v);
  };

  return (
    <>
      {version === '2' && <TopLabel>{label} :</TopLabel>}

      <LoginInputContainer isFocus={isFocus} version={version}>
        {Icon && (
          <LoginIcon isFocus={isFocus}>
            <Icon />
          </LoginIcon>
        )}
        <InputWrapper>
          <InputTag
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => onchange(e.target.value)}
            ref={register}
            autoComplete='off'
            {...rest}
          />
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

export default Input;
