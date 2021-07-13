import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const DotsContainer = styled.div<Props>`
  background: ${({ open }) => (open ? '#264796' : '#f7f8fc')};
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  :hover {
    background: ${({ open }) => (open ? '#264796' : '#e1e2e6')};
  }
`;

export const Dot = styled.div<Props>`
  background: ${({ open }) => (open ? 'white' : '#9e9ea7')};
  height: 4px;
  width: 4px;
  border-radius: 50%;
  margin-right: 1.5px;
  transition: 0.3s;
  //background: red;
`;
