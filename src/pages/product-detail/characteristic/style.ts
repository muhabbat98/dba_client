import styled from "styled-components";

export const WrapperContainer = styled.div`
    display:flex;
    @media(max-width: 768px){
        display:block;
    }
`;
export const CharacterContainer = styled.div`
    width: 630px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1000px){
      width:400px;
    }
`;
export const MobileContainer = styled.div`
    
`;
export const CharacterText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.15px;
    color: #797979;
    margin-top:16px;
    white-space: nowrap;
    width: auto;
    @media(max-width: 768px){
      margin-top:12px;
    }
`;
export const Dots = styled.span`
    border-bottom: 1px dashed #E9ECF4;
    height: 0px;
    margin-top:30px;
    width: 100%;
    margin-left:6px;
    margin-right:6px;
    
`;
export const SizeText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.15px;
    color: #000000;
    margin-top:16px;
    @media(max-width: 768px){
        margin-top:4px;
    }

`;
export const HandeleOpen = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.15px;
    color: #264796;
    cursor: pointer;
`;
