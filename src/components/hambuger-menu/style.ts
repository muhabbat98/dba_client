import styled from 'styled-components';

export const Stick = styled.div`
  width: 18px;
  border: 1px solid black;
  height: 0px;
  margin-bottom: 3px;
  background: black;
  transition: 0.5s;
`;

export const BreadcrumbContainer = styled.div`
cursor: pointer;
&.active{
  & ${Stick}:nth-child(1){
    transform: translateY(5px) rotate(135deg);
  };
  & ${Stick}:nth-child(2){
    transform: scale(0);
  };
  && ${Stick}:nth-child(3){
    transform: translateY(-5px) rotate(-135deg);
  }
}
`;