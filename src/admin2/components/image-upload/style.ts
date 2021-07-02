import styled from 'styled-components';

export const ImageUploadContainer = styled.div`
  border: 2px dashed #c4c4c4;
  position: relative;
  height: 200px;
  margin-top: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
