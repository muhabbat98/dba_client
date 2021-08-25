import styled from 'styled-components';

interface IsLoading {
  isLoading: boolean;
}

export const AddProductPageContainer = styled.div<IsLoading>`
  position: relative;
  height: ${({ isLoading }) => (isLoading ? '450px' : 'auto')};
`;

export const AddProductPageList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 110px;
  padding: 24px 24px 0;
`;

export const ProductOrder = styled.div`
  min-width: 32px;
  min-height: 32px;
  max-width: 32px;
  max-height: 32px;
  color: #000;
  background-color: #f7f8fc;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 24px;
  transition: all 0.25s ease;

  @media (max-width: 768px) {
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
    font-size: 12px;
    margin-right: 8px;
  }
`;

export const ProductName = styled.div`
  color: #464e5f;
  font-weight: 600;
  transition: all 0.25s ease;

  @media (max-width: 768px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
  }
`;

export const AddProductPageListItem = styled.div`
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    background: #f4f6f9;

    ${ProductOrder} {
      background-color: #fff;
      color: ${({ theme }) => theme.primary_color};
    }

    ${ProductName} {
      color: ${({ theme }) => theme.primary_color};
    }
  }
`;
