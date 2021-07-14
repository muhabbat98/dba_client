import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const activeClassName = 'nav-item-active';

export const SettingsTabContainer = styled.div``;

export const SettingsTabHeader = styled.div`
  display: flex;
  margin-bottom: 25px;
  /* max-width: fit-content;
  border-bottom: 2px solid #e9ecf4; */
`;

export const SettingsTabHeaderItem = styled(NavLink).attrs({ activeClassName })`
  border-bottom: 2px solid #e9ecf4;
  color: ${({ theme }) => theme.grey1};
  line-height: 24px;
  font-size: 16px;
  cursor: pointer;
  padding: 16px 20px;
  padding-right: 40px;

  &:last-child {
    padding-right: 20px;
  }

  &.${activeClassName} {
    border-bottom: 4px solid ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.primary_color};
    transition: 0.2s;
  }
`;

export const SettingsTabBody = styled.div``;
