import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { StyledLink } from './style';

interface Props extends NavLinkProps {}

const MenuItem: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledLink exact {...rest} activeClassName="nav-item-active">
      {children}
    </StyledLink>
  );
};

export default MenuItem;
