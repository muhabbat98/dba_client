import styled from 'styled-components';

export const CircleImageUploaderContainer = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: #f4f6f9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  flex-direction: column;
  :hover {
    background: #e4e6e9;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
`;

export const Input = styled.input`
  display: none;
`;

export const IconContainer = styled.img`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #c6c6c6;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 50%;
  //::after {
  //  content: '';
  //  width: 100%;
  //  height: 100%;
  //  position: absolute;
  //}
`;

export const Overlay = styled.div`
  position: absolute;
`;
