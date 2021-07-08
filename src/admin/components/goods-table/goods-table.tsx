import React from 'react';
import Checkbox from '../../../components/checkbox';
import {
   GoodsTableContainer, GoodsTableHeader, GoodsTableHeaderItem, GoodsTableBody, GoodsTableBodyItem,
   StatusBox, OptionBox, OptionBoxButton, OptionBoxList, OptionBoxListWrapper
} from './style';

import { ReactComponent as Checked } from '../../assets/icons/checked.svg';
import { ReactComponent as Rejected } from '../../assets/icons/rejected.svg';

const GoodsTable = () => {
   return (
      <GoodsTableContainer>
         <GoodsTableHeader>
            <GoodsTableHeaderItem>№</GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Названия товаров</GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Категория</GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Имя владельца</GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Статус</GoodsTableHeaderItem>
         </GoodsTableHeader>

         <GoodsTableBody>
            <GoodsTableBodyItem>
               <span>1</span>
               <Checkbox />
            </GoodsTableBodyItem>
            <GoodsTableBodyItem>Игровая клавиатура </GoodsTableBodyItem>
            <GoodsTableBodyItem> Мобильные телефоны</GoodsTableBodyItem>
            <GoodsTableBodyItem>Филипп Назаров</GoodsTableBodyItem>
            <GoodsTableBodyItem>
               <StatusBox isActiveStatus={true}>Активный</StatusBox>
               <OptionBox>
                  <OptionBoxButton><div></div></OptionBoxButton>
                  <OptionBoxListWrapper>
                     <OptionBoxList>
                        <Checked />
                        <span>одобрить</span>
                     </OptionBoxList>
                     <OptionBoxList>
                        <Rejected />
                        <span>отклонить</span>
                     </OptionBoxList>
                  </OptionBoxListWrapper>
               </OptionBox>
            </GoodsTableBodyItem>
         </GoodsTableBody>
      </GoodsTableContainer>
   );
}

export default GoodsTable;
