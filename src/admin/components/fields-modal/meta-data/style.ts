import styled from 'styled-components';

export const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 20px;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
    border-radius: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 7px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 7px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Fields = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 5px;
  align-self: flex-start;
`;

export const Products = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 5px;
  align-self: flex-start;
`;

export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FieldTitle = styled.div`
  display: flex;
`;

export const Num = styled.div`
  margin-right: 3px;
`;

export const Title = styled.div``;

export const FTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const Reference = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 5px;
  align-self: flex-start;
`;
