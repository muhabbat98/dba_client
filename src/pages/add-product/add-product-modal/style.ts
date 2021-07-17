import styled from 'styled-components';

interface LoadingProps {
  isLoading?: boolean;
}

export const AddProductModalContainer = styled.div<LoadingProps>`
  max-width: 1210px;
  width: 1210px;
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  z-index: 100;
  padding-bottom: 100px;

  height: ${({ isLoading }) => (isLoading ? '350px' : 'auto')};
`;

export const BackButton = styled.div`
  position: absolute;
  top: 28px;
  left: 28px;
  cursor: pointer;
`;

export const CloseButton = styled(BackButton)`
  left: initial;
  right: 28px;
`;

export const AddProductModalTop = styled.div`
  margin-top: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
`;

export const AddProductModalTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const AddProductModalTopRight = styled.div``;

export const ProductIcon = styled.div`
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  border-radius: 100%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

export const ProductTitle = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
`;

export const AddProductBreadcrumb = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primary_color};
  line-height: 32px;
  font-weight: 600;
  border-bottom: 2px solid #e9ecf4;
  padding: 24px 24px 8px;
`;

export const AddProductModalMenu = styled.div`
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
`;

export const ProductName = styled.div`
  color: #464e5f;
  font-weight: 600;
  transition: all 0.25s ease;
`;

export const AddProductModalMenuItem = styled.div`
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
