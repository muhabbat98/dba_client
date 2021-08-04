import styled from 'styled-components';

export const ChangeReferenceContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const EditContainer = styled.div`
  width: 430px;
  background: #ffffff;
  border-radius: 8px;
  padding: 40px;
  position: relative;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseContainer = styled.div`
  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 28px;
    top: 28px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Div = styled.div`
  margin-bottom: 32px;
`;
