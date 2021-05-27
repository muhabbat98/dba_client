import styled, { keyframes } from 'styled-components';

const anim = keyframes`
    from{
        transform:scale(0.8);
    }to{
        transform:scale(1);
    }
`;

export const ModalContainer = styled.div<{ center: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 998;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  justify-content: center;
`;

export const ModalContent = styled.div`
  animation: ${anim} 0.2s linear;
  background-color: white;
  border-radius: 7px;
  margin: 20px;
  padding: 20px;
  max-width: 90vw;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  z-index: 1001;
  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
    border-radius: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 7px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 7px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }
`;
