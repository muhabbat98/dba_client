import styled from 'styled-components';

export const TopHeaderContainer = styled.div`
  background: ${({ theme: { grey4 } }) => grey4};
`;

export const TopHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneNumber = styled.div`
  font-weight: 700;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.155556px;
  margin-left: 60px;
`;

export const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 1;
  justify-content: space-around;
  padding: 0 15px;
`;

export const MenuItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.155556px;
  color: ${({ theme: { grey1 } }) => grey1};
  font-style: normal;
  margin: 20px 0px;
`;
