import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 24px;
`;

export const Error = styled.div`
  margin: 24px 0;
  color: ${({ theme: { red } }) => red};
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
`;
