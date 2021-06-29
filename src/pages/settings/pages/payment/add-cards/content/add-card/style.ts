import styled from 'styled-components';

export const AddCardContainer = styled.div`
  position: relative;
`;

export const FormContainer = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const Div = styled.div`
  margin-bottom: 24px;
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  > label {
    cursor: pointer;
    user-select: none;
  }
`;

export const ErrorContainer = styled.div``;

export const Error = styled.div`
  color: ${({ theme: { red } }) => red};
`;
