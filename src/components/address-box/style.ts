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
    z-index: 99;
    @media(max-width:768px){
        /* position:absolute; */
        /* top:10px; */
        /* height:1000px; */
        min-height: 100%;
        overflow-y: scroll;
    }

`;

export const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    display:flex;
    justify-content:space-between;
    padding:40px;
    width:80%;
    
    @media(max-width:768px){
        margin-top:290px;
        flex-direction: column;
        width:90%;
        padding:20px;
        
    }
`;
export const FormContainer = styled.div`
    width:30%;
    margin-right:20px;
    @media(max-width: 768px){
        width:100%;    

        }
    button{
        width:100%;
        margin-top:30px;
    }
    div{
        margin-bottom:12px;
        /* &:nth-child(6){
            height:100px;
            
        } */
    } 
    form{
        
    }
`;
export const SubInputs = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        margin-bottom:0px;
    }
`;
export const SubDiv = styled.div`
    width:48%;
`;
export const YMapContainer = styled.div`
    width:70%;
    height:650px;
    overflow:hidden;
    border-radius: 20px 0px 0px 20px;
    @media(max-width: 768px){
        width:100%; 
        border-radius: 20px;   
        margin-top:16px;
        height:220px;
    }
`;