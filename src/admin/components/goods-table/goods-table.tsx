import React, { FC } from 'react';
import GoodsTableItem from './goods-table-item';

import {
   GoodsTableContainer
} from './style';

import { ReactComponent as FilterColumn } from "../../assets/icons/filter-column.svg";
import { TableBody, TableHeader, TableHeaderItem } from '../../../global-styles';

interface GoodsTableProps {
   dataSource?: any,
   isRowClickable?: boolean,
   rowSelected?: (item: any) => void
}

const GoodsTable: FC<GoodsTableProps> = ({ isRowClickable, rowSelected, dataSource }) => {

   return (
      <GoodsTableContainer>
         <TableHeader grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}>
            <TableHeaderItem>№<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Названия товаров<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Категория<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Имя владельца<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Статус<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>{" "}</TableHeaderItem>
         </TableHeader>

         <TableBody>
            {/* {
               dataSource.map((item: any) => <GoodsTableItem id="dadak232rfhjiwrhhwh4349h" />)
            } */}
            <GoodsTableItem
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrhhwh4349h"
            />
            <GoodsTableItem
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrhhssqa49h"
            />
            <GoodsTableItem
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrrwwh449h"
            />
            <GoodsTableItem
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrh3fda49h"
            />
         </TableBody>
      </GoodsTableContainer>
   );
}

export default GoodsTable;
