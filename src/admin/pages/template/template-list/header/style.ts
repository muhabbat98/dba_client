import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddButton = styled.div`
  padding: 12px;
  display: flex;
  background: #f7f8fc;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;
  svg {
    margin-right: 12px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #264796;
`;
