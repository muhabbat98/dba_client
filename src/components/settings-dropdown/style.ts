import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}
interface Prop {
  state: boolean;
}
interface Color {
  state: boolean;
}
interface AdminPage {
  isFromAdmin?: boolean;
}
export const DropDownContainer = styled.div<Props>`
  border: ${({ isOpen }) =>
    isOpen ? '1px solid #264796' : '1px solid #E9ECF4'};
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  &:focus {
    border: 1px solid #264796;
    color: #000000;
  }
`;
export const DropDownInput = styled.div<Color & AdminPage>`
  display: flex;
  justify-content: space-between;
  padding: ${({ isFromAdmin }) => (isFromAdmin ? '15px 16px' : '14px 16px')};

  align-items: center;
  color: ${({ state }) => (state ? '#000000' : '#BDBDBD')};

  p {
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: ${({ isFromAdmin }) => (isFromAdmin ? '14px' : '16px')};
    color: ${({ isFromAdmin }) => (isFromAdmin ? '#B8C3DE' : 'inherit')};
  }
  svg {
    width: 15px;
    height: 15px;
    fill: #bdbdbd;
    margin-left: 14px;
  }
`;
export const DropDownList = styled.div<Props>`
  width: 100%;
  position: absolute;
  z-index: 99;
  list-style: none;
  margin: 10px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
    0 15px 40px rgb(166 173 201 / 20%);
  border-radius: 8px;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0.7)')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease;
  overflow: hidden;
`;
export const ListOption = styled.div<Prop>`
  height: 48px;
  padding: 12px 16px;
  color: ${({ state }) => (state ? '#264796' : '#000000')};
  cursor: pointer;
  background-color: ${({ state }) => (state ? '#F4F6F9' : '#fff')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    color: #264796;
    background-color: #f4f6f9;
  }
`;
