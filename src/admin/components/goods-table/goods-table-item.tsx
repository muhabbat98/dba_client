import React, { useState } from 'react';
import Checkbox from '../../../components/checkbox';
import { GoodsTableBodyItemWrapper, GoodsTableBodyItem, StatusBox } from './style';
import OptionBox from './option-box';

const GoodsTableItem = () => {
   const [isChecked, setIsChecked] = useState<boolean>(false);

   const check = (id: string) => {

   }

   const checkHandle = (ev: any) => {
      setIsChecked(ev.target.checked);
   }

   return (
      <GoodsTableBodyItemWrapper
         bgColor={isChecked!}
         onClick={() => check("5r47fge65r45345344g56re4g56er")}>
         <GoodsTableBodyItem>
            <span>1</span>
            <Checkbox callback={checkHandle} />
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
