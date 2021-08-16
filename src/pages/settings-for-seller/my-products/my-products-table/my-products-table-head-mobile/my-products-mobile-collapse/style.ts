import styled from 'styled-components';

export const MyProductsMobileCollapseContainer = styled.div``;

export const ProductsImages = styled.div`
  margin-right: 16px;
`;

export const ProductsImage = styled.img``;

export const ProductsImageWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const MyProductsMobileDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  margin-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MyProductsMobileDetailsItem = styled.div`
  font-size: 14px;

  &:first-child {
    color: ${({ theme }) => theme.grey1};
    font-weight: 500;
  }

  &:last-child {
    color: #000;
    font-weight: 400;
    text-align: right;
  }
`;

export const MobileActivateButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 24px;
`;

export const MobileActivateButton = styled.button`
  background-color: #fefeff;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary_color};
  font-size: 14px;
  line-height: 23px;
  font-weight: 600;
  padding: 8px 14px;
  margin-bottom: 18px;
`;
