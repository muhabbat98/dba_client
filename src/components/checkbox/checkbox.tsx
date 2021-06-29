import React, { SyntheticEvent } from 'react';
import { CheckBoxInput, CheckBoxLabel, CheckBoxSpan } from './style';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  register?: any;
  style?: any;
  callback?: (e: SyntheticEvent) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  disabled,
  id,
  label,
  style,
  register,
  callback,
  ...rest
}) => {
  return (
    <CheckBoxLabel style={style} htmlFor={id}>
      <CheckBoxInput
        name={name}
        value={value}
        disabled={disabled}
        onChange={callback}
        ref={register}
        id={id}
        type="checkbox"
        {...rest}
      />
      <CheckBoxSpan style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
        {label}
      </CheckBoxSpan>
    </CheckBoxLabel>
  );
};

export default Checkbox;
