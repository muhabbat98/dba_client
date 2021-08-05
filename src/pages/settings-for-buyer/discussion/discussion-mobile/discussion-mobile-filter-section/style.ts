import styled from 'styled-components';

interface IsOpenProps {
  isOpen: boolean;
}

export const DiscussionMobileFilterSectionContainer = styled.div`
  border-radius: 16px;
  border: 2px solid #e9ecf4;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DiscussionHeader = styled.div`
  padding: 16px 16px 0 16px;
`;

export const DiscussionHeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DiscussionLeft = styled.div`
  color: ${({ theme }) => theme.grey1};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const DiscussionRight = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const DiscussionBody = styled.div``;

export const ToggleDisplayBtn = styled.div<IsOpenProps>`
  color: ${({ theme }) => theme.primary_color};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;

  & > svg {
    margin-left: 12px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const DiscussionMobileCollapse = styled.div`
  border-top: 2px solid #e9ecf4;
`;

export const DiscussionMobileTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 18px;
`;

export const DiscussionBodyList = styled.div``;

export const DiscussionBodyItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 18px;
`;

export const DiscussionBodyListItemLeft = styled.div`
  color: ${({ theme }) => theme.grey1};
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

export const DiscussionBodyListItemRight = styled.div`
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  width: 100%;
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
`;

export const DiscussionMobileBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 16px;
`;

export const DiscussionMobileChatBtn = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary_color};
  color: #fff;
  padding: 8px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;

  & > svg {
    margin-right: 12px;
  }
`;

export const DiscussionMobileEndBtn = styled.div`
  background: rgba(247, 247, 250, 0.1);
  border: 1px solid ${({ theme }) => theme.light_grey};
  color: ${({ theme }) => theme.primary_color};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 12px;

  & > svg {
    margin-right: 12px;
  }
`;
