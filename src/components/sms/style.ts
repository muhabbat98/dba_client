import styled from 'styled-components';

interface ErrorProps {
  error: string | undefined;
}

export const SmsContainer = styled.div`
  margin-top: 24px;
`;

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const InputContainer = styled.div<ErrorProps>`
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
  border-radius: 8px;
  overflow: hidden;
  padding: 14px 8px;
  background: #f7f7fa;
  display: flex;
  align-items: center;
  transition: 0.3s;
  justify-content: center;
  border: 1px solid
    ${({ error, theme: { red } }) => (error ? red : 'transparent')};
`;

export const Input = styled.input`
  font-weight: 600;
  font-size: 24px;
  width: 40px;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-left: 12px;
  border-radius: 8px;
`;

export const Div = styled.div`
  margin-top: 32px;
`;

export const Warning = styled.div<ErrorProps>`
  color: ${({ theme: { red } }) => red};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.18px;
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: ${({ error }) => (error ? '1' : '0')};
`;

export const Error = styled.div`
  color: ${({ theme: { red } }) => red};
  text-align: center;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 24px;
`;
