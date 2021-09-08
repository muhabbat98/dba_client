import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top:0px;
  left:0px;
  z-index: 999;
  user-select: none;
  img{
    min-width: 400px;
    max-width: 1200px;
    max-height: 800px;
  }
`;
export const Counter = styled.span`
  position: absolute;
  top:15px;
  left:25px;
  color: #cccccc;
  font-size: 20px;
`;
export const Xbutton = styled.div`
  position: absolute;
  right: 25px;
  top:25px;
  cursor: pointer;
  svg{
    fill: #fff ;
    width: 20px;
    height: 20px;
  }
`;
export const LeftArrow = styled.div`

  width: 70px;
  height: 80vh;
  position: absolute;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,0.2);
    transition: 0.5s;
  }

  svg {
    fill: #f1f1f1;
    width: 25px;
    height: 25px;
    transform: rotate(90deg);
  }
`;
export const RightArrow = styled.div`
  //background: #282c34;
  width: 70px;
  height: 80vh;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,0.2);
    transition: 0.5s;
  }

  svg {
    fill: #f1f1f1;
    width: 25px;
    height: 25px;
    transform: rotate(-90deg);
  }
`;