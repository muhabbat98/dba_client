import styled from 'styled-components';

export const LoginHeaderContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1<{ isConfirm: boolean | undefined }>`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  margin-top: ${({ isConfirm }) => (isConfirm ? '50px' : '20px')};
  margin-bottom: ${({ isConfirm }) => (isConfirm ? '50px' : '0')};
`;
