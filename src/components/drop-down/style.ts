import styled from "styled-components";

interface selectedColor {
  isSelected?: boolean;
}

export const DropdownOverlay = styled.div`
  position: fixed;
  background: transparent;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const DropdownContainer = styled.div`
  /* max-width: 300px; */
  width: 100%;
  position: relative;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;
  padding: 24px;
  border-radius: 16px;
  height: 66px;
  /* box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
    0 15px 40px rgb(166 173 201 / 20%); */
  border-radius: 10px;
  background-color: #f4f6f9;

  position: relative;
  z-index: 9;

  & svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const DropdownLabel = styled.span`
  margin-top: -10px;
  display: block;
  color: ${({ theme }) => theme.blue};
`;

export const DropdownHeaderTitle = styled.div`
  margin-top: 2px;
`;

export const DropdownOptionList = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 999;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  /* box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
    0 15px 40px rgb(166 173 201 / 20%);
  border-radius: 10px; */

  background: #ffffff;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.08),
    0px 3px 6px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  transform: translateY(10px) scale(0.99);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;

  &.active {
    transform: translateY(0px) scale(1);
    visibility: visible;
    opacity: 1;
  }
`;

export const DropdownOption = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.3s ease;

  &:hover,
  &.selected {
    background-color: #f4f6f9;
    color: ${({ theme }) => theme.primary_color};
  }
`;
