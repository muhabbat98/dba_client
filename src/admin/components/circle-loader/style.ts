import styled, { keyframes } from 'styled-components';

interface Props {
  classLoader?: string;
}

const opaque = keyframes`
    0% {
      opacity: 0.1;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.1;
    }
  `;

export const CircleLoaderContainerWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);

  /* ${(props) => props.classLoader}{
    width: 100px;
    height: 100px;
    border: none;
    position:absolute; 
    z-index: 999;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
  } */
`;

export const CircleLoaderContainer = styled.div`
  //border: 1px solid red;
  position: relative;
  width: auto;
  height: auto;
  & div {
    height: 10px;
    width: 10px;
    background-color: #318ce7;
    border-radius: 50%;
    position: absolute;
    animation: 0.8s ${opaque} ease-in-out infinite both;
  }

  & div:nth-child(1) {
    top: -25px;
    left: 0;
  }

  & div:nth-child(2) {
    top: -17px;
    left: 17px;
    animation-delay: 0.1s;
  }

  & div:nth-child(3) {
    top: 0;
    left: 25px;
    animation-delay: 0.2s;
  }

  & div:nth-child(4) {
    top: 17px;
    left: 17px;
    animation-delay: 0.3s;
  }

  & div:nth-child(5) {
    top: 25px;
    left: 0;
    animation-delay: 0.4s;
  }

  & div:nth-child(6) {
    top: 17px;
    left: -17px;
    animation-delay: 0.5s;
  }

  & div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  & div:nth-child(8) {
    top: -17px;
    left: -17px;
    animation-delay: 0.7s;
  }
`;
