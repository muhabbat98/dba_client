import styled from 'styled-components';

export const BottomHeaderContainer = styled.div``;

export const MenuContainer = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  a {
    display: block;
    margin: 0px 9px;
    padding: 10px 12px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.155556px;
    text-decoration: none;
    transition: 0.3s;
    color: #000000;
    border-radius: 4px;
    &:hover {
      background: #f8f8f8;
      color: ${({ theme: { primary_color } }) => primary_color};
    }
  }
`;

export const MenuItemAll = styled.div`
  display: block;
  margin: 0 10px;
  padding: 5px 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.155556px;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

export const BottomHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
