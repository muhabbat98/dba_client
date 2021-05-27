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
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmWrapper = styled.div<{ isClose: boolean }>`
  width: 400px;
  padding: 30px;
  background: #e9e9e9;
  border-radius: 5px;
  padding-bottom: 15px;
  animation: ${anim} 0.3s;
  transition: 0.5s;
  transform: ${({ isClose }) => (isClose ? 'scale(0.5)' : 'scale(1)')};
`;

export const ConfirmContent = styled.div`
  border-top: 1px solid #9d9d9d;
  border-bottom: 1px solid #9d9d9d;
  padding: 10px 0;
`;

export const Message = styled.div`
  line-height: 24px;
`;

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const Yes = styled.div`
  background: #66bb6a;
  padding: 12px 25px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #4d8e50;
    color: white;
  }
`;

export const No = styled.div`
  color: #eb4c42;
  padding: 12px 25px;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: #eb4c42;
    color: white;
  }
`;
