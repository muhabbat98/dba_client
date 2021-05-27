import styled,{keyframes} from 'styled-components';

const shine = keyframes`
    from {
        left: 0px;
    }
    to   {
        left: 70%;
    }
`;
export const Wrapper = styled.div`
    background:#F4F6F9;
    width:231px;
    padding-top:36px;
    padding-bottom:51px;
    border-radius:8px;
    &::before{
            content: '';
            display: block;
            position: relative;
            left: -50px;
            
            height: 300px;
            width: 80px;
            background: linear-gradient(to right, transparent 0%, #F4F6F9 50%, transparent 100%);
            animation: ${shine} 0.7s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        }
    div{
        background:#fff;
        border-radius:4px;
        &:nth-child(1){
            max-width:178px;
            height:164px;
            margin:-300px 24px 0px 24px;
            
        }
        &:nth-child(2){
            max-width: 104px;
            height: 28px;
            margin: 51px 0px 8px 24px;
        }
        &:nth-child(3){
            max-width: 136px;
            height: 28px;
            margin-left:24px;
        }
    }
`;