import styled from 'styled-components';

export const AddRefContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 430px;
  padding: 40px;
  background: white;
  z-index: 100;
  border-radius: 8px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  svg {
    width: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export const ChooseAll = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;
