import React from 'react';

import SearchInput from '../../components/search-input';

import {
   GoodsItemContainer, GoodsItemContainerHeader, GoodsItemBreadCrumb, GoodsItemRight, EditButton,

} from './style';

import { ReactComponent as Edit } from '../../assets/icons/edit-icon.svg';

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
      </GoodsItemContainer>
   );
};

export default GoodsItem;