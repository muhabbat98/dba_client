import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const ProductsContainer = styled.div<Props>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
