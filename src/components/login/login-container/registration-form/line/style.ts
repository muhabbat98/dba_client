import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0%{
    width:0%;
}100%{
    width:50%;
}

`;

export const LineContainer = styled.div`
  margin: 24px 0 32px 0;
`;

export const LineWrapper = styled.div`
  background: #eaedf5;
  border-radius: 16px;
  height: 8px;
  position: relative;
  overflow: hidden;
`;

export const InnerLine = styled.div<{ isSms: boolean }>`
  background: #264796;
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
  height: 8px;
  transition: 0.5s;
  width: ${({ isSms }) => (isSms ? '100%' : '50%')};
  animation: ${anim} 1s;
`;
