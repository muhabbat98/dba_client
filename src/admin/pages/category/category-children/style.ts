import styled from 'styled-components';

interface CategoryChildrenContainerProps {
  loading: boolean;
}

export const CategoryChildrenContainer = styled.div<CategoryChildrenContainerProps>`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background-color: white;
  padding: 24px;
  position: relative;
  height: ${({ loading }) => (loading ? '600px' : 'auto')};
`;
