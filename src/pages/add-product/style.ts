import styled from 'styled-components';

export const AddProductContainer = styled.div``;

export const AddProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

export const AddProductItem = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    margin-right: 16px;
  }
`;

export const ItemText = styled.div`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
`;
