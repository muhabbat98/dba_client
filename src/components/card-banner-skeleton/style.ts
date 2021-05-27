import styled,{keyframes} from 'styled-components';

const shine = keyframes`
    from {
        left: 0px;
    }
    to   {
        left: 50%;
    }
`;
export const Wrapper = styled.div`
    border-radius: 16px;
    width:49%;
    background:#F4F6F9;
    &::before{
            content: '';
            display: block;
            position: relative;
            left: -50px;
            
            height: 250px;
            width: 80px;
            background: linear-gradient(to right, transparent 0%, #F4F6F9 50%, transparent 100%);
            animation: ${shine} 0.7s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        }

    div{
        background: #FFFFFF;
        border-radius: 8px;
        margin-left:40px;
        &:nth-child(1){
            width:300px;
            height:40px;
            margin-top:-210px
        }
        &:nth-child(2){
            width:250px;
            height:40px;
            margin-top:20px;
        }
        &:nth-child(3){
            width:100px;
            height:35px;
            margin-top:50px;
            margin-bottom:40px;
        }
    }

`;