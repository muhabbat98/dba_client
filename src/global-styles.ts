import styled from 'styled-components';

interface GridProps {
  grids: any[];
}

interface BGColorProps {
  bgColor?: boolean;
}

interface CursorProps {
  isCursor?: boolean;
}

export const TableHeader = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ grids }) => grids.join(' ')};
  grid-column-gap: 30px;
  align-items: center;
  padding: 14px 8px;
  background-color: #f7f8fc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const TableHeaderItem = styled.div`
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

export const TableBody = styled.div``;

export const TableBodyItemWrapper = styled.div<
  BGColorProps & CursorProps & GridProps
>`
  display: grid;
  grid-template-columns: ${({ grids }) => grids.join(' ')};
  grid-column: span 3;
  grid-column-gap: 30px;
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

export const TableBodyItem = styled.div`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 600;
  color: #565f75;
  line-height: 18px;

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
