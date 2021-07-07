import React from 'react';
import { LinkProps } from 'react-router-dom';
import { MenuItemContainer } from './style';

interface Props extends LinkProps {}

const MenuItem: React.FC<Props> = ({ children }) => {
  return <MenuItemContainer>{children}</MenuItemContainer>;
};

export default MenuItem;
