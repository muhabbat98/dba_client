import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const MenuContainer = styled.div`
  height: 100vh;
  background: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: #394aab;
    color: #f2f6f7;
  }
`;

export const MenuUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const MenuItems = styled.div``;

export const MenuItem = styled.li`
  a {
    display: block;
    padding: 10px;
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

export const Info = styled.div`
  text-align: center;
  padding: 15px;
  svg {
    fill: grey;
    width: 100px;
    height: 100%;
  }
`;

export const Username = styled.h3`
  margin: 0;
  color: #808080;
`;

export const Email = styled.h5`
  margin: 0;
  color: #808080;
  font-size: 12px;
  font-weight: 100;
`;
