import React from 'react';
import { ButtonElement } from './style';

interface ButtonName extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'white' | 'outlined' | 'disabled'|'gray'|'default',
  //small=>max-width:130px, medium=>width:35opx, large=>width:100%, 
  size?: 'small'|'medium'|'large' 
}

const Button: React.FC<ButtonName> = ({ children, btnType,size, type, ...rest }) => {
  return (
    <ButtonElement {...rest} t={btnType} size={size}> 
      {children}
    </ButtonElement>
  );
};

export default Button;
