import styled, { keyframes } from 'styled-components';

export const LContainer = styled.div`
  //position: relative;
  width: 100%;
  height: 83.55vh;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const StepLoaderContainer = styled.div`
  position: relative;
  width: 75px;
  height: 100px;
`;

const ball = keyframes`
    0% {
        transform: translate(0, 0);
   }
    5% {
        transform: translate(8px, -14px);
   }
    10% {
        transform: translate(15px, -10px);
   }
    17% {
        transform: translate(23px, -24px);
   }
    20% {
        transform: translate(30px, -20px);
   }
    27% {
        transform: translate(38px, -34px);
   }
    30% {
        transform: translate(45px, -30px);
   }
    37% {
        transform: translate(53px, -44px);
   }
    40% {
        transform: translate(60px, -40px);
   }
    50% {
        transform: translate(60px, 0);
   }
    57% {
        transform: translate(53px, -14px);
   }
    60% {
        transform: translate(45px, -10px);
   }
    67% {
        transform: translate(37px, -24px);
   }
    70% {
        transform: translate(30px, -20px);
   }
    77% {
        transform: translate(22px, -34px);
   }
    80% {
        transform: translate(15px, -30px);
   }
    87% {
        transform: translate(7px, -44px);
   }
    90% {
        transform: translate(0, -40px);
   }
    100% {
        transform: translate(0, 0);
   }
`;
const barUp1 = keyframes`
    0% {
        transform: scale(1, 0.2);
   }
    40% {
        transform: scale(1, 0.2);
   }
    50% {
        transform: scale(1, 1);
   }
    90% {
        transform: scale(1, 1);
   }
    100% {
        transform: scale(1, 0.2);
   }
}`;
const barUp2 = keyframes`
    0% {
        transform: scale(1, 0.4);
   }
    40% {
        transform: scale(1, 0.4);
   }
    50% {
        transform: scale(1, 0.8);
   }
    90% {
        transform: scale(1, 0.8);
   }
    100% {
        transform: scale(1, 0.4);
   }
`;
const barUp3 = keyframes`
    0% {
        transform: scale(1, 0.6);
   }
    100% {
        transform: scale(1, 0.6);
   }
`;
const barUp4 = keyframes`
    0% {
        transform: scale(1, 0.8);
   }
    40% {
        transform: scale(1, 0.8);
   }
    50% {
        transform: scale(1, 0.4);
   }
    90% {
        transform: scale(1, 0.4);
   }
    100% {
        transform: scale(1, 0.8);
   }
`;
const barUp5 = keyframes`
    0% {
        transform: scale(1, 1);
   }
    40% {
        transform: scale(1, 1);
   }
    50% {
        transform: scale(1, 0.2);
   }
    90% {
        transform: scale(1, 0.2);
   }
    100% {
        transform: scale(1, 1);
   }
`;

export const StepLoader_Bar = styled.div`
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 50%;
  background: #394aab;
  transform-origin: center bottom;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  &:nth-child(1) {
    left: 0px;
    transform: scale(1, 0.2);
    animation: ${barUp1} 4s infinite;
  }
  &:nth-child(2) {
    left: 15px;
    transform: scale(1, 0.4);
    animation: ${barUp2} 4s infinite;
  }
  &:nth-child(3) {
    left: 30px;
    transform: scale(1, 0.6);
    animation: ${barUp3} 4s infinite;
  }
  &:nth-child(4) {
    left: 45px;
    transform: scale(1, 0.8);
    animation: ${barUp4} 4s infinite;
  }
  &:nth-child(5) {
    left: 60px;
    transform: scale(1, 1);
    animation: ${barUp5} 4s infinite;
  }
`;

export const StepLoader_Ball = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 10px;
  height: 10px;
  background: #394aab;
  border-radius: 50%;
  animation: ${ball} 4s infinite;
`;

export const Error = styled.div`
  color: #d72828;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 200px;
    height: 200px;
  }
`;
