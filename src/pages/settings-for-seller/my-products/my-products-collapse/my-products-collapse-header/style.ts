import styled from 'styled-components';

export const MyProductsCollapseHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 3fr 3fr 1fr;
  grid-column-gap: 10px;
  align-items: center;
  padding: 15px 24px;
  padding-right: 0;
  border-bottom: 2px solid #e9ecf4;

  &:first-child {
    border-top: 2px solid #e9ecf4;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const MyProductsCollapseHeaderItem = styled.div`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  color: ${({ theme }) => theme.grey1};
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-item: center;

  &.opened {
    background-color: ${({ theme }) => theme.light_grey};
    padding: 6px;
    border-radius: 4px;

    > svg {
      fill: ${({ theme }) => theme.primary_color};
      transform: rotate(-180deg);
    }
  }
`;
