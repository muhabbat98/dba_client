import styled from 'styled-components';

export const CategoryContainer = styled.div``;

export const ProductsFilterWrapper = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const FilterCollapseItem = styled.div``;

// filter-collapse

export const CollapseContainer = styled.div`
  /* margin-bottom: 10px; */
  border-bottom: 1px solid #e9ecf4;
`;

export const CollapseContent = styled.div`
  overflow: hidden;
  max-height: 100%;
  background-color: #fff;
  transition: max-height 0.3s ease;
  color: #000;
`;

export const CollapseHeader = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: 15px 24px;
  /* background-color: #fff; */
  border-radius: 10px;
  padding-right: 50px;
  line-height: 24px;

  &.active + ${CollapseContent} {
    transition: max-height 0.3s ease;
  }
`;

export const CollapseHeaderIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  right: 27px;
  transition: all 0.3s ease;

  &.svg {
    transform: rotate(0deg);
    transition: all 0.3s ease;
  }

  &.active_icon {
    svg {
      transform: rotate(180deg);
      transition: all 0.3s ease;
    }
  }
`;

export const FilterUl = styled.ul`
  max-height: 244px;
  overflow-y: auto;
  padding-left: 24px;
  margin-right: 24px;
  margin-top: 24px;

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e9ecf4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FilterLi = styled.li`
  margin-bottom: 12px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.grey3};
  border-radius: 8px;
  height: 36px;
  padding-left: 12px;
  outline: none;
  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary_color};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #e9ecf4;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #e9ecf4;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #e9ecf4;
  }
`;

export const FilterInputContainer = styled.div`
  position: relative;
  margin-left: 24px;
  margin-right: 24px;
  /* margin-bottom: 10px; */

  & > svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;

export const PriceInputFilter = styled.input`
  border: 1px solid #e9ecf4;
  border-radius: 8px;
  height: 36px;
  width: 100%;
  outline: none;
  margin-bottom: 16px;
  margin-left: 24px;
  margin-right: 24px;
  padding-left: 12px;
  padding-right: 12px;
  width: calc(100% - 48px);

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary_color};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bdbdbd;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bdbdbd;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bdbdbd;
  }
`;

export const ClearFilterBtn = styled.button`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #797979;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterBtn = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileFilterWrapper = styled.div`
  width: 268px;
  position: fixed;
  top: 0;
  z-index: 999;
  right: 0;
  height: 100%;
  background-color: #fff;
`;

export const FilterClose = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: -32px;
  width: 32px;
  height: 32px;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterName = styled.div`
  padding: 16px;
  padding-bottom: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;
