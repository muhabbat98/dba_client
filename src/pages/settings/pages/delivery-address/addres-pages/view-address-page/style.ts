import styled from "styled-components";

export const ViewAddressContainer = styled.div`
  border: 2px solid #E9ECF4;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 24px;
`;
export const BorderBoxContainer = styled.div`
  background: #ffffff;
  border: 2px solid #E9ECF4;
  box-sizing: border-box;
  border-radius: 16px;
  width: 100%;
  padding: 16px 24px;
  margin-bottom:16px;
`;
export const HouseCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #e5faf3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: center;
  svg {
    margin: -2px 0px 0px 3px;
  }
`;
export const AddresTitiles = styled.div`
  margin-left: 16px;
  p {
    &:nth-child(1) {
      margin: 0px 0px 8px 0px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: -0.155556px;
      color: #000000;
    }
    &:nth-child(2) {
      margin: 0px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.155556px;
      color: #797979;
    }
  }
`;

export const ActionsContainer = styled.div`
  align-self: center;
  display: flex;

  div {
    cursor: pointer;
    padding: 15px 12px;
    border-radius:16px;
    &:hover{
        background:#F4F6F9;
        transition:0.3s;

    }
    &:first-child {
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #264796;
        margin-left: 13px;
      }
    }
    &:nth-child(2){
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #264796;
        margin-left: 13px;
      }
    }
    &:last-child {
      &:hover{
            background:#f4eaef;
        }
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: red;
        margin-left: 13px;
      }
    }
  }
`;


export const PlusButton = styled.div`
    
    display:flex;
    justify-content:center;
    button{
      width:auto;
    }
    div{
      display:flex;
      justify-content:center;
    svg{
      margin-right:12px;
    }
  }
`;
