import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const FieldsContainer = styled.div<Props>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  margin-top: 16px;
`;

export const AddButton = styled.div`
  background: #f7f8fc;
  border-radius: 6px;
  padding: 12px;
  color: #264796;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  width: 187px;
  user-select: none;
  cursor: pointer;
  svg {
    margin-right: 12px;
  }
`;

export const Wrapper = styled.div``;

export const WrapperContainer = styled.div`
  display: flex;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Result = styled.div`
  flex: 1;
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
