import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  border-radius: 100px;
  //border: 1px solid ${({ theme: { grey3 } }) => grey3};
  overflow: hidden;
  max-width: 766px;
  margin: 0 auto;
  background: ${({ theme: { grey4 } }) => grey4};
`;

export const SearchCategory = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  background: ${({ theme: { grey4 } }) => grey4};
  border-radius: 100px;
  border: 1px solid ${({ theme: { grey3 } }) => grey3};
  margin: -1px;
`;

export const SearchCategoryTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.155556px;
  color: ${({ theme: { grey1 } }) => grey1};
  margin-right: 7px;
`;

export const InputContainer = styled.div`
  max-height: 100%;
  margin-left: 5px;
  flex: 1;
`;

export const Input = styled.input`
  padding-left: 24px;
  width: 100%;
  height: 100%;
  font-family: Manrope;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.155556px;
  /* color: ${({ theme: { grey1 } }) => grey1}; */
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  &::placeholder {
    color: #797979;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const SearchButtonContaienr = styled.div`
  /* border-radius: 100px;
  border: 1px solid ${({ theme: { grey3 } }) => grey3}; */
  display: flex;
  padding: 12px 24px;
  background: ${({ theme: { grey4 } }) => grey4};
  svg {
    width: 15px;
    height: 15px;
  }
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s;
  :hover {
    background: #d0d0d0;
  }
`;

export const SearchButtonTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.155556px;
  margin-left: 12px;
  font-weight: bold;
`;
