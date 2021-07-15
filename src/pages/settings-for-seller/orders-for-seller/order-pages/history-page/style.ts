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
            flex:2;
        }
        &:nth-child(2){
            flex:2;
            p{
                margin:0 auto;
                text-align:left;
            }
        }
        &:nth-child(3){
            flex:2;
            p{
                margin:0 auto;
                text-align:center;
            }
        }
        &:nth-child(4){
            flex:2;
            p{
                margin:0 auto;
                text-align:center;
            }
        }
        &:nth-child(5){
            
            width:50px;
        }
    }
`;
export const FilterContainer = styled.div`
    display:flex;
    margin:24px 24px 0px 0px;
    input{
        margin-left:24px;
        width:100%;
        &:nth-child(3){
            margin-right:24px;
        }
    }
`;