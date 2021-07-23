import React from 'react';
import Title from '../../../components/products-title';

import {
   GoodsItemContainer, GoodsItemContainerHeader, GoodsItemBreadCrumb, GoodsItemRight, EditButton, GoodName,
   GoodsImages, GoodsImageItem, GoodsImg, Circle, GoodsItemInformation, GoodsItemInformationItem,
   GoodsItemInformationItemLeft, GoodsItemInformationItemRight, GoodItemInformationMore
} from './style';

import { ReactComponent as Edit } from '../../assets/icons/edit-icon.svg';
import GoodsItem1 from '../../assets/images/goods-item1.png';
import GoodsItem2 from '../../assets/images/goods-item2.png';
import GoodsItem3 from '../../assets/images/goods-item3.png';
import GoodsItem4 from '../../assets/images/goods-item4.png';
import GoodsItem5 from '../../assets/images/goods-item5.png';
import GoodsItem6 from '../../assets/images/goods-item5.png';
import GoodsItem7 from '../../assets/images/goods-item6.png';

const GoodsItem = () => {

   return (
      <GoodsItemContainer>
         <GoodsItemContainerHeader>
            <GoodsItemBreadCrumb>Информация о товара/Defender, Геймпад</GoodsItemBreadCrumb>
            <GoodsItemRight>
               <EditButton >
                  <Circle>
                     <Edit />
                  </Circle>
                  Изменить
               </EditButton>
            </GoodsItemRight>
         </GoodsItemContainerHeader>

         <GoodName>Defender / Геймпад (джойстик) Omega USB, </GoodName>
         <GoodsImages>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem1} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem2} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem3} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem4} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem5} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem6} />
            </GoodsImageItem>
            <GoodsImageItem>
               <GoodsImg src={GoodsItem7} />
            </GoodsImageItem>
         </GoodsImages>

         <Title title="Информация о товаре" />
         <GoodsItemInformation>
            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Наименование товара</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Samsung / Смартфон Galaxy A51 128Gb</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Количество на складе</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>100 штук</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Стоимость</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>3 109 000 сум</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Категория</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Мобильные телефоны</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Доставка </GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Есть</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Охват территории</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Ташкент</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Количество проданного товара</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>20/100</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Производитель</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Samsung</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>
         </GoodsItemInformation>
         <GoodItemInformationMore>Развернуть информацию о товаре</GoodItemInformationMore>

         <Title title="Описание" />
         <GoodsItemInformation>
            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Играть, смотреть фильмы, бродить по сети и работать в многозадачном режиме
                  без перерыва на ярком 6.5-дюймовом sAMOLED экране с FHD+ разрешением. Четыре камеры для снимков с
                  глубокой перспективой. Основная камера 48МП. Играть, смотреть фильмы, бродить по сети и работать в многозадачном режиме
                  без перерыва на ярком 6.5-дюймовом sAMOLED экране с FHD+ разрешением. Четыре камеры для снимков с
                  глубокой перспективой. Основная камера 48МП. Играть, смотреть фильмы, бродить по сети и работать в многозадачном режиме
                  без перерыва на ярком 6.5-дюймовом sAMOLED экране с FHD+ разрешением. Четыре камеры для снимков с
                  глубокой перспективой. Основная камера 48МП  </GoodsItemInformationItemLeft>
            </GoodsItemInformationItem>
         </GoodsItemInformation>
         <GoodItemInformationMore>Развернуть описание</GoodItemInformationMore>

         <Title title="Характеристика" />
         <GoodsItemInformation>
            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Разрешение экрана:</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>2532х1170 NFC; Bluetooth 5.0; Wi-Fi 802.11ax</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Вид разъема:</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>1xLightning</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Основная камера:</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>12 Мп</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>
         </GoodsItemInformation>
         <GoodItemInformationMore>Развернуть информацию о товаре</GoodItemInformationMore>

         <Title title="О прадавца" />
         <GoodsItemInformation>
            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Название предприятия</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Sherin</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Номер телефона(мобильный)</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>+99890 002 6655</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Основной адрес</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>SТашкент, Юнусабадский район, Анорзор 5</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>

            <GoodsItemInformationItem>
               <GoodsItemInformationItemLeft>Тип</GoodsItemInformationItemLeft>
               <GoodsItemInformationItemRight>Супермаркет</GoodsItemInformationItemRight>
            </GoodsItemInformationItem>
         </GoodsItemInformation>
         <GoodItemInformationMore>Развернуть информацию о товаре</GoodItemInformationMore>

      </GoodsItemContainer>
   );
};

export default GoodsItem;