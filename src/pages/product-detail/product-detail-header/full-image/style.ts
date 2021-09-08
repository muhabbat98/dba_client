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
  background: #282c34;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #35383e;
  }

  svg{
    fill:#f1f1f1;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }
`;
export const RightArrow = styled.div`
  background: #282c34;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #35383e;
  }

  svg {
    fill: #f1f1f1;
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
  }
`;