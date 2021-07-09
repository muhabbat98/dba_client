import styled from 'styled-components';

interface Props {
  isActiveStatus: boolean;
}

interface BGColorProps {
  bgColor: boolean;
}

export const GoodsTableContainer = styled.div``;

export const GoodsTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-column-gap: 10px;
  align-items: center;
  padding: 8px 0;
`;

export const GoodsTableHeaderItem = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
  line-height: 21px;
`;

export const GoodsTableBody = styled.div``;

export const GoodsTableBodyItemWrapper = styled.div<BGColorProps>`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-column-gap: 10px;
  align-items: center;
  padding: 10px 8px;
  border-bottom: 1px solid #dfe0eb;

  background-color: ${({ bgColor }) => (bgColor ? '#F7F8FC' : '#fff')};

  &:first-child {
    border-top: 1px solid #dfe0eb;
  }
`;

export const GoodsTableBodyItem = styled.div`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 600;
  color: #565f75;
  line-height: 18px;

  & > span {
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

export const OptionBoxContainer = styled.div`
  position: relative;
`;

export const Dot = styled.div``;

export const OptionBoxButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #f7f8fc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > ${Dot} {
    position: relative;
    width: 4px;
    height: 4px;
    background-color: #9e9ea7;
    border-radius: 100%;

    &::after {
      content: '';
      position: absolute;
      left: -5px;
      width: 4px;
      height: 4px;
      background-color: #9e9ea7;
      border-radius: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      left: 5px;
      width: 4px;
      height: 4px;
      background-color: #9e9ea7;
      border-radius: 100%;
    }
  }
`;

export const OptionBoxListWrapper = styled.div`
  position: absolute;
  right: 0;
  right: 104%;
  top: 0;
  z-index: 2;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.07);
  width: fit-content;
  background-color: #fff;
  border-radius: 12px;
`;

export const OptionBoxList = styled.div`
  padding: 11px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f8ff;
  }

  & > svg {
    margin-right: 8px;
  }
`;

export const Permission = styled.span`
  color: #22b573;
`;

export const Reject = styled.span`
  color: #f03738;
`;
