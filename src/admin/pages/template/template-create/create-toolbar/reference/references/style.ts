import styled from 'styled-components';

interface ReferencesContainerProps {
  isLoading: boolean;
}

export const ReferencesContainer = styled.div<ReferencesContainerProps>`
  position: relative;
  height: ${({ isLoading }) => (isLoading ? '400px' : 'auto')};
`;

export const ReferencesWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  & > :first-child {
    margin-right: 24px;
  }
`;
