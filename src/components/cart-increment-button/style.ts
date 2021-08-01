import styled from 'styled-components';

interface IsMobileVersionProps {
  isMobileVersion?: boolean;
}

export const CartIcrementButtonContainer = styled.div<IsMobileVersionProps>`
  background-color: ${({ theme, isMobileVersion }) =>
    isMobileVersion ? 'transparent' : `${theme.light_grey}`};
  padding: ${({ isMobileVersion }) => (isMobileVersion ? '0px' : '4px')};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isMobileVersion }) => (isMobileVersion ? '80px' : 'auto')};
  height: ${({ isMobileVersion }) => (isMobileVersion ? '32px' : 'auto')};
  border: ${({ isMobileVersion }) =>
    isMobileVersion ? '1px solid #E9ECF4' : 'none'};
`;

export const CartDecrementButton = styled.button<IsMobileVersionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isMobileVersion }) => (isMobileVersion ? 'auto' : '32px')};
  height: ${({ isMobileVersion }) => (isMobileVersion ? 'auto' : '32px')};
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ isMobileVersion }) =>
    isMobileVersion ? 'transparent' : '#fff'};
  border: transparent;
  outline: none;
  cursor: pointer;

  & > svg {
    width: ${({ isMobileVersion }) => (isMobileVersion ? '8px' : 'auto')};
  }
`;

export const CartIcncrementButton = styled.button<IsMobileVersionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ isMobileVersion }) =>
    isMobileVersion ? 'transparent' : '#fff'};
  border: transparent;
  outline: none;
  cursor: pointer;

  & > svg {
    width: ${({ isMobileVersion }) => (isMobileVersion ? '8px' : 'auto')};
  }
`;

export const CartIcrementInput = styled.input<IsMobileVersionProps>`
  border: none;
  width: ${({ isMobileVersion }) => (isMobileVersion ? '32px' : '35px')};
  height: ${({ isMobileVersion }) => (isMobileVersion ? '20px' : '32px')};

  outline: none;
  background-color: transparent;
  text-align-last: center;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.1s ease;
  transform: scale(1);
  opacity: 1;

  &.active {
    transform: scale(1.1);
    opacity: 0.7;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
