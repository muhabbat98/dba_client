import styled from 'styled-components';

export const MyProductsTableContainer = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const MyProductsTableTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 20px;
  border-bottom: 2px solid #e9ecf4;
`;

export const MyProductsFilterBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  & > svg {
    margin-right: 12px;
  }
`;

export const MyProductsAddBtn = styled(MyProductsFilterBtn)`
  margin-right: 30px;
`;

export const FilterText = styled.span`
  color: ${({ theme }) => theme.primary_color};
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const MyProductsHead = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 3fr 3fr 1fr;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-column-gap: 10px;
  align-items: center;

  padding: 32px 0px 32px 22px;
`;

export const MyProductsHeadItem = styled.div`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.grey1};
`;

export const MyProductsFilterSection = styled.div`
  display: flex;
  margin: 24px 20px 15px 0px;

  & > input,
  & > div {
    margin-left: 20px;
    width: 100%;
  }
`;
