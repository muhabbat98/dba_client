import styled from 'styled-components';

interface Props {
  isLoading: boolean;
}

export const PaymentWrapperContainer = styled.div<Props>`
  height: ${({ isLoading }) => (isLoading ? '400px' : 'auto')};
  position: relative;
`;
