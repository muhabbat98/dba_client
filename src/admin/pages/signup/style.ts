import styled from "styled-components";

export const SignUpDiv = styled.div`
    display: flex;
    @media ${({ theme }) => theme.breakpoints.xs}{
        display: block;
    }
`;

export const LogoPart = styled.div`
    width:50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.breakpoints.xs}{
        width: 100%;
        height: auto;
    }
 
`;
export const LogoHeader = styled.div`
    margin: 64px;
    display: flex;
    @media ${({ theme }) => theme.breakpoints.sm}{
        margin: 32px;
    }
    @media ${({ theme }) => theme.breakpoints.xs}{
        margin: 20px;
    }
`;
export const LogoIcon = styled.img`
    width: 64px;
    height: 40px; 
    @media ${({ theme }) => theme.breakpoints.xs}{
        width: 36px;
        height: auto;
    }   
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
    @media ${({ theme }) => theme.breakpoints.sm}{
        margin-left: 14px;
        font-size: 16px;
        line-height: 30px;
    }
    @media ${({ theme }) => theme.breakpoints.xs}{
        margin-left: 12px;
        font-size: 14px;
        line-height: 20px;
    }
`;
export const MainLogoPart = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      
        img{
            display: block;
            max-width: 80%;
            max-height: 80%;
        }
        @media ${({ theme }) => theme.breakpoints.xs}{
            display: none;
        }
`;

export const InputPart = styled.div`
    width:50%;
    height: 100vh;
    background-color:${({theme})=>theme.primary_color};
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.breakpoints.xs}{
        width: 100%;
        height: 93vh;
    }
`;
export const InputCard = styled.div`
    max-width: calc(100% - 72px);
    background-color: #fff;
    padding: 88px;
    border-radius: 16px;
    @media only screen and (max-width: 992px){
        padding: 44px;
        margin: 0px 42px ;
    }
    @media only screen and (max-width: 768px){
        padding: 22px;
    }
  
    @media ${({ theme }) => theme.breakpoints.xs}{
        margin: 0px 36px ;
        border-radius: 8px;
        box-sizing: border-box;      
    }
  
   
   
  
   

  
   
    /* @media only screen and (max-width: 320px){
        margin: 0px 18px ;
        padding: 22px;
    } */
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
    @media ${({ theme }) => theme.breakpoints.sm}{
        font-size: 32px;
        line-height: 56px;
    }
    @media ${({ theme }) => theme.breakpoints.xs}{
        font-size: 28px;
        line-height: 32px;
    }
`;
export const AdminForm = styled.form`
    &>div{
        margin-top:21px ;
    }
`;
  