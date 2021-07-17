import styled from 'styled-components';

export const AddProductFormContainer = styled.div``;

export const AddProductFormBreadcrumb = styled.div`
  background: #f4f6f9;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
`;

export const AddProductFormBreadcrumbItem = styled.div`
  color: #797979;
  font-weight: 500;
  font-size: 24px;
  position: relative;
  padding-right: 33px;

  & > svg {
    margin-left: 16px;
  }

  &.main {
    color: #000;
    font-weight: 600;
  }
`;

export const AddProductFormItem = styled.div``;

export const AddProductFormItemBody = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 16px;
`;

export const AddProductFormItemBodyItem = styled.div``;

export const Textarea = styled.textarea`
  padding: 24px;
  background: #f4f6f9;
  border-radius: 16px;
  width: 100%;
  border: none;
  outline: none;
`;

export const AddProductFormBottom = styled.div``;
