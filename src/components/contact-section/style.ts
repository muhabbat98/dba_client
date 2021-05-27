import styled from 'styled-components';
import Email from './pochta.svg'

export const ContactSectionWtrapper = styled.div`
    background: #DFE8FF;
    border-radius: 16px;
    width:100%;
    display:flex;
    margin-bottom:20px;
    background-image:url(${Email});
    background-repeat:no-repeat;
    background-position:100% 0%;
    div{
        &:nth-child(1){
            margin:30px 0px 30px 65px;
            max-width:536px;
            h3{
                font-style: normal;
                font-weight: 600;
                font-size: 28px;
                line-height: 40px;
                display: flex;
                align-items: center;
                color: #000000;
            }
            p{
                font-weight: 500;
                font-size: 12px;
                line-height: 20px;
                display: flex;
                align-items: center;
                color: #000000;
            }
        }
        &:nth-child(2){
            margin:30px 0px 0px 20px;
            display:flex;
            div{
                background: #F4F6F9;
                border-radius: 16px;
                align-self:flex-start;
                &:nth-child(2){
                    cursor: pointer;
                    svg{
                        margin:16px;
                    }
                }
            }
        }
    }
    
`;