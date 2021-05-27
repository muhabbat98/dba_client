import styled from "styled-components";

export const RadioButtonLabel = styled.label`
  position: relative;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;

  &:hover {
    span:after {
      /* transform: scale(3.6); */
    }
  }
`;

export const RadioButtonInput = styled.input`
  display: none;
  &[type="radio"]:checked + span {
    &:after {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
      opacity: 1;
    }
  }  

  &[type="radio"]:disabled + span{
    cursor: not-allowed;
  } 
`;

export const RadioButtonSpan = styled.span`
  position: relative;
  display: block;
  float: left;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  /* border: 2px solid ${(props) => props.theme.grey}; */
  border: 1px solid ${({theme}) => `${theme.secondary_color}`};;
  border-radius: 100%;
  -webkit-tap-highlight-color: transparent;
  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: ${({theme}) => `${theme.primary_color}`};;
    transform: scale(0);
    transition: all 0.2s ease;
    opacity: 0.08;
    pointer-events: none;
  }
`;
