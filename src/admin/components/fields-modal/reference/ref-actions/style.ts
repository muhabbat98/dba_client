import styled from 'styled-components';

export const RefActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DeleteContainer = styled.div`
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 3px;
  background: #eb4c42;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid #eb4c42;
    background: white;
  }
  &:hover svg {
    fill: #eb4c42;
  }
  svg {
    transition: 0.25s;
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

export const EditContainer = styled.div`
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 3px;
  background: #50c878;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid #50c878;
    background: white;
  }
  &:hover svg {
    fill: #50c878;
  }
  svg {
    transition: 0.25s;
    width: 20px;
    height: 20px;
    fill: white;
  }
`;
