import styled from 'styled-components';

interface Props {
  isActiveStatus: boolean;
}

export const GoodsTableContainer = styled.div``;

export const GoodsTableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  align-items: center;
`;

export const GoodsTableHeaderItem = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
`;

export const GoodsTableBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  align-items: center;
`;

export const GoodsTableBodyItem = styled.div`
  flex-grow: 1;
`;

export const StatusBox = styled.div<Props>`
  background-color: ${({ isActiveStatus }) =>
    isActiveStatus ? '#EBF9EB' : '#FDEBEB'};
  width: fit-content;
  color: ${({ isActiveStatus }) => (isActiveStatus ? '#3CC13B' : '#F03738')};
  border: 1px solid
    ${({ isActiveStatus }) => (isActiveStatus ? '#9DE09D' : '#F89B9B')};
  line-height: 16px;
  padding: 4px 8px;
  border-radius: 5px;
`;

export const OptionBox = styled.div``;

export const OptionBoxButton = styled.div``;

export const OptionBoxListWrapper = styled.div``;

export const OptionBoxList = styled.div``;
