import styled from 'styled-components';

interface LoadingProps {
  isLoading?: boolean;
}

export const AddProductModalContainer = styled.div<LoadingProps>`
  max-width: 1210px;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding-bottom: 100px;

  height: ${({ isLoading }) => (isLoading ? '350px' : 'auto')};

  @media (max-width: 768px) {
    /* margin-left: 16px;
    margin-right: 16px; */
    width: 90%;
    left: 50%;
    height: 90%;
    overflow: hidden;
  }
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

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
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

export const AddProductModalTopRight = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 2px solid #e9ecf4;
    padding-bottom: 16px;

    & > button {
      width: 100%;
    }
  }
`;

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
  line-height: 32px;
  font-weight: 600;
  border-bottom: 2px solid #e9ecf4;
  padding: 24px 24px 8px;
  display: flex;
  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const AddProductBreadcrumbItem = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primary_color};
`;

export const AddProductModalMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 110px;
  padding: 24px 24px 0;

  @media (max-width: 768px) {
    column-gap: 0;
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 40px;
    padding-left: 0;
    padding-right: 0;
  }
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

export const AddProductModalMenuItem = styled.div`
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

export const AddProductScroll = styled.div`
  @media (max-width: 768px) {
    overflow-y: scroll;
    height: 75%;
  }
`;
