import styled from 'styled-components';

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

export const SearchInputBox = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  position: relative;

  & > svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  background-color: #f7f8fc;
  padding: 10px 14px 10px 36px;
  height: 36px;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 12px;
  font-weight: 500;

  &::placeholder {
    color: rgba(38, 71, 150, 0.3);
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
