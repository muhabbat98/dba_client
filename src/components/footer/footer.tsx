import React,{useState} from "react";
import Container from "../grid/container";
import { ReactComponent as AppStore } from "../../assets/icons/appStore.svg";
import { ReactComponent as PlayMarket } from "../../assets/icons/playMarket.svg";
import {useWindowSize} from '../../hooks/useWindowSize'
import {ReactComponent as WhiteArrow} from '../../assets/icons/whiteArrow.svg';
import { FooterWrapper, AppStories, ContainerBoottom, Line,FooterDropDown,Ul,MobilRekTitle } from "./style";

const Footer = () => {
  const [width,height] = useWindowSize();
  const [drpDown1,setDrpDown1] = useState<boolean>(false);
  const [drpDown2,setDrpDown2] = useState<boolean>(false);
  const [drpDown3,setDrpDown3] = useState<boolean>(false);
  // console.log("hegh-->",height,"width-->",width);
  return (
    <FooterWrapper>
      <Container>
      {width>768 ?<>
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
        </>:<>
          <div style={{paddingTop:11,marginTop:40,marginBottom:25}}>
            <FooterDropDown onClick={()=>setDrpDown1(open=>!open)}>
              <p>Покупателям</p> <WhiteArrow style={{transform:drpDown1?'rotate(180deg)':'rotate(0deg)'}}/>
            </FooterDropDown>
            {drpDown1 && <Ul>
              <li>Оплата и доставка</li>
              <li>Возврат товара</li>
              <li>Обратная связь</li>
              <li>О сервисе</li>
              <li>Как выбрать товар</li>
              <li>Пользовательское соглашение</li>
            </Ul>}
            <FooterDropDown onClick={()=>setDrpDown2(open=>!open)}>
              <p>Партнерам</p> <WhiteArrow style={{transform:drpDown2?'rotate(180deg)':'rotate(0deg)'}}/>
            </FooterDropDown>
            {drpDown2 && <Ul>
              <li>Как начать продавать</li>
              <li>Справка для партнеров</li>
              <li>Справка маркетплейса для продавцов</li>
              <li>Личный кабинет продавца</li>
            </Ul>}
            <FooterDropDown onClick={()=>setDrpDown3(open=>!open)}>
              <p>Компания</p> <WhiteArrow style={{transform:drpDown3?'rotate(180deg)':'rotate(0deg)'}}/>
            </FooterDropDown>
            {drpDown3 && <Ul>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Новости компании</li>
              <li>Партнерская программа</li>
              <li>Производителям</li>
            </Ul>}
          </div>
          </>}
        <Line></Line>
        <MobilRekTitle >Мобильные устройства</MobilRekTitle>
              <AppStories>
                <AppStore />
                <PlayMarket />
              </AppStories>
        <Line></Line>
        <p>2020-2021 © Marketplace</p>
      </Container>
     
    </FooterWrapper>
  );
};

export default Footer;
