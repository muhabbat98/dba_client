import styled from 'styled-components';

interface Opened {
  opened?: boolean;
}

export const MyProductsTableHeadMobileContainer = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const MyProductsTableHeadMobileHeader = styled.div`
  padding: 16px 16px 0 16px;
`;

export const MyProductsTableHeadMobileHeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MyProductsTableHeadMobileLeft = styled.div`
  color: ${({ theme }) => theme.grey1};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const MyProductsTableHeadMobileRight = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const CollapseBtn = styled.div<Opened>`
  color: ${({ theme }) => theme.primary_color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  & > svg {
    margin-left: 12px;
    transform: ${({ opened }) => (opened ? 'rotate(180deg)' : 'rotate(0deg)')};

    & > path {
      fill: ${({ theme }) => theme.primary_color} !important;
    }
  }
`;
