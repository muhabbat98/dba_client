import styled from 'styled-components';

export const CategoryRowContainer = styled.div`
  display: flex;
  margin: 16px 0;
  align-items: center;
`;

export const ToAllGoods = styled.div`
  display: inline-block;
  padding: 10px 16px;
  background: #f7f8fc;
  color: #264796;
  transition: 0.3s;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;

  :hover {
    background: #264796;
    color: white;
  }
`;

export const AddTemplate = styled(ToAllGoods)``;

export const CatName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  transition: 0.3s;
  line-height: 22px;
  cursor: pointer;
  color: #464e5f;
  padding: 5px 0;
  padding-left: 10px;
  border-radius: 8px;
  margin-right: 16px;
  :hover {
    background: #f7f8fc;
  }
`;
