import styled from "styled-components";

export const TransparentWrapper = styled.div`
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
    max-height: 100%;
    overflow-y:scroll;

`;
export const DisputeContainer = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    display:flex;
    position: relative !important;
    flex-direction: column;
    width: 430px;
    /* left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%); */
    padding: 40px;
    z-index:100;
    @media(max-width: 768px){
        padding:20px;
        width:70%;
    }
    @media(max-width: 576px){
        padding:20px;
        width:90%;
    }
    
`;
export const CloseButton = styled.div`
    position: fixed;
    top:28px;
    right: 28px;
`;
export const DisputeTitle = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: center;
    p{
        margin:0px;
        &:nth-child(2){
            margin-top:6px;
        }
    }
`;
export const InputContainer = styled.div`
    div{
        
        .sc-irOQnY iRGMpa{
            margin-top: 24px;
        }
        &:nth-child(3){
            margin-top: 24px;
        }
    }
    
`;
export const Discription = styled.textarea`
    width:100%;
    height: 108px;
    margin-top: 24px;
    border: 1px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 16px;
    resize: none;
    padding: 16px;
    outline: none;
    overflow: hidden;
    &::-webkit-input-placeholder { /* Edge */
        color: #E9ECF4;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #E9ECF4;
    }
    &::placeholder {
        color: #E9ECF4;
    }
    &:focus{
        border: 1px solid #1541A9; 
    }
`