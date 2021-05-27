import styled, { keyframes } from 'styled-components';

export const MenuContainer = styled.div`
  //background-color: #4b5362;
  //display: inline-block;
  //border: 1px solid #c9cccd;
  height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #808080;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const MContainer = styled.div`
  //background-color: #4b5362;
  //display: inline-block;
  border: 1px solid #c9cccd;
  /* height: 700px;
  overflow-y: auto; */
  //padding-bottom: 40px;
  position: relative;
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  //color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #c9cccd;
  background-color: ${({ isActive }) => (isActive ? '#394aab' : 'white')};
  color: ${({ isActive }) => (isActive ? '#f2f6f7' : 'block')};
  transition: 0.3s;

  &:hover {
    background: #394aab;
    color: #f2f6f7;
  }
`;

export const Arrow = styled.div<{ isRight: boolean; isActive: boolean }>`
  border: ${({ isActive }) => (!isActive ? 'solid black' : 'solid #f2f6f7')};
  border-width: 0 3px 3px 0;
  display: inline-block;
  margin-right: ${({ isActive }) => (!isActive ? '5px' : '2px')};
  margin-left: 20px;
  padding: 3px;
  transform: ${({ isRight }) =>
    isRight ? 'rotate(135deg)' : 'rotate(-45deg)'};

  ${MenuItem}:hover & {
    border: solid white;
    border-width: 0 3px 3px 0;
  }
`;

export const AddButton = styled.div`
  background-color: #047804;
  padding: 15px;
  font-size: 16px;
  color: #f2f6f7;
  /* position: absolute;
  bottom: -80px;
  left: 0; */
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #035903;
    color: white;
  }
`;

export const CatName = styled.div`
  background-color: #808080;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

export const EmptyContainer = styled.div`
  font-size: 14px;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #808080;

  svg {
    margin-top: 10px;
    width: 50px;
    height: 50px;
    fill: #808080;
  }
`;

export const anim = keyframes`
from{
  transform:rotate(0deg);
}to{
  transform:rotate(360deg);
}
`;

export const SettignsLogo = styled.div`
  margin-left: 10px;
  cursor: pointer;
  &:hover svg {
    animation: ${anim} 3s linear infinite;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;
