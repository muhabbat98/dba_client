import styled from 'styled-components';

export const TypeFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  margin: 5px 0;
  border-bottom: 1px solid #dedede;
  border-top: 1px solid #dedede;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 10px;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
`;

export const PlusButton = styled.div`
  background-color: #047804;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 30px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #047804;
  }
`;

export const Num = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
