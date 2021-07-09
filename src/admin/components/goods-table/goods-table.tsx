import GoodsTableItem from './goods-table-item';

import {
   GoodsTableContainer, GoodsTableHeader, GoodsTableHeaderItem, GoodsTableBody
} from './style';

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
            <GoodsTableItem />
            <GoodsTableItem />
            <GoodsTableItem />
            <GoodsTableItem />
         </GoodsTableBody>
      </GoodsTableContainer>
   );
}

export default GoodsTable;
