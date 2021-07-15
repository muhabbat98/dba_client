import styled from 'styled-components';

interface Props {
  isBg?: boolean;
}

export const DiscussionContainer = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const DiscussionTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 20px;
  border-bottom: 2px solid #e9ecf4;
`;

export const DiscussionFilterBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  & > svg {
    margin-right: 12px;
  }
`;

export const FilterText = styled.span`
  color: ${({ theme }) => theme.primary_color};
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const DiscussionHeadFlex = styled.div`
  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;

  &:last-child {
    border-bottom: none !important;
  }
`;

export const DiscussionHead = styled.div`
  /* flex: 1; */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  padding: 9px 0;
  color: ${({ theme }) => theme.grey1};
`;

export const DiscussionTr = styled.tr`
  text-align: center;
  font-family: Manrope;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  border-bottom: 2px solid ${({ theme }) => theme.grey3};

  &:last-child {
    border-bottom: none;
  }
`;

export const StatusDisccusionButton = styled.button<Props>`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  padding: 8px 14px;
  border: none;
  /* cursor: pointer; */
  border-radius: 100px;
  background-color: ${({ isBg }) => (isBg ? '#DEF4EA' : '#D9EFFF')};
  color: ${({ isBg, theme }) => (isBg ? theme.green : theme.blue)};
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &.opened {
    background-color: ${({ theme }) => theme.light_grey};
    padding: 6px;
    border-radius: 4px;

    > svg {
      fill: ${({ theme }) => theme.primary_color};
      transform: rotate(-180deg);
    }
  }
`;

export const DiscussionEditBox = styled.div`
  position: relative;
  padding: 16px 40px 40px 40px;
`;

export const DiscussionEditDate = styled.div`
  text-align: center;
  /* font-family: Roboto; */
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 50px;
  color: #8d9aaf;
`;

export const DiscussionEdit = styled.div`
  padding-top: 24px;
`;

export const DiscussionEditTop = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.grey4};
  padding-bottom: 24px;
`;

export const DiscussionTopTitle = styled.div`
  font-family: Manrope;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 24px;
`;

export const DiscussionEditTopBody = styled.div`
  width: 80%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 16px;
`;

export const DiscussionItem = styled.div``;

export const DiscussionEditLabel = styled.div`
  font-family: Manrope;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.grey1};
  margin-bottom: 4px;
`;

export const DiscussionEditText = styled.div`
  font-family: Manrope;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const DiscussionEditTopWrap = styled.div`
  display: flex;
`;

export const DiscussionEditCancel = styled.div`
  width: 20%;
`;

export const DiscussionEditCancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefeff;
  border: none;
  border-radius: 16px;
  border: 1px solid #eaedf5;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #264796;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 10px;

  height: 56px;
  width: 230px;
  position: relative;
  top: -40px;
  left: -80px;

  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  & > svg {
    margin-right: 10px;
  }
`;

export const DiscussionUl = styled.ul`
  overflow-y: auto;
  height: 350px;
  padding: 0;
  margin: 0;
  list-style: none;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 10px;
`;

export const DiscussionText = styled.div`
  width: 272px;
  background-color: ${({ theme }) => theme.light_grey};
  font-family: Manrope;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 16px 0px;
  padding: 12px 14px 12px 18px;
  position: relative;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-bottom: 5px solid ${({ theme }) => theme.light_grey};
    border-left: 5px solid transparent;
    border-left: 5px solid transparent;
    position: absolute;
    left: -5px;
    bottom: 0;
  }
`;

export const DiscussionLi = styled.li`
  &.mine {
    display: flex;
    justify-content: flex-end;

    & > ${DiscussionText} {
      width: 354px;
      padding: 12px 20px 12px 14px;
      border-radius: 16px 16px 0px 16px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: auto;
        right: -5px;
        width: 0;
        height: 0;
        border-bottom: 5px solid ${({ theme }) => theme.light_grey};
        border-right: 5px solid transparent;
      }
    }
  }
`;

export const DiscussionTime = styled.span`
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #8d9aaf;
  display: block;
  text-align: right;
`;

export const DiscussionTypingBox = styled.div`
  width: 100%;
  border: 0.5px solid #e9ecf4;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 30px;
`;

export const DiscussionTypingInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 16px;
  border: 0.5px solid #e9ecf4;
  height: 40px;
  padding-left: 24px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

export const DiscussionTypingFile = styled.input`
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 88px;
  background-color: red;
  width: 20px;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
`;

export const DiscussionTypingButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 64px;
  border: #e9ecf4;
  background: #e9ecf4;
  border-radius: 16px;
  cursor: pointer;
`;

export const DiscussionTypingFileWrapper = styled.div`
  & > svg {
    opacity: 1;
    position: absolute;
    top: 10px;
    right: 88px;
    z-index: 0;
    cursor: pointer;
  }
`;

export const DiscussionFilterSection = styled.div`
  display: flex;
  margin: 24px 20px 15px 0px;

  & > input,
  & > div {
    margin-left: 20px;
    width: 100%;
  }
`;

// export const DiscussionFilterSectionItem = styled.div`
//   margin-left: 24px;
//   width: 100%;
// `;
