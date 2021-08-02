import styled from 'styled-components';

interface ReferencesContainerProps {
  isLoading: boolean;
}

export const ReferencesContainer = styled.div<ReferencesContainerProps>`
  position: relative;
  height: ${({ isLoading }) => (isLoading ? '400px' : 'auto')};
`;

export const ReferencesWrapper = styled.div`
  background: white;
  border: 1px solid #dfe0eb;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  & > :first-child {
    margin-right: 24px;
  }
`;
