import styled from "styled-components";

export const CartIcrementButtonContainer = styled.div`
  background-color: ${({ theme }) => `${theme.light_grey}`};
  padding: 4px;
  border-radius: 8px;
  display: flex;
`;

export const CartDecrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  border: transparent;
  outline: none;
  cursor: pointer;
`;

export const CartIcncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  border: transparent;
  outline: none;
  cursor: pointer;
`;

export const CartIcrementInput = styled.input`
  border: none;
  width: 35px;
  height: 32px;
  outline: none;
  background-color: transparent;
  text-align-last: center;
  font-weight: bold;
  font-size: 16px;
  transition: all .1s ease;
  transform: scale(1);
  opacity: 1;

  &.active{
     transform: scale(1.1);
     opacity: .7;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
