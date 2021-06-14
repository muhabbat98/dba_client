import styled from 'styled-components';

export const PasswordFormContainer = styled.div`
  width: 430px;
  background: white;
  border-radius: 16px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;

export const Line = styled.div`
  height: 8px;
  border-radius: 16px;
  background-color: ${({ theme: { primary_color } }) => primary_color};
`;

export const Caption = styled.p`
  margin: 0;
  margin-bottom: 24px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 24px;
  margin-top: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.178947px;
  color: #808080;
`;

export const Div = styled.div`
  margin-bottom: 12px;
`;

export const Div2 = styled.div`
  margin-bottom: 32px;
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

export const Error = styled.div`
  text-align: center;
  color: ${({ theme: { red } }) => red};
  color: red;
  margin: 16px 0;
`;
