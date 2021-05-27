import styled, { keyframes } from 'styled-components';

const barprogress = keyframes`
 0% {
        background-position: 0% 0
    }
    to {
        background-position: 125% 0
    }
`;

const fadein = keyframes`
 0% {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const LineLoaderContainer = styled.div`
  left: 0;
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 12;
  height: 4px;
  background: #27c4f5
    linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background-size: 500%;
  animation: 2s linear infinite ${barprogress}, 0.3s ${fadein};
  width: 100%;
`;
