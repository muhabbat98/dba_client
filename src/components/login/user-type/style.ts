import styled from 'styled-components';

interface BtnProps {
  isActive: boolean;
}

export const UserTypeContainer = styled.div`
  background: #f4f9fb;
  border-radius: 23.5px;
  padding: 4px;
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
`;

export const Btn = styled.div<BtnProps>`
  background: ${({ isActive }) => (isActive ? 'white' : 'inherit')};
  color: ${({ isActive, theme: { blue } }) => (isActive ? blue : '#89A9BC')};
  border-radius: 25px;
  padding: 8px 38px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: 0.3s;
  flex: 1;
`;
