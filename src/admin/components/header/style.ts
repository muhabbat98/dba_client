import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  background-color: #394aab;
  padding: 4px 20px;
  color: #f2f6f7;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled.div`
  margin: 0 20px;
  cursor: pointer;
  a {
    display: block;
    display: flex;
    align-items: center;
    color: #f2f6f7;
    text-decoration: none;
    padding: 8px;
    transition: 0.35s;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: #f2f6f7;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.35s;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover a {
    background: #f2f6f7;
    color: #394aab !important;
    border-radius: 4px;
  }

  &:hover svg {
    fill: #394aab !important;
  }
`;
