import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  MobileChatContainer,
  MobileChatTop,
  Back,
  ChatTitle,
  ChatTitleNumber,
  MobileChatBody,
  MobileChatList,
  MobileChatItem,
  ChatDate,
  ChatTime,
  MobileChatText,
} from './style';

import { ReactComponent as BackIcon } from '../../../assets/icons/mobile-chat-back-icon.svg';

const MobileChat = () => {
  const { goBack } = useHistory();

  const backHandler = () => {
    goBack();
  };

  return (
    <MobileChatContainer>
      <MobileChatTop>
        <Back onClick={backHandler}>
          <BackIcon />
        </Back>

        <ChatTitle>Чат</ChatTitle>
        <ChatTitleNumber>№1231235</ChatTitleNumber>
      </MobileChatTop>

      <MobileChatBody>
        <ChatDate>31 Янв 2021</ChatDate>
        {/* <MobileChatList> */}
        <MobileChatItem className="his">
          <ChatTime>9:51 AM</ChatTime>
          <MobileChatText>
            Спасибо за обращение в Nike! Меня зовут Джиан, чем я могу вам
            помочь?
          </MobileChatText>
        </MobileChatItem>

        <MobileChatItem className="mine">
          <ChatTime>9:51 AM</ChatTime>
          <MobileChatText>
            Спасибо за обращение в Nike! Меня зовут Джиан, чем я могу вам
            помочь?
          </MobileChatText>
        </MobileChatItem>

        <MobileChatItem className="his">
          <ChatTime>9:51 AM</ChatTime>
          <MobileChatText>
            Спасибо за обращение в Nike! Меня зовут Джиан, чем я могу вам
            помочь?
          </MobileChatText>
        </MobileChatItem>

        <MobileChatItem className="mine">
          <ChatTime>9:51 AM</ChatTime>
          <MobileChatText>
            Спасибо за обращение в Nike! Меня зовут Джиан, чем я могу вам
            помочь?
          </MobileChatText>
        </MobileChatItem>

        {/* </MobileChatList> */}
      </MobileChatBody>

      {/* <MobileChatInputBox></MobileChatInputBox> */}
    </MobileChatContainer>
  );
};

export default MobileChat;
