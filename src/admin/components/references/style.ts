import styled from 'styled-components';

interface ReferencesContainerProps {
  isLoading: boolean;
}

export const ReferencesContainer = styled.div<ReferencesContainerProps>`
  position: relative;
  height: ${({ isLoading }) => (isLoading ? '400px' : 'auto')};
`;
