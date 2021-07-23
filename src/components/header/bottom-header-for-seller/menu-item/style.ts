import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const MenuItemContainer = styled.div``;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: black;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  padding: 24px;
  letter-spacing: -0.155556px;

  &.${activeClassName} {
    color: #264796;
  }
`;
