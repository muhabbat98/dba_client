import styled from "styled-components";

export const Table = styled.div`
width:100%;
/* border: 1px solid ${({theme})=>theme.grey3}; */

`;
export const TableHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding:16px 23px;
    border-bottom:2px solid #E9ECF4;
    @media(max-width: 768px){
        border:none;
    }
    div{
        
        margin:auto;
        margin:2px 0px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: ${({theme})=>theme.grey1};
        &:nth-child(1){
            flex:1;}
        &:nth-child(2){
            flex:1;
            p{
                margin:0 auto;
                text-align:center;
            }
        }
        &:nth-child(3){
            flex:1;
            p{
                margin:0 auto;
                text-align:center;
            }
        }
        &:nth-child(4){
            flex:1;
            p{
                margin:0 auto;
                text-align:center;
            }
        }
        &:nth-child(5){
            width: 50px;
        }
    }
`;
export const FilterContainer = styled.div`
    display:flex;
    margin:24px 24px 0px 0px;
    /* flex-wrap: wrap; */
    input{
        margin-left:24px;
        width:100%;
        &:nth-child(2){
            margin-right:24px;
        }
    }
    @media(max-width: 768px){
        display:block;
        margin:20px 0px 0px 0px;
        input{
            margin:0px;
        }
    }
`;

export const PagenitionInfo = styled.p`
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #BDBDBD;
`;
export const PageSelector = styled.div`
    display:flex;
    p{
        font-family: Manrope;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #264796;
    }
    div{
        display:flex;
        margin-top:8px;
        align-items: center;
        border: 1px solid #E9ECF4;
        box-sizing: border-box;
        border-radius: 8px;
        padding:6px 12px;
        height:32px;
        font-family: Manrope;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #264796;
        margin-left:12px;
        cursor:pointer;
        svg{
            margin-left:14px;
        }
    }
`;