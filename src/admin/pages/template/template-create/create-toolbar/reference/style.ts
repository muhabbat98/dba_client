import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const ReferenceContainer = styled.div<Props>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  margin-top: 32px;
`;
