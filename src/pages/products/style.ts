import styled from "styled-components";

export const CategoryContainer = styled.div``;

export const ProductsFilterWrapper = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const FilterCollapseItem = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

// filter-collapse

export const CollapseContainer = styled.div`
  margin-bottom: 10px;
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
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;

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
  right: 20px;
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
