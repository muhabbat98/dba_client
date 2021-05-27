import styled from 'styled-components';

export const AgainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AgainTitle = styled.div`
  color: ${({ theme: { primary_color } }) => primary_color};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 8px;
  }
`;

export const Time = styled.div`
  color: ${({ theme: { green } }) => green};
  margin-left: 8px;
`;

export const Button = styled.div<{ finish: boolean }>`
  padding: 16px;
  user-select: none;
  transition: 0.3s;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  cursor: ${({ finish }) => (finish ? 'pointer' : 'not-allowed')};
  background: ${({ finish }) => (finish ? 'white' : '#f0efef8a')};
  &:hover {
    border: 2px solid
      ${({ finish, theme: { primary_color } }) =>
        finish ? primary_color : ' #e9ecf4'};
  }
  &:active {
    background: ${({ finish }) => (!finish ? 'white' : '#E9ECF4')};
  }
`;
