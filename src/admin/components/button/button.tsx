import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { MediumButton, BigButton, SmallButton } from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  uppercase?: boolean;
  size?: 'sm' | 'md' | 'bg';
  href?: string;
  fullWidth?: boolean;
  btnType?: 'outlined' | 'contained';
  disableElevation?: boolean;
}

const buttonSize = {
  sm: SmallButton,
  md: MediumButton,
  bg: BigButton,
};

const Button: React.FC<Props> = ({
  fullWidth,
  children,
  size,
  href,
  btnType,
  disableElevation,
  ...rest
}) => {
  const Button = buttonSize[size!];

  const button = (
    <>
      <Button
        disableElevation={disableElevation}
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </Button>
    </>
  );

  return href ? (
    <Link to='href' style={{ textDecoration: 'none' }}>
      {button}
    </Link>
  ) : (
    button
  );
};

Button.defaultProps = {
  size: 'md',
  fullWidth: false,
  disableElevation: false,
};

export default Button;
