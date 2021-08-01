import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   100% {
   -webkit-transform: rotate(360deg);
   transform: rotate(360deg);
   }
`;

const dash = keyframes`
0% {
  stroke-dasharray: 1, 150;
  stroke-dashoffset: 0;
}
50% {
  stroke-dasharray: 90, 150;
  stroke-dashoffset: -35;
}
100% {
  stroke-dasharray: 90, 150;
  stroke-dashoffset: -124;
}

`;

export const Spinner = styled.svg`
  -webkit-animation: ${rotate} 2s linear infinite;
  animation: ${rotate} 2s linear infinite;
  width: 44px;
  height: 44px;

  & > circle {
    stroke: ${({ theme }) => theme.primary_color};
    stroke-linecap: round;
    -webkit-animation: ${dash} 1.5s ease-in-out infinite;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
`;
