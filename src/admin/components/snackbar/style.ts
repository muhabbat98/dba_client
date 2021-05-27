import styled, { keyframes } from 'styled-components';

interface Props {
  bgColor: 'success' | 'info' | 'warning' | 'error';
}

const borderRadiusAnimation = keyframes`
  from {
    border-radius: 15px;
    opacity: .7;
    left: 50%;
    transform: scale(.99) translate(-50%, 4px);
  }

  to {
    border-radius: 4px;
    opacity: 1;
    left: 50%;
    transform: scale(1) translate(-50%, 0px);
  }
`;

const bg = {
  success: '#4caf50',
  info: '#2196f3',
  warning: '#ff9800',
  error: '#f44336',
};

export const SnackbarContainer = styled.div<Props>`
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 25px;
  transform: translate(-50%, 0px);
  width: 300px;
  background-color: ${({ bgColor }) => bgColor && bg[bgColor]};
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 6px 16px;
  opacity: 1;
  animation: ${borderRadiusAnimation} 0.2s linear 0s 1;
  z-index: 1000;
`;

export const SnackbarIcon = styled.div`
  margin-right: 12px;
  padding-top: 4px;
`;

export const SnackbarMessage = styled.div`
  color: #fff;
  word-break: break-word;
`;
