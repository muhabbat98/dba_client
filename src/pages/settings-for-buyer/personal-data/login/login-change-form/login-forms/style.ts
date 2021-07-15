import styled from 'styled-components';

export const LoginFormsContainer = styled.div`
  position: fixed;
  width: 430px;
  background-color: white;
  border-radius: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;

export const CloseIconContainer = styled.div`
  svg {
    cursor: pointer;
    position: absolute;
    right: 28px;
    transition: 0.5s;
    top: 28px;
    :hover {
      transform: scale(1.3);
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
`;
