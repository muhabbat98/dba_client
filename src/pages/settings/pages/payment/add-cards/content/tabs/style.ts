import styled from 'styled-components';

interface TabItemProps {
  active: boolean;
}

export const TabsContainer = styled.div`
  margin: 0 -24px;
`;

export const TabsWrapper = styled.div`
  background: rgba(241, 247, 250, 0.8);
  border-radius: 23px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 4px;
`;

export const TabsItem = styled.div<TabItemProps>`
  padding: 12px;
  padding-left: 0;
  padding-right: 0;
  letter-spacing: -0.155556px;
  text-align: center;
  font-size: 16px;
  color: ${({ active, theme: { blue } }) => (active ? blue : '#89A9BC')};
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  font-weight: ${({ active }) => (active ? 600 : 500)};
  border-radius: 25px;
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.h1`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.15px;
  margin: 0;
  margin-bottom: 36px;
`;
