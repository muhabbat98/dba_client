import GoodsTableItem from './goods-table-item';

import {
   GoodsTableContainer, GoodsTableHeader, GoodsTableHeaderItem, GoodsTableBody
} from './style';

import { ReactComponent as FilterColumn } from "../../assets/icons/filter-column.svg";

const GoodsTable = () => {

   return (
      <GoodsTableContainer>
         <GoodsTableHeader>
            <GoodsTableHeaderItem>№</GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Названия товаров <FilterColumn /></GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Категория <FilterColumn /></GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Имя владельца <FilterColumn /></GoodsTableHeaderItem>
            <GoodsTableHeaderItem>Статус <FilterColumn /></GoodsTableHeaderItem>
         </GoodsTableHeader>

         <GoodsTableBody>
            <GoodsTableItem id="dadak232rfhjiwrhhwh4349h" />
            <GoodsTableItem id="dadak232rfhjiwrhhssqa49h" />
            <GoodsTableItem id="dadak232rfhjiwrrwwh449h" />
            <GoodsTableItem id="dadak232rfhjiwrh3fda49h" />
         </GoodsTableBody>
      </GoodsTableContainer>
   );
}

export default GoodsTable;
