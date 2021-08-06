import styled from "styled-components";

interface Open {
open:boolean;
}

export const Tr = styled.div<Open>`
    box-shadow:${({open})=>open?"0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)":""};
    border-bottom:2px solid  #E9ECF4;
    display:flex;
    justify-content:space-between;
    padding:16px 23px 8px 23px;
    div{
        flex:2;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        align-items: center;
        color: #000000;
        &:nth-child(2){
            text-align:center;
        }
        &:nth-child(3){
            text-align:center;
            span{
                padding:8px 18px;
                border-radius:100px;
            }
            
        }
        &:nth-child(4){
            text-align:center;
        }
        &:nth-child(5){
            align-self:top;
            flex:0;
            span{
                width:30px;
                height:30px;
                display:flex;
                justify-content:center;
                align-items:center;
                /* background-color:#eee; */
                border-radius:4px;
                margin:auto;
                margin-top:-5px;
                &:hover{
                        background-color:#EAEDF5;
                        transition:0.4s;
                    }
                svg{
                    margin-top:2px;
                    width:15px;
                    height:15px;
                }
            } 
        }
    }
    
    
`;
export const InfoWrapper = styled.div`
    padding:0px 39px 24px 39px;
    width:100%;
    border-bottom:2px solid  #E9ECF4;
    position:relative;
    background-color:#ffff;
`;
export const InfoTitle = styled.h6`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #000000;
    margin:17px 0px;
    @media(max-width: 768px){
        margin:0px;
        font-size: 14px;
        line-height: 1.2;
    }   
`;
export const ImageContainer = styled.div`
    border: 1px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 8px;
    max-width:100px;
    max-height:100px;
    margin-bottom:24px;
    @media (max-width: 768px){
        max-width:80px;
        max-height:80px;
    }
    div{
        width:84px;
        height:84px;
        margin:8px;
        overflow:hidden;
        @media (max-width: 768px){
            width:64px;
            height:64px;
            margin:8px;
        }
        img{
            object-fit:cover;
            width:100%;
            height:100%;
        }
    }
`;

export const TitlesContainer = styled.div`
    margin-left:16px;
    h6{
        margin-top:8px;
    }
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: -0.15px;
        color: ${({theme})=>theme.grey1};
        margin-top:-8px;
    }
`;
export const PriceContainer = styled.div`
    h6{
        margin-top:8px;
    }
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: -0.15px;
        color: ${({theme})=>theme.grey1};
        margin-top:-8px;
        
    }
    @media(max-width: 768px){
        display:flex;
        justify-content: space-between;
    }
`;
export const MoblProductTitle = styled.h4`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin:4px 0px 0px 0px;
    line-height: 18px;
    color: #000000;
`;
export const TextWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        margin-top:-8px;
        align-items: center;
        color: ${({theme})=>theme.grey1};
        &:nth-child(2){
            color:#000000;
        }
        &::nth-child(1){
            @media(max-width: 400px){
                width:100px;
            }
        }
    }
`;
export const InfoDeliveryContainer = styled.div`
    display:flex;
    justify-content:space-between;
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        margin-top:-8px;
        align-items: center;
        color: ${({theme})=>theme.grey1};
        
    }
    div{
        &:nth-child(2){
            p{
                text-align:right;
                color:#000000;
            }
        }
    }
`;

export const BoxMobl = styled.div`
    border: 2px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 16px;
    /* padding:16px; */
    margin-bottom: 16px;
`;
export const BoxMoblTitle = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:12px;
    p{
        margin:0px;
        font-family: Manrope;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        &:nth-child(1){
            text-transform: uppercase;
            color: #797979;
        }
        &:nth-child(2){
            color:#000;
        }
    }
    span{
            border-radius: 100px;
            padding:6px 15px;
    }
`;
export const OpenButton = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    span{
        font-family: Manrope;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        text-transform: capitalize;
        color: #264796;
    }
    svg{
        margin-left:12px;
    }
`;
export const Line = styled.div`
    border: 1px solid #E9ECF4;
    width:100%;
    margin:2px 0px 12px 0px;
   
`;