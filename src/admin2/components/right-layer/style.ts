import styled, { keyframes } from 'styled-components';

export const anim = keyframes`
  from{
      right: -400px;
  }to{
      right:0;
  }
`;

export const anim2 = keyframes`
  from{
      opacity: 0;
  }to{
    opacity: 1;
  }
`;

export const RightLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  width: 100%;
  height: 100vh;
`;

export const RightLayerContent = styled.div`
  background-color: white;
  height: 100%;
  animation: ${anim} 0.2s linear;
  z-index: 200;
  position: absolute;
  padding: 10px;
  overflow-y: auto;
  right: 0;
  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #808080;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Opacity = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 199;
  animation: ${anim2} 0.2s linear;
`;

export const CloseContainer = styled.div`
  position: absolute;
  z-index: 101;
  right: 15px;
  top: 15px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;
