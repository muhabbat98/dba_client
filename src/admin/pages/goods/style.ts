import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const GoodsContainer = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background-color: #fff;
  padding: 24px;
`;

export const GoodsTopControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const GoodsTopControlBreadcrumb = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: Manrope;
`;

export const GoodsTopControlRight = styled.div`
  display: flex;
  align-items: center;
`;

export const GoodsIconButtons = styled.div`
  display: flex;
`;

export const GoodsIconButton = styled.div`
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 17px;
    margin-right: 17px;
  }
`;

export const DisplayTypeBox = styled.div`
  display: flex;
`;

export const DisplayTable = styled.div`
  cursor: pointer;

  width: 20px;
  height: 20px;
  background-color: red;
`;

export const DisplayGrid = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: ${({ theme }) => theme.primary_color};

    & > svg {
      & > rect {
        fill: ${({ theme }) => theme.primary_color};
        stroke: #fff;
      }
    }
  }
`;

export const GoodsDisplayContainer = styled.div``;

export const FilterBtn = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background-color: #f7f8fc;
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid
    ${({ isOpen, theme }) => (isOpen ? theme.primary_color : 'transparent')};
  & > svg {
    margin-right: 12px;
  }
`;

export const GoodsFilterBox = styled.div`
  display: flex;
`;

export const GoodsFilterBoxItem = styled.div``;

export const FilterInput = styled.input`
  background-color: #f7f8fc;
  color: ${({ theme }) => theme.primary_color};
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #f7f8fc;
  outline: none;

  &::placeholder {
    color: #b8c3de;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary_color};
  }
`;
