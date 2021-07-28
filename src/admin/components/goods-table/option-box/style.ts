import styled from 'styled-components';

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

  &.active {
    background-color: ${({ theme }) => theme.primary_color};

    ${Dot} {
      background-color: #fff;

      &:after,
      &:before {
        background-color: #fff;
      }
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
