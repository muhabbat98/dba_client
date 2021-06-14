import styled from "styled-components";

export const BorderBoxContainer = styled.div`
    background: #ffffff;
    border: 2px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    padding: 16px 24px;
    margin-bottom:16px;
`;
export const AddresTitiles = styled.div`
    margin-left: 16px;
    max-width:270px;
    p {
        cursor: pointer;
    &:nth-child(1) {
        margin: 0px 0px 8px 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #000000;
    }
    &:nth-child(2) {
        margin: 0px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.155556px;
        color: #797979;
    }
    }
`;

export const ActionsContainer = styled.div`
    align-self: center;
    display: flex;

    div {
    cursor: pointer;
    
    padding: 15px 12px;
    border-radius:16px;
    &:hover{
        background:#F4F6F9;
        transition:0.3s;
    }
    &:first-child {
        display: flex;
        span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #264796;
        margin-left: 13px;
        }
    }
    &:nth-child(2){
        display: flex;
        span {
            align-self: center;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: #264796;
            margin-left: 13px;
        } 
    }
    &:nth-child(3) {
        &:hover{
            background:#f4eaef;
        }
        display: flex;
        span {
            align-self: center;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: red;
            margin-left: 13px;
        }
    }
    }
    /* &:last-child{
        svg{
            
            width:10px;
            height:10px;
        }
    } */
`;
export const Arrow = styled.div`
    padding:0px !important;
    height:30px;
    width:30px;
    align-self:center;
    display:flex;
    justify-content:center;
    align-items:center;
    
    svg{
        fill:${({theme})=>theme.primary_color};
        width:15px;
        height:15px;
    }
`;
export const SecondContainer =styled.div`
    
`;
export const Title = styled.div`
    margin: 0px 0px 8px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.155556px;
    color: #000000;
    cursor: pointer;
`;
export const AddressInfo = styled.div`
    display:flex;
    /* justify-content:space-between; */
    flex-wrap:wrap;
    margin-top:8px;
    div{
        width:190px;
        margin-top:16px;
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: ${({theme})=>theme.grey1};
            margin:0px;
        }
        h5{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: #000000;
            margin:4px 0px 0px 0px;
        }
    }
`;
export const Line = styled.div`
    height:1px;
    width:100%;
    background:#F2F2F2;
    margin-top:24px;
`;
