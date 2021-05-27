import styled from "styled-components";

export const ActiveProductsItemContainer = styled.div`
    border: 2px solid ${({theme})=>theme.grey3};
    box-sizing: border-box;
    border-radius: 16px;
    overflow: hidden;
    margin-top:24px;
`;
export const InfoWrapper = styled.div`
    padding:0px 39px 24px 39px;
    width:100%;
    position:relative;
    background-color:#ffff;
`;
export const OrderHeader = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:24px;
    div{
        background: rgba(34, 181, 115, 0.15);
        border-radius: 100px;
        align-self:flex-start;
        padding:8px 12px;
        color:#22B573;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.155556px;
    }
`;

export const SubContainer = styled.div`
    /* flex:1; */
    div{
        display:flex;
        align-items:center;
        h6{
            margin:0px 16px 0px 8px; 
        }
        svg{
            width:40px;
            height:40px;
        }

        span{
            width:150px;
            height:2px;
            background-color:${({theme})=>theme.primary_color};
        }
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.5);
        margin: -4px 0px 40px 48px;
    }
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
`;
export const ImageContainer = styled.div`
    border: 1px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 8px;
    max-width:100px;
    max-height:100px;
    margin-bottom:24px;
    div{
        width:84px;
        height:84px;
        margin:8px;
        overflow:hidden;
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
export const ButtonsGroupContainier = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        align-self:center;
        color:${({theme})=>theme.primary_color};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.05px;
        text-decoration-line:underline;
        display:flex;
        cursor:pointer;
        svg{
            fill:${({theme})=>theme.primary_color};
            width:12px;
            height:12px;
            margin-left:13px;
            align-self:center;
            
        }
    }
`;