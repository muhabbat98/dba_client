import styled from 'styled-components';

export const AddFormContainer = styled.div`
  position: fixed;
`;

export const AddFormWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 430px;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const CloseContainer = styled.div`
  position: absolute;
  cursor: pointer;

  top: 20px;
  right: 20px;
  svg {
    width: 16px;
  }
`;

export const PrimitiveTypesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface TypesProps {}

export const Types = styled.div<TypesProps>`
  border: 1px solid grey;
  padding: 8px;
  margin: 5px;
`;
