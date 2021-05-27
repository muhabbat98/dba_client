import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const PhoneContainer = styled.div<{ error?: boolean }>`
  background: ${({ error }) => (error ? '#FFF4F4' : '#f4f6f9')};
  border-radius: 16px;
  padding: 12px 21px;
  margin-top: 24px;
  position: relative;
`;

export const PhoneContainerLabel = styled.label``;

export const Title = styled.h3<{ focus: boolean }>`
  margin: 0;
  color: ${({ theme: { blue } }) => blue};
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 4px;
  opacity: ${({ focus }) => (focus ? '1' : '0')};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(InputMask)`
  color: #262626;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  background: inherit;
  border: none;
  outline: none;
  padding-left: 5px;
  height: 22px;
  flex: 1;
`;

export const Mask = styled.div`
  color: #262626;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Warning = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  padding-left: 25px;
  color: #f5413d;
  margin-top: 8px;
`;
