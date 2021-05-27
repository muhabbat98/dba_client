import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: #f2f2f2;
    color: black;
    font-weight: 600;
    transition: 0.2s;
  }
`;

export const MenuContainer = styled.div``;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  min-width: 320px;
  width: 320px;
  border-radius: 16px;
  border: 1px solid ${({ theme: { grey3 } }) => grey3};
  list-style-type: none;
  overflow: hidden;
`;

export const Li = styled.li`
  padding: 0;
  margin: 0;
  transition: 0.2s;
  &:hover {
    background: #f2f2f2;
  }
  border-bottom: 1px solid ${({ theme: { grey3 } }) => grey3};
  &:last-child {
    color: ${({ theme: { red } }) => red};
    border-bottom: none;
  }
  a {
    display: block;
    padding: 18px 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
`;

export const Exit = styled.div`
  display: block;
  padding: 18px 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: ${({ theme: { red } }) => red};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
`;
