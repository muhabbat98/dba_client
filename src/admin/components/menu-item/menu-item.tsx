import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledLink } from './style';

interface Props extends LinkProps {}

const MenuItem: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledLink exact {...rest}>
      {children}
    </StyledLink>
  );
};

export default MenuItem;
