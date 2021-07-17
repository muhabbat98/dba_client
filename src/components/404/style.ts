import styled from 'styled-components';

export const Erro404Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  max-width: 460px;
  margin: 0 auto;
`;

export const ErrorTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  color: ${({ theme }) => theme.primary_color};
  margin: 0;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const ErrorDefination = styled.div`
  color: rgba(21, 64, 169, 0.3);
  margin-bottom: 42px;
`;
