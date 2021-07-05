import React, { useState, FC } from 'react';

import StatusButton from './status-button';
import { axios, useActionCreators, useSelector } from '../../../../hooks';

import {
  DiscussionHeadFlex,
  DiscussionHead,
  ArrowButton,
  DiscussionEditBox,
  DiscussionEditDate,
  DiscussionEdit,
  DiscussionEditTop,
  DiscussionTopTitle,
  DiscussionEditTopBody,
  DiscussionItem,
  DiscussionEditLabel,
  DiscussionEditText,
  DiscussionEditTopWrap,
  DiscussionEditCancel,
  DiscussionEditCancelButton,
  DiscussionUl,
  DiscussionLi,
  DiscussionTime,
  DiscussionText,
  DiscussionTypingBox,
  DiscussionTypingInput,
  DiscussionTypingFile,
  DiscussionTypingButton,
  DiscussionTypingFileWrapper,
} from './style';

import { ReactComponent as Arrow } from '../../../../assets/icons/down-arrow.svg';
import { ReactComponent as CancelIcon } from '../../../../assets/icons/discussion-cancel-icon.svg';
import { ReactComponent as FileIcon } from '../../../../assets/icons/discussion-file-icon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/icons/discussion-home-icon.svg';

interface DiscussionCollapseProps {
  isClosed?: boolean;
}

const DiscussionCollapse: FC<DiscussionCollapseProps> = ({ isClosed }) => {
  const { setConfirm, cleanConfirm } = useActionCreators();
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    setToggle(!toggle);
  };

  const cancelDiscussion = () => {
    setConfirm({
      message: 'Вы действительно хотите завершить спор',
      callback: () => {
        cleanConfirm();
      },
    });
  };

  return (
    <>
      {/*<DiscussionHeadFlex style={{ borderBottom: toggle ? '2px solid #e9ecf4' : '' }}>*/}
      <DiscussionHeadFlex style={{ borderBottom: '2px solid #e9ecf4' }}>
        <DiscussionHead>№1231235</DiscussionHead>
        <DiscussionHead>Товар не прибыл</DiscussionHead>
        <DiscussionHead>15 сентября 2020</DiscussionHead>
        <DiscussionHead>ООО "ДИХАУС"</DiscussionHead>
        <DiscussionHead style={{ textAlign: 'center' }}>
          <StatusButton isClosed={isClosed}>
            {isClosed ? 'Завершен' : 'Активный'}
          </StatusButton>
        </DiscussionHead>
        <DiscussionHead
          style={{
            justifyContent: 'flex-end',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ArrowButton
            onClick={toggleHandle}
            className={toggle ? 'opened' : ''}
          >
            <Arrow />
          </ArrowButton>
        </DiscussionHead>
      </DiscussionHeadFlex>

      {toggle ? (
        <DiscussionEditBox>
          <DiscussionEditTop>
            <DiscussionTopTitle>Спор по заказу №12345679</DiscussionTopTitle>
            <DiscussionEditTopWrap>
              <DiscussionEditTopBody>
                <DiscussionItem>
                  <DiscussionEditLabel>Причина спора</DiscussionEditLabel>
                  <DiscussionEditText>Товар не соответсвует</DiscussionEditText>
                </DiscussionItem>
                <DiscussionItem>
                  <DiscussionEditLabel>Стоимость</DiscussionEditLabel>
                  <DiscussionEditText>23 125 000 сум</DiscussionEditText>
                </DiscussionItem>
                <DiscussionItem>
                  <DiscussionEditLabel>Статус</DiscussionEditLabel>
                  <DiscussionEditText>Активный</DiscussionEditText>
                </DiscussionItem>
                <DiscussionItem>
                  <DiscussionEditLabel>Наименование товара</DiscussionEditLabel>
                  <DiscussionEditText>
                    Xiaomi Redmi 9 синий 64...
                  </DiscussionEditText>
                </DiscussionItem>
                <DiscussionItem>
                  <DiscussionEditLabel>
                    Наименование продавца
                  </DiscussionEditLabel>
                  <DiscussionEditText>ООО ДИХАУС</DiscussionEditText>
                </DiscussionItem>
                <DiscussionItem>
                  <DiscussionEditLabel>Дата начала спора</DiscussionEditLabel>
                  <DiscussionEditText>31 января 2021</DiscussionEditText>
                </DiscussionItem>
              </DiscussionEditTopBody>
              <DiscussionEditCancel>
                <DiscussionEditCancelButton
                  disabled={isClosed}
                  onClick={cancelDiscussion}
                >
                  <CancelIcon />
                  Завершить спор
                </DiscussionEditCancelButton>
              </DiscussionEditCancel>
            </DiscussionEditTopWrap>
          </DiscussionEditTop>

          <DiscussionEdit>
            <DiscussionEditDate>31 Янв 2021</DiscussionEditDate>
            <DiscussionUl>
              <DiscussionLi className="mine">
                <DiscussionText>
                  Не получил заказ , жду уже третью неделю, какие проблемы
                  <DiscussionTime>12:08</DiscussionTime>
                </DiscussionText>
              </DiscussionLi>
              <DiscussionLi>
                <DiscussionText>
                  Не получил заказ , жду уже третью неделю, какие проблемы{' '}
                  <DiscussionTime>12:08</DiscussionTime>
                </DiscussionText>
              </DiscussionLi>
              <DiscussionLi className="mine">
                <DiscussionText>
                  Не получил заказ , жду уже третью неделю, какие проблемы{' '}
                  <DiscussionTime>12:08</DiscussionTime>
                </DiscussionText>
              </DiscussionLi>
              <DiscussionLi>
                <DiscussionText>
                  Не получил заказ , жду уже третью неделю, какие проблемы{' '}
                  <DiscussionTime>12:08</DiscussionTime>
                </DiscussionText>
              </DiscussionLi>
            </DiscussionUl>
            <DiscussionTypingBox>
              <DiscussionTypingInput />
              <DiscussionTypingFileWrapper>
                <DiscussionTypingFile type="file" id="file_icon" />
                <FileIcon />
              </DiscussionTypingFileWrapper>
              <DiscussionTypingButton>
                <SendIcon />
              </DiscussionTypingButton>
            </DiscussionTypingBox>
          </DiscussionEdit>
        </DiscussionEditBox>
      ) : null}
    </>
  );
};

export default DiscussionCollapse;
