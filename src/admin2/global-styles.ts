import styled from 'styled-components';

export const LoginH1 = styled.h1`
  line-height: 1.2;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0px 0px 15px;
`;

export const Tab = styled.div<{ tabs: number }>`
  display: grid;
  grid-template-columns: ${({ tabs }) => `repeat(${tabs},1fr)`};
`;

export const TabItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: 0.4s;
  padding: 15px;
  background-color: ${({ isActive }) => (isActive ? '#EEEEEE' : 'white')};
  border-bottom: ${({ isActive }) =>
    isActive ? '4px solid  #047804' : '4px solid  transparent'};
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 17px;
  padding-left: 7px;
`;

export const Option = styled.option`
  height: 40px;
`;
