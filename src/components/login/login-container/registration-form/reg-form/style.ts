import styled from 'styled-components';

export const OfertaContainer = styled.div`
  padding: 20px 0 24px 0px;
  text-align: center;
`;

export const OfertaTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

export const OfertaLink = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme: { blue } }) => blue};
  text-decoration: underline;
`;

export const Error = styled.div`
  color: ${({ theme: { red } }) => red};
  text-align: center;
`;
