import styled from "styled-components";

interface Props {
  size: {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
  };
}

export const ColContainer = styled.div<Props>`
  min-height: 0;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-column: span ${({ size }) => size.xs};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: span ${({ size }) => size.sm};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: span ${({ size }) => size.md};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: span ${({ size }) => size.lg};
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-column: span ${({ size }) => size.xl};
  }
`;
