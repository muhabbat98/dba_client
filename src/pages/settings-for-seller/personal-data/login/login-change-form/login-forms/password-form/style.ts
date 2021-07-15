import styled from 'styled-components';

export const PasswordFormContainer = styled.div`
  position: relative;
`;

export const Caption = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.178947px;
  color: #808080;
  margin: 0;
  margin-top: 22px;
  margin-bottom: 24px;
`;

export const Div = styled.div`
  margin-bottom: 24px;
`;

export const ErrorContainer = styled.div``;

export const Error = styled.p`
  color: ${({ theme: { red } }) => red};
  margin: 0;
  text-align: center;
  margin-bottom: 12px;
  font-size: 14px;
`;
