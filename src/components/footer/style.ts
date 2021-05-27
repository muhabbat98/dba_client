import styled from 'styled-components';
import {theme} from '../../theme';

export const FooterWrapper = styled.div`
width:100%;
background: #000;
padding-bottom:24px;
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color:#ffffff;
    }
`;


export const ContainerBoottom = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:40px;
    ul{
        list-style:none;
        margin-top:40px;
        padding-left:0px;
    
        li{
            color:#fff;
            margin: 12px 0px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            cursor:pointer;
            &:hover{
                color:${theme.primary_color};
            }
        }
        &:nth-child(3){
            width:226px;
            /* margin-left:50px; */
        }
        &:nth-child(4){
            width:226px;
            margin-left:80px;
        }
        &:nth-child(5){
            width:226px;
        }
    }
`;
export const AppStories = styled.li`
    svg{
        height:40px;
        &:nth-child(2){
            margin-top:17px;
        }
    }
`;
export const Line = styled.div`
    width:100%;
    height:1px;
    background: #1E2126;
`;
