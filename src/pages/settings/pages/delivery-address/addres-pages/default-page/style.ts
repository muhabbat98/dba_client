import styled from "styled-components";

export const DefaultPageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius: 16px;
    border: 1px solid ${({theme})=>theme.grey3};
    padding:70px 0px;
    
`;