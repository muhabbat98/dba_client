import styled from 'styled-components';

export const FieldsRowContainer = styled.div`
  display: flex;
  border-top: 1px solid #f3f3f3;
  align-items: center;
  padding: 10px 0;
  //border: 1px solid green;
  :last-child {
    border-bottom: 1px solid #f3f3f3;
  }
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Num = styled.div`
  color: #828282;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  //border: 1px solid red;
  width: 35px;
  margin-left: 16px;
`;

export const Name = styled.div`
  //border: 1px solid blue;
  flex: 1;
  margin-left: 16px;
`;

export const Action = styled.div`
  //border: 1px solid blue;
  margin-right: 10px;
`;
