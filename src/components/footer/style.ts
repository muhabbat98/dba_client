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
        @media (max-width: 768px) {
            font-family: Manrope;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 19px;
            color: rgba(255, 255, 255, 0.5);
            margin-top:24px;
            text-align: center;
        }
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
    margin:0px;
    @media (max-width: 768px) {
        margin-left:-30px;
        margin-bottom: 24px;
    }
    svg{
        height:40px;
        &:nth-child(1){
        margin-left:0px;
        }
        &:nth-child(2){
            margin-top:17px;
            margin-left:3px;
            @media (max-width: 768px) {
                margin-left:16px;
            }
        }
    }
`;
export const Line = styled.div`
    width:100%;
    height:1px;
    background: #1E2126;
`;
export const FooterDropDown = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    margin-top:14px;
    cursor:pointer;
    p{
        font-family: Manrope;
        font-style: normal;
        font-weight: 900;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.15px;
        color: #FFFFFF;
        margin:0px;
    }
`;
export const Ul = styled.ul`
    list-style:none;
    padding-left:0px;
    
    li{
        color:#fff;
        margin: 12px 0px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        cursor:pointer;
        &:hover{
            color:${theme.primary_color};
        }
    }
`;
export const MobilRekTitle = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on, 'liga' off;
    color: #FFFFFF;
    margin-top:24px;
`;