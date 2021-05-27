import styled from "styled-components";

export const ContainerWraper = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media ${props => props.theme.breakpoints.xs} {
    max-width: 576px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-width: 720px;
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 960px;
  }

  @media ${props => props.theme.breakpoints.lg} {
    max-width: 1250px;
  }

  /* @media ${props => props.theme.breakpoints.lg} {
    max-width: 1140px;
  } */

  @media ${props => props.theme.breakpoints.xl} {
    max-width: 1250px;
  }
`;
