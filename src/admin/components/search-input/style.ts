import styled from 'styled-components';

export const SearchInputBox = styled.div`
  /* margin-left: 24px;
  margin-right: 24px; */
  position: relative;

  & > svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchInputItem = styled.input`
  background-color: #f7f8fc;
  padding: 10px 14px 10px 36px;
  height: 46px;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    color: rgba(38, 71, 150, 0.3);
  }
`;
