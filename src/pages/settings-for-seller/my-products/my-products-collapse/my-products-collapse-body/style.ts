import styled from 'styled-components';

export const MyProductsCollapseBodyContainer = styled.div`
  padding: 17px 38px 24px 38px;
`;

export const MyProductsCollapseBody = styled.div``;

export const MyProductsCollapseTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 12px;
`;

export const MyProductsCollapseImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const MyProductsCollapseImgItem = styled.div`
  margin-right: 16px;
`;

export const MyProductsDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MyProductsDetailsItem = styled.div`
  font-size: 14px;

  &:first-child {
    color: ${({ theme }) => theme.grey1};
    font-weight: 500;
  }

  &:last-child {
    color: #000;
    font-weight: 400;
  }
`;

export const ActivateButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const RedactirovatBtn = styled.button`
  background-color: #fefeff;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.primary_color};
  font-size: 17px;
  line-height: 23px;
  font-weight: 600;
  padding: 14px 56px;
`;

export const DedactirovatBtn = styled(RedactirovatBtn)``;
