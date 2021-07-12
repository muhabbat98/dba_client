import styled from 'styled-components';

export const CategoryRowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 16px;
  justify-content: space-between;
  user-select: none;
  //border: 1px solid red;
`;

export const CategoryName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #464e5f;
  margin-left: 22px;
  cursor: pointer;
  flex: 1;
  //border: 1px solid red;
  height: 100%;
  transition: 0.3s;
  padding: 5px 0;
  padding-left: 10px;
  border-radius: 8px;
  :hover {
    background: #f7f8fc;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 20px;
`;

export const Right = styled.div``;
