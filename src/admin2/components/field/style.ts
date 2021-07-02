import styled from 'styled-components';

export const FieldConatiner = styled.div`
  //border: 1px solid #282c34;
  //padding: 10px;
  display: flex;
`;

export const InputContainer = styled.div`
  //border: 1px solid green;
  flex: 2;
`;

export const UnityContainer = styled.div`
  //border: 1px solid blue;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  & p {
    margin-bottom: 0px;
    font-weight: bold;
  }
  & select {
    margin-top: 5px !important;
  }
`;
