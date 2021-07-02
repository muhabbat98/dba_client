import styled from 'styled-components';

interface RefPops {
  isActive: boolean;
  isEdit?: boolean;
}

interface TogglePops {
  isToggle: boolean;
}

export const RefContainer = styled.div``;

export const Refer = styled.h3<RefPops>`
  margin: 5px 0;
  border: 1px solid #282c34;
  display: grid;
  grid-template-columns: ${({ isEdit }) =>
    !isEdit ? '40px 1fr 140px' : '40px 1fr 140px'};
  align-items: center;
`;

export const Num = styled.div`
  border: 1px solid #282c34;
  padding: 10px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

export const RefName = styled.div<RefPops>`
  padding: 11px;
  cursor: pointer;
  transition: 0.3s;
  /* background: ${({ isActive }) => (isActive ? '#C5C5C5' : 'transparent')};
  &:hover {
    background-color: #c5c5c5;
  } */
`;

export const ToggleContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;
export const ToggleWrapper = styled.div<TogglePops>`
  transition: 0.3s;
  position: absolute;
  top: ${({ isToggle }) => (isToggle ? '-100%' : '0px')};
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const ToggleForm = styled.div``;

export const Form = styled.form``;

export const Input = styled.input`
  width: 95%;
  height: 35px;
  margin-top: 4px;
  margin-left: 6px;
  border: 1px solid black;
  padding-left: 5px;
  padding-right: 15px;
  outline: none;
`;

export const Buttons = styled.div<{ isEdit: boolean }>`
  display: flex;
  margin-right: 5px;
  justify-content: space-between;
  transition: 0.3s;
  transform: ${({ isEdit }) => (isEdit ? 'scale(0.9)' : 'scale(1)')};
`;

export const Cancel = styled.div`
  background: #eb4c42;
  padding: 10px 10px;
  color: white;
  font-size: 14px;
  margin-right: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #af3a31;
  }
`;

export const OK = styled.div`
  background: #50c878;
  padding: 10px 10px;
  color: white;
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #398e55;
  }
`;
