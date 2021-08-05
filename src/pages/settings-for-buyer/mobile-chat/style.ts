import styled from 'styled-components';

export const MobileChatContainer = styled.div``;

export const MobileChatTop = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 28px;
  text-align: center;
`;

export const Back = styled.div`
  position: absolute;
  top: 28px;
  left: 7px;
`;

export const ChatTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 8px;
`;

export const ChatTitleNumber = styled.div`
  color: ${({ theme }) => theme.grey1};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const MobileChatBody = styled.div``;

export const MobileChatList = styled.div``;

export const ChatDate = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const ChatTime = styled.div`
  color: #666666;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin-bottom: 6px;
`;

export const MobileChatText = styled.div`
  width: 260px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding: 6px 12px;
`;

export const MobileChatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;

  &.his {
    ${MobileChatText} {
      background-color: #ebebef;
      border-radius: 18px 18px 18px 2px;
    }
  }

  &.mine {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${MobileChatText} {
      color: #fff;
      border-radius: 18px 18px 2px 18px;
      background-color: ${({ theme }) => theme.primary_color};
    }
  }
`;
