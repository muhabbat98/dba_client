import styled, { keyframes } from 'styled-components';

interface Props {
  open: boolean;
}

const anim = keyframes`
0%{
    opacity:0.5;
    transform:scale(0.7)
}100%{
    opacity:1;
    transform:scale(1)
}
`;

export const SettingsContainer = styled.div<Props>`
  position: absolute;
  width: 257px;
  background: #ffffff;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.08),
    0px 3px 6px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 16px 0;
  z-index: 4;
  top: 120%;
  right: 0;
  animation: ${anim} 0.2s;
`;

export const Menu = styled.div``;

export const Title = styled.div`
  margin-left: 16px;
  :first-child {
    margin-left: 0px;
  }
`;

export const Title1 = styled.div`
  margin-left: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 26px;
  transition: 0.3s;
  :hover {
    background: #f4f6f9;
  }
`;
