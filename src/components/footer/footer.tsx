import React from "react";
import Container from "../grid/container";
import { ReactComponent as AppStore } from "../../assets/icons/appStore.svg";
import { ReactComponent as PlayMarket } from "../../assets/icons/playMarket.svg";

import { FooterWrapper, AppStories, ContainerBoottom, Line } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContainerBoottom>
          <ul>
            <li>Покупателям</li>
            <li>Оплата и доставка</li>
            <li>Возврат товара</li>
            <li>Обратная связь</li>
            <li>О сервисе</li>
            <li>Как выбрать товар</li>
            <li>Пользовательское соглашение</li>
          </ul>
          <ul>
            <li>Партнерам</li>
            <li>Как начать продавать</li>
            <li>Справка для партнеров</li>
            <li>Справка маркетплейса для продавцов</li>
            <li>Личный кабинет продавца</li>
          </ul>
          <ul>
            <li>Компания</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Новости компании</li>
            <li>Партнерская программа</li>
            <li>Производителям</li>
          </ul>
          <ul>
            <li>Мы в соцсетях</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>YouTube</li>
          </ul>
          <ul>
            <li>Мобильные устройства</li>
            <AppStories>
              <AppStore />
              <PlayMarket />
            </AppStories>
            <li>Перейти на мобильную версию сайта</li>
          </ul>
        </ContainerBoottom>
        <Line></Line>
        <p>2020-2021 © Marketplace</p>
      </Container>
     
    </FooterWrapper>
  );
};

export default Footer;
