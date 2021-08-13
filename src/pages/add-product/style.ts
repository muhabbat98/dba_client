import styled from 'styled-components';

export const AddProductContainer = styled.div``;

export const AddProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
    row-gap: 0;
  }
`;

export const AddProductItem = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
    border-bottom: 2px solid #f2f2f2;
    background-color: #fff;
    border-radius: 0;
    padding: 15px 38px;
  }

  & > svg {
    margin-right: 16px;
  }
`;

export const ItemText = styled.div`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
