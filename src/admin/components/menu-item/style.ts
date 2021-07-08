import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const MenuItemContainer = styled.div``;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  padding: 18px 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #a4a6b3;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &.${activeClassName} {
    background: #3e4049;
    color: #0091ff;
  }
`;
