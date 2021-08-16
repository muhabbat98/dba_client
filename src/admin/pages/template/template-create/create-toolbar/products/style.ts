import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const ProductsContainer = styled.div<Props>`
  margin-top: 20px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
