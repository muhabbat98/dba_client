import styled from 'styled-components';

export const LoginFooterContainer = styled.div``;

export const Top = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: space-between;
`;

export const Forgot = styled.div`
  font-family: 'Manrope', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.15px;
  color: #808080;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export const Registration = styled.div`
  font-family: 'Manrope', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.15px;
  text-decoration-line: underline;
  color: ${({ theme: { blue } }) => blue};
  cursor: pointer;
`;

export const Middle = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.div`
  font-family: 'Manrope', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Btn = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  flex: 1;
  background: #f4f5f9;
  padding: 16px;
  text-align: center;
  border-radius: 14px;
  transition: 0.3s;
  color: ${({ theme: { primary_color } }) => primary_color};
  &:first-child {
    margin-right: 24px;
  }
  cursor: pointer;
  &:hover {
    background: #dddde1;
  }
`;
