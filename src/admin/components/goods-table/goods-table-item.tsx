import React, { useState, FC } from 'react';
import Checkbox from '../../../components/checkbox';
import { GoodsTableBodyItemWrapper, GoodsTableBodyItem, StatusBox } from './style';
import OptionBox from './option-box';

import { useItemChecked } from '../../pages/goods/goods-context';

interface GoodsTableItemProps {
   id: string;
}

const GoodsTableItem: FC<GoodsTableItemProps> = ({ id }) => {
   const { addId } = useItemChecked();

   const [isChecked, setIsChecked] = useState<boolean>(false);

   const check = (id: string) => {
      addId(id);
   }

   const checkHandle = (ev: any) => {
      setIsChecked(ev.target.checked);
   }

   return (
      <GoodsTableBodyItemWrapper
         bgColor={isChecked!}
      // onClick={() => check(id)}
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
