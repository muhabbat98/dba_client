import styled from 'styled-components';

export const CategoryAddButtonContainer = styled.div`
  padding: 12px;
  border-radius: 6px;
  background: #f7f8fc;
  transition: 0.3s;
  display: flex;
  height: 46px;
  cursor: pointer;
  margin-left: 32px;
  :hover {
    background: #e1e2e6;
  }
`;

export const Title = styled.div`
  color: ${({ theme: { primary_color } }) => primary_color};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-left: 12px;
`;
