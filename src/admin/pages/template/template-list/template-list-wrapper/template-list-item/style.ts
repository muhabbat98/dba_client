import styled from 'styled-components';

export const TemplateListItemContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  width: 32px;
  height: 32px;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const NumberContainer = styled.div`
  margin-right: 32px;
`;

export const Title = styled.div`
  flex: 1;
`;

export const View = styled.div`
  background: #f7f8fc;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 129.3%;
  color: #264796;
  padding: 8px 10px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: #264796;
    color: white;
  }
`;
