import styled from "styled-components";

export const ModalContainer = styled.div`
    width:100%;
    height:100vh;
    background:rgba(0,0,0,0.6);
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0px;
    left:0px;
    overflow:hidden;
`;

export const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    display:flex;
    justify-content:space-between;
    padding:40px;
    width:80%;
`;
export const FormContainer = styled.div`
    width:30%;
    margin-right:20px;
    button{
        width:100%;
        margin-top:30px;
    }
    div{
        margin-bottom:12px;
        &:nth-child(4){
            height:100px;
            input{
                
            }
        }
    }
`;
export const SubInputs = styled.div`
    display:flex;
    justify-content:space-between;
    
    div{
        width:48%;
        margin-bottom:0px;
    }
`;
export const YMapContainer = styled.div`
    width:70%;
    height:530px;
    overflow:hidden;
    border-radius: 20px 0px 0px 20px;
    
`;