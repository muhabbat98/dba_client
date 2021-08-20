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

export const TopSkeleton = styled.div`
    width:100%;
    background:#F4F6F9;
    padding:80px 0px 90px 0px;
    div{
        div{
        height:56px;
        background: #ffffff;
        border-radius: 8px;
        &::before{
            content: '';
            display: block;
            position: absolute;
            left: -50px;
            
            height: 56px;
            width: 130px;
            background: linear-gradient(to right, transparent 0%, #F4F6F9 50%, transparent 100%);
            animation: ${shine} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        }
        
        &:nth-child(1){
            max-width:442px;
        }
        &:nth-child(2){
            margin-top:30px;
            max-width:285px;
        }
        &:nth-child(3){
            margin-top:30px;
            max-width:350px;
            
        }
        @media(max-width: 768px){
          height: 32px;
          &:nth-child(1){
            max-width:213px;
          }
          &:nth-child(2){
            max-width:117px;
          }
          &:nth-child(3){
            max-width:170px;

          }
          &::before{
            height: 32px;
            width: 130px;
            animation: ${mobileShine} 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }
        }
    }
    }
    
`;