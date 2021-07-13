import styled from 'styled-components';

interface CategoryMainContainerProps {
  loading: boolean;
}

export const CategoryMainContainer = styled.div<CategoryMainContainerProps>`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background-color: white;
  padding: 24px;
  position: relative;
  height: ${({ loading }) => (loading ? '600px' : 'auto')};
  display: block;
`;
