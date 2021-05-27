import styled from 'styled-components';

export const ModeratorsContainer = styled.div``;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ModeratorsList = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

export const ModeratorsItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  display: grid;
  grid-template-columns: 30px 150px 150px 1fr 300px;
  align-items: center;
  justify-content: center;
  &:last-child {
    border-bottom: none;
  }
`;

export const No = styled.div`
  padding: 10px;
`;
export const Name = styled.div`
  padding: 10px;
`;
export const Surname = styled.div`
  padding: 10px;
`;
export const Login = styled.div`
  padding: 10px;
`;
export const Actions = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DeleteContainer = styled.div`
  border: 1px solid #eb4c42;
  padding: 5px;
  background: #eb4c42;
  border-radius: 3px;
  margin-right: 10px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: white;
    svg {
      fill: #eb4c42;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    fill: white;
    display: block;
  }
`;
