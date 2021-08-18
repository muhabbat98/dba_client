import styled from 'styled-components';

const check = ({ error, warning }: any) => {
  if (error === false && warning === true) {
    return '#FFF5E2';
  } else if (error === true && warning === true) {
    return '#FFF4F4';
  } else {
    return '#f4f6f9';
  }
};

export const PhoneContainer = styled.div<{
  error: boolean | undefined;
  warning: boolean | undefined;
}>`
  background: ${check};
  border-radius: 16px;
  padding: 13px 21px;
  margin-top: 12px;
  margin-bottom: 12px;
  position: relative;
  
  @media(max-width: 480px){
    height: 48px;
    padding: 4px 21px;
  }
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
  transition: 0.2s;
  margin-bottom: 4px;
  opacity: ${({ focus }) => (focus ? '1' : '0')};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: green;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    @media(max-width: 480px){
      height: 20px;
      width: 20px;
    }
  }
`;

export const Input = styled.input`
  color: #262626;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  background: inherit;
  border: none;
  outline: none;
  width: 90%;
  letter-spacing: 2px;
  height: 22px;
  @media(max-width: 480px){
    height: 20px;
  }
  
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
  user-select: none;
  @media(max-width: 480px){
    font-size: 14px;
  }
`;

export const Mask = styled.div`
  color: #262626;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
`;
