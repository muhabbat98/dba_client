import styled from "styled-components";

interface APPBar{
    state:boolean
}

export const MainWrapper = styled.div<APPBar>`
    border: ${({state})=>state?"0px 0px 2px 0px solid #E9ECF4":"2px solid #E9ECF4"};
    box-sizing: border-box;
    border-radius: 16px;
    padding-bottom:20px;
    @media (max-width: 768px) {
        border:none;
    }
`;
export const  OrderHeader = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid #E9ECF4;

    div{
        /* margin:18px 24px; */
        &:nth-child(1){
            display:flex;
            div{
                padding:18px 24px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                display: flex;
                align-items: center;
                text-align: center;
                color: ${({theme}) => theme.gray1};
                
                cursor:pointer;
            }
        }
        

    }
`;
export const FilterButtonContainer = styled.div`
margin-right:10px;
            padding:5px 7px;
            align-self:center;
            display:flex;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            text-align: center;
            color: ${({theme}) => theme.primary_color};
            cursor:pointer;
            svg{
                margin-right:15px;
            }
            &:hover{
                background:#EAEDF5;
                border-radius:4px;
            }
`;
export const AppBar1 = styled.div<APPBar>`
    border-bottom: ${({state})=>state?"4px solid #264796":""};
    padding-bottom: ${({state})=>state?14:18}px !important;
    color: ${({state})=>state?"#000000":""};
    font-weight: ${({state})=>state?"900":"0"} 
`;
export const AppBar2 = styled.div<APPBar>`
    border-bottom: ${({state})=>state?"4px solid #264796":""};
    padding-bottom: ${({state})=>state?14:18}px !important;
    color: ${({state})=>state?"#000000":""};
    font-weight: ${({state})=>state?"900":"0"} 
`;