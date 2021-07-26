import React, { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '../../../components/checkbox';
import { GoodsTableBodyItemWrapper, GoodsTableBodyItem, StatusBox } from './style';
import OptionBox from './option-box';

import { useItemChecked } from '../../pages/goods/goods-context';

interface GoodsTableItemProps {
   id: string;
   isRowClickable?: boolean | undefined;
   rowSelected?: (item: any) => void | undefined
}

const GoodsTableItem: FC<GoodsTableItemProps> = ({ id, isRowClickable, rowSelected }) => {
   const { addId } = useItemChecked();
   const { push } = useHistory();

   const [isChecked, setIsChecked] = useState<boolean>(false);

   const check = (id: string) => {
      console.log('id: ', id);

      addId(id);
   }

   const checkHandle = (ev: any) => {
      setIsChecked(ev.target.checked);

      if (rowSelected) {
         rowSelected(id);
      }
   }

   const clickHandler = (id: any, ev: any) => {
      if (getParents(ev.target)) {

      } else {
         console.log('iddddddd=> ', id);
         // push('/sellers/about-seller/' + id);
      }
   }

   const getParents = (element: any) => {
      while (element.parentElement) {
         element = element.parentElement;
         if (element.classList.contains('option-box')) {
            return true;
         }
      }
      return false;
   }

   if (isRowClickable) {
      return (
         <GoodsTableBodyItemWrapper
            onClick={(ev: any) => clickHandler(id, ev)}
            isCursor={isRowClickable}
         >
            <GoodsTableBodyItem>
               <span>1</span>
            </GoodsTableBodyItem>
            <GoodsTableBodyItem>Игровая клавиатура </GoodsTableBodyItem>
            <GoodsTableBodyItem> Мобильные телефоны</GoodsTableBodyItem>
            <GoodsTableBodyItem>Филипп Назаров</GoodsTableBodyItem>
            <GoodsTableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
               <OptionBox />
            </GoodsTableBodyItem>
         </GoodsTableBodyItemWrapper>
      );
   }

   return (
      <GoodsTableBodyItemWrapper
         bgColor={isChecked!}
         isCursor={isRowClickable}
      >
         <GoodsTableBodyItem>
            <span>1</span>
            <Checkbox onClick={() => check(id)} callback={checkHandle} />
         </GoodsTableBodyItem>
         <GoodsTableBodyItem>Игровая клавиатура </GoodsTableBodyItem>
         <GoodsTableBodyItem> Мобильные телефоны</GoodsTableBodyItem>
         <GoodsTableBodyItem>Филипп Назаров</GoodsTableBodyItem>
         <GoodsTableBodyItem>
            <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            <OptionBox />
         </GoodsTableBodyItem>
      </GoodsTableBodyItemWrapper>
   );
}

export default GoodsTableItem;
