import styled from 'styled-components';

export const MenuContainer = styled.div`
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.07);
  position: absolute;
  z-index: 5;
  top: 60%;
  right: 110%;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  padding: 14px 18px;
  :hover {
    background: #f5f8ff;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const Title = styled.div``;
