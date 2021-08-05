import React, { useState } from 'react';
import StatusButton from '../../status-button';
import {
  DiscussionMobileFilterSectionContainer,
  DiscussionHeader,
  DiscussionHeaderItem,
  DiscussionLeft,
  DiscussionRight,
  DiscussionBody,
  ToggleDisplayBtn,
  DiscussionMobileCollapse,
  DiscussionMobileTitle,
  DiscussionBodyList,
  DiscussionBodyItem,
  DiscussionBodyListItemLeft,
  DiscussionBodyListItemRight,
  DiscussionMobileBtns,
  DiscussionMobileChatBtn,
  DiscussionMobileEndBtn,
} from './style';

import { ReactComponent as UpDownIcon } from '../../../../../assets/icons/mobile-filter-up-down-arrow.svg';
import { ReactComponent as CloseIcon } from '../../../../../assets/icons/discussion-cancel-icon.svg';
import { ReactComponent as ChatIcon } from '../../../../../assets/icons/chat-icon.svg';

const DiscussionMobileFilterSection = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DiscussionMobileFilterSectionContainer>
      <DiscussionHeader>
        <DiscussionHeaderItem>
          <DiscussionLeft>ID Заказа</DiscussionLeft>
          <DiscussionRight>№1231235</DiscussionRight>
        </DiscussionHeaderItem>
        <DiscussionHeaderItem>
          <DiscussionLeft>Причина</DiscussionLeft>
          <DiscussionRight>Товар не прибыл</DiscussionRight>
        </DiscussionHeaderItem>
        <DiscussionHeaderItem>
          <DiscussionLeft>Продавец</DiscussionLeft>
          <DiscussionRight>ООО "ДИХАУС"</DiscussionRight>
        </DiscussionHeaderItem>
        <DiscussionHeaderItem>
          <DiscussionLeft>Дата начала спора</DiscussionLeft>
          <DiscussionRight>15 сентября 2020 </DiscussionRight>
        </DiscussionHeaderItem>
        <DiscussionHeaderItem>
          <DiscussionLeft>Cтатус</DiscussionLeft>
          <DiscussionRight>
            <StatusButton isClosed={true}>
              {true ? 'Завершен' : 'Активный'}
            </StatusButton>{' '}
          </DiscussionRight>
        </DiscussionHeaderItem>
      </DiscussionHeader>

      <DiscussionBody>
        <ToggleDisplayBtn onClick={() => setOpen(!open)} isOpen={open}>
          {open ? 'Скрыть' : 'Подробно'} <UpDownIcon />
        </ToggleDisplayBtn>

        {open ? (
          <DiscussionMobileCollapse>
            <DiscussionMobileTitle>
              Спор по заказу №12345679
            </DiscussionMobileTitle>
            <DiscussionBodyList>
              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>
                  Причина спора
                </DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  Не соответсвует
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>

              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>
                  Наименование товара
                </DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  Xiaomi Redmi 9 ...
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>

              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>
                  Стоимость
                </DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  23 125 000 сум
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>

              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>
                  Наименование продавца
                </DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  ООО ДИХАУС
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>

              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>Статус</DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  Активный
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>

              <DiscussionBodyItem>
                <DiscussionBodyListItemLeft>
                  Дата начала спора
                </DiscussionBodyListItemLeft>
                <DiscussionBodyListItemRight>
                  31 января 2021
                </DiscussionBodyListItemRight>
              </DiscussionBodyItem>
            </DiscussionBodyList>

            <DiscussionMobileBtns>
              <DiscussionMobileChatBtn>
                <ChatIcon />
                Чат
              </DiscussionMobileChatBtn>
              <DiscussionMobileEndBtn>
                <CloseIcon />
                Завершить спор
              </DiscussionMobileEndBtn>
            </DiscussionMobileBtns>
          </DiscussionMobileCollapse>
        ) : null}
      </DiscussionBody>
    </DiscussionMobileFilterSectionContainer>
  );
};

export default DiscussionMobileFilterSection;
