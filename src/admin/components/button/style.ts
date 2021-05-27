import styled from 'styled-components';

interface Props {
  fullWidth?: boolean;
  disableElevation?: boolean;
}

export const Button = styled.button<Props>`
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  text-decoration: 'none';
  background-color: ${({ theme }) => theme.primary_color};
  outline: none;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: ${({ disableElevation }) =>
    !disableElevation
      ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'
      : 'none'};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: ${({ theme }) => theme.primary_color_shade};

    box-shadow: ${({ disableElevation }) =>
      !disableElevation
        ? 'rgba(0, 0, 0, 0.19) 0px 10px 20px,rgba(0, 0, 0, 0.23) 0px 6px 6px;'
        : 'none'};
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #a6a6a6;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

export const SmallButton = styled(Button)<Props>`
  padding: 0.7rem 0.9rem;
  font-size: 0.7rem;
  border-radius: 4px;
`;

export const MediumButton = styled(Button)<Props>`
  padding: 0.9rem 1rem;
  font-size: 0.85rem;
  border-radius: 4px;
`;

export const BigButton = styled(Button)<Props>`
  padding: 0.7rem 1.3rem;
  font-size: 1.2rem;
  border-radius: 4px;
  &:active {
    padding: 0.6rem 1.2rem;
    margin: 0.2rem 0;
  }
`;
