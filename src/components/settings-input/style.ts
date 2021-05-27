import styled from "styled-components";

export const Input = styled.input`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
    border: 1px solid #E9ECF4;
    box-sizing: border-box;
    border-radius: 8px;
    padding-left:16px;
    height:48px;
    outline:none;
    width:auto;
    cursor: pointer;
    caret-color:#80C8FF;
    &:focus{
        border: 1px solid #264796;
        color: #000000;
    }
    &:-moz-placeholder{
        color: #BDBDBD;
    }
    &::-webkit-input-placeholder{
        color: #BDBDBD;
    }
    &:-ms-input-placeholder{
        color: #BDBDBD;
    }
    &:placeholder{
        color: #BDBDBD;
    }
`;
