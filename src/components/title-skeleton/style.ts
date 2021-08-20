import styled,{keyframes} from 'styled-components';

const shine = keyframes`
    from {
        left: 150px;
    }
    to   {
        left: 50%;
    }
`;
const mobileShine = keyframes`
  from{
    left:10px;
  }
  to{
    left:50%;
  }
`
export const SubSkleton = styled.div`
    height:32px;
    max-width:250px;
    background:#F4F6F9;
    margin-top:40px;
    margin-bottom:24px;
    border-radius: 8px;
    @media(max-width: 768px){
      max-width:120px;
    }
    &::before{
      content: '';
      display: block;
      position: absolute;
      left: -50px;
      height: 36px;
      width: 130px;
      background: linear-gradient(to right, transparent 0%, #ffffff 50%, transparent 100%);
      animation: ${shine} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      @media(max-width: 768px){
        animation: ${mobileShine} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }    
    }
`;