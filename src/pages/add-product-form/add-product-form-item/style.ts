import styled from 'styled-components';

export const AddProductFormItemBody = styled.div``;

export const AddProductFormItemBodyItem = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
    border: none;
  }
`;
