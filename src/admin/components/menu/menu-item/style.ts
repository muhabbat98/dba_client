import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

interface Props {
  isOpen: boolean;
}

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: #394aab;
    color: #f2f6f7;
  }
`;

export const MenuItemContainer = styled.div<{ isChild: boolean | undefined }>`
  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    transition: 0.3s;
    color: #394aab;

    font-weight: bold;
    padding-left: ${({ isChild }) => (isChild ? '30px' : 'auto')};
    &:hover {
      background: #394aab;
      color: #f2f6f7;
    }
  }
`;

export const ParentContainer = styled.div`
  a {
    display: block;
    text-decoration: none;
    transition: 0.3s;
    color: #394aab;
    font-weight: bold;
    &:hover {
      background: #394aab;
      color: #f2f6f7;
    }
  }
`;

export const ArrowContainer = styled.div<Props>`
  transition: 0.3s;
  transform: ${({ isOpen }) => `rotate(${isOpen ? '-180' : 0}deg)`};
  svg {
    transition: 0.3s;
    width: 16px;
    height: 16px;
    fill: #394aab;
    display: block;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #394aab;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #394aab;
    color: #f2f6f7;
  }

  &:hover ${ArrowContainer} {
    svg {
      fill: #f2f6f7;
    }
  }
`;

export const Children = styled.div<Props>`
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
`;
