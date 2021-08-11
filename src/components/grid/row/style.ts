import styled from 'styled-components';

interface IsMobileProps {
  isMobile?: boolean;
}

export const RowContainer = styled.div<IsMobileProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* column-gap: 10px; */
  grid-gap: ${({ isMobile }) => (isMobile ? '16px' : '24px')};
  /* grid-gap: 10px; */
`;
