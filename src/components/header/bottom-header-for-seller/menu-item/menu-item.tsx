import React from 'react';
import { StyledLink } from './style';
import { NavLinkProps } from 'react-router-dom';

interface Props extends NavLinkProps {}

const MenuItem: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledLink exact {...rest} activeClassName="nav-item-active">
      {children}
    </StyledLink>
  );
};

export default MenuItem;
