import styled from 'styled-components';

interface Props {
  isActiveStatus: boolean;
}

interface BGColorProps {
  bgColor?: boolean;
}

interface CursorProps {
  isCursor?: boolean;
}

interface ColumnCountProps {
  columnCount: number;
}

interface GridProps {
  grids: any[];
}

export const GoodsTableContainer = styled.div``;

export const GoodsTableHeader = styled.div<GridProps>`
  display: grid;
  /* grid-template-columns: 1fr 3fr 3fr 3fr 3fr; */
  grid-template-columns: ${({ grids }) => grids.join(' ')};
  grid-column-gap: 10px;
  align-items: center;
  padding: 14px 8px;
  background-color: #f7f8fc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const GoodsTableHeaderItem = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
  line-height: 21px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:first-child {
    cursor: default;
  }

  & > svg {
    margin-left: 8px;
  }
`;

export const GoodsTableBody = styled.div``;

export const GoodsTableBodyItemWrapper = styled.div<
  BGColorProps & CursorProps & ColumnCountProps & GridProps
>`
  display: grid;
  grid-template-columns: ${({ grids }) => grids.join(' ')};
  grid-column: span 3;
  grid-column-gap: 10px;
  align-items: center;
  padding: 10px 8px;
  border-bottom: 1px solid #dfe0eb;

  cursor: ${({ isCursor }) => (isCursor ? 'pointer' : 'auto')};

  background-color: ${({ bgColor }) => (bgColor ? '#F7F8FC' : '#fff')};
  transition: all 0.25s ease;

  &:first-child {
    border-top: 1px solid #dfe0eb;
  }

  &:hover {
    background-color: #f7f8fc;
  }
`;

export const Order = styled.span``;

export const GoodsTableBodyItem = styled.div`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 600;
  color: #565f75;
  line-height: 18px;

  & > ${Order} {
    margin-right: 16px;
  }

  &:first-child {
    display: flex;
    align-items: center;
  }

  &:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StatusBox = styled.div<Props>`
  background-color: ${({ isActiveStatus }) =>
    isActiveStatus ? '#EBF9EB' : '#FDEBEB'};
  width: fit-content;
  color: ${({ isActiveStatus }) => (isActiveStatus ? '#3CC13B' : '#F03738')};
  border: 1px solid
    ${({ isActiveStatus }) => (isActiveStatus ? '#9DE09D' : '#F89B9B')};
  line-height: 16px;
  padding: 3px 8px;
  border-radius: 5px;
  height: 24px;
`;
