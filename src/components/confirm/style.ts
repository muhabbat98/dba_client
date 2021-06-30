import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  0%{
    transform: scale(0.5);
    opacity:0
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
    opacity:1
  }
`;

export const ConfirmContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const ConfirmContent = styled.div<{ isClose: boolean }>`
  width: 430px;
  border-radius: 16px;
  background: white;
  padding: 40px;
  position: relative;
  animation: ${anim} 0.3s;
  transition: 0.5s;
  transform: ${({ isClose }) => (isClose ? 'scale(0.5)' : 'scale(1)')};
  svg {
    position: absolute;
    top: 28.5px;
    right: 28.5px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin: 32px;
`;

export const Div = styled.div`
  margin-top: 16px;
`;
