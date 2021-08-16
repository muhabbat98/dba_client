import styled from 'styled-components';

export const ViewContainer = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;
