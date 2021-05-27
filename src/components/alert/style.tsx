import styled, { keyframes } from "styled-components";

interface Props {
   bgColor: 'success' | 'warning' | 'error';
   posi: {
      top?: "auto" | "default" | undefined;
      left?: "left" | "center" | "right" | "auto" | undefined;
      bottom?: "auto" | "default" | undefined;
      right?: "left" | "center" | "right" | "auto" | undefined;
   }
}

const p: any = {
   top: {
      top: 'auto',
      default: 'default'
   },
   left: {
      left: '260px',
      center: 'auto',
      right: '40px',
      auto: '50%'
   },
   bottom: {
      bottom: 'auto',
      default: 'default'
   },
   right: {
      right: '-180px',
      center: 'auto',
      auto: '50%',
      left: 'auto',
   }
}

const bgColors = {
   success: '#E4F6EF',
   warning: '#FAEFD0',
   error: '#FDE8E6'
}

const anim = keyframes`
  0%{
    opacity: .7;
    transform: scale(1) translate(-50%, -50%);
  }

  50% {
    opacity: 1;
    transform: scale(1.05) translate(-50%, -50%);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const AlertContainer = styled.div<Props>`
   box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
   border-radius: 16px;
   max-width: 450px;
   width: 450px;
   padding: 26px;
   padding-left: 72px;
   padding-right: 45px;
   background: ${({ bgColor }) => bgColors[bgColor]};
   position: fixed;
   z-index: 999;
   /* left: ${({ posi }) => p.left[posi.left!] == 'auto' ? '50%' : p.left[posi.left!]}; */
   left: ${({ posi }) => p.left[posi.left!]};
   top: ${({ posi }) => p.top[posi.top!] == 'default' ? '55px' : p.top[posi.top!]};
   /* right: ${({ posi }) => p.right[posi.right!] == 'auto' ? '50%' : p.right[posi.right!]}; */
   right: ${({ posi }) => p.right[posi.right!] };
   bottom: ${({ posi }) => p.bottom[posi.bottom!] == 'default' ? '25px' : p.bottom[posi.bottom!]};
   animation: ${anim} 0.2s linear 0s 1;
   transform: translate(-50%, -50%);
`;

export const AlertIcon = styled.div`
   position: absolute;
   top: 26px;
   left: 26px;
`;

export const AlertText = styled.div``;

export const AlertIconClose = styled.div`
   position: absolute;
   top: 26px;
   right: 17px;
   cursor: pointer;
`;