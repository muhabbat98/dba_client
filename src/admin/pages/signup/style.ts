import styled from "styled-components";

export const SignUpDiv = styled.div`
    display: flex;
`;

export const LogoPart = styled.div`
    width:50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
export const LogoHeader = styled.div`
    margin: 64px;
    display: flex;
`;
export const LogoIcon = styled.img`
    width: 64px;
    height: 40px;    
`;
export const LogoName = styled.div`
    color: ${({theme})=>theme.blue};
    margin-left: 24px;
    font-family: Manrope;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
`;
export const MainLogoPart = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:64px;
`;

export const InputPart = styled.div`
    width:50%;
    height: 100vh;
    background-color:${({theme})=>theme.primary_color};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const InputCard = styled.div`
    width: 510px;
    background-color: #fff;
    padding: 88px;
    border-radius: 16px;
`;
export const CardHeader = styled.h2`
    margin-top: 0;
    font-family: Manrope;
    color:${({theme})=>theme.primary_color};
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    ::after{
        content: 'Marketplace Админ';
        margin-top: 16px;
        font-style: normal;
        display: block;
        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
        color: rgba(38, 71, 150, 0.7);
    }
`;
export const AdminForm = styled.form`
    &>div{
        margin-top:21px ;
    }
`;  

