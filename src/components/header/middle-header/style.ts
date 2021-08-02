import styled from 'styled-components';

export const MiddleHeaderContainer = styled.div`
  margin: 24px 0 16px 0;
`;

export const Logo = styled.h1`
  margin: 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  color: ${({ theme: { blue } }) => blue};
  letter-spacing: -0.155556px;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MiddleHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
