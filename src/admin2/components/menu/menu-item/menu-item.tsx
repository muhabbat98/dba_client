import React, { useState } from 'react';

import {
  MenuItemContainer,
  StyledLink,
  ParentContainer,
  Children,
  Title,
  ArrowContainer,
} from './style';
import { useRouteMatch } from 'react-router-dom';

import { ReactComponent as Arrow } from './arrow.svg';

interface MenuItemProps {
  to?: string;
  parent?: string;
  isChild?: boolean | undefined;
}

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  parent,
  children,
  isChild,
}) => {
  const [open, setOpen] = useState(false);
  let { url, path, isExact } = useRouteMatch();

  return (
    <MenuItemContainer isChild={isChild}>
      {to && (
        <StyledLink exact to={to}>
          {isChild && ' - '}
          {children}
        </StyledLink>
      )}

      {parent && (
        <ParentContainer>
          <Title onClick={() => setOpen(!open)}>
            <span>{parent}</span>
            <ArrowContainer isOpen={open}>
              <Arrow />
            </ArrowContainer>
          </Title>

          <Children isOpen={open}>
            {React.Children.map(children, (child: any) =>
              React.cloneElement(child, { isChild: true })
            )}
          </Children>
        </ParentContainer>
      )}
    </MenuItemContainer>
  );
};

export default MenuItem;
