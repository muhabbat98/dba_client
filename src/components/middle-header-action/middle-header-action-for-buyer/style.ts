import styled from 'styled-components';

export const MiddleHeaderActionContainer = styled.div`
  display: flex;
`;

export const Action = styled.div`
  border-left: 1px solid ${({ theme: { grey3 } }) => grey3};
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    padding-right: 0;
  }
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountLogo = styled.div`
  cursor: pointer;
`;

export const CartLogo = styled.div`
  margin-right: 16px;
  position: relative;
`;

export const HeartLogo = styled.div`
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 127.1%;
  letter-spacing: 0.5px;
  color: #8a8a8a;
  margin: 0;
  margin-bottom: 3px;
`;

export const Price = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 127.1%;
  letter-spacing: 0.5px;
  color: #000000;
  margin: 0;
`;

export const Count = styled.div`
  border-radius: 50%;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 127.1%;
  letter-spacing: 0.5px;
  width: 16px;
  height: 16px;
  color: white;
  position: absolute;
  background: ${({ theme: { blue } }) => blue};
  display: flex;
  align-items: center;
  justify-content: center;
  top: -4px;
  right: -10px;
`;
