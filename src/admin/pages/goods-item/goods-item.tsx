import React from 'react';

import SearchInput from '../../components/search-input';

import {
   GoodsItemContainer, GoodsItemContainerHeader, GoodsItemBreadCrumb, GoodsItemRight, EditButton, GoodName,
   GoodsImages, GoodsImageItem, GoodsImg
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
                  <Edit />
                  Изменить
               </EditButton>
               <SearchInput label="Искать  ..." />
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
      </GoodsItemContainer>
   );
};

export default GoodsItem;