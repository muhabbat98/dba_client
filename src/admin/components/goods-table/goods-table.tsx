import React, { FC } from 'react';
import GoodsTableItem from './goods-table-item';

import {
   GoodsTableContainer, GoodsTableHeader, GoodsTableHeaderItem, GoodsTableBody
} from './style';

import { ReactComponent as FilterColumn } from "../../assets/icons/filter-column.svg";

interface GoodsTableProps {
   header: any,
   dataSource?: any,
   isRowClickable?: boolean,
   rowSelected?: (item: any) => void
}

const GoodsTable: FC<GoodsTableProps> = ({ header, isRowClickable, rowSelected, dataSource }) => {

   return (
      <GoodsTableContainer>
         <GoodsTableHeader
            grids={['1fr', '2fr', '3fr', '4fr', '4fr', '4fr']}
         >
            {
               header.map((item: any) => (
                  <GoodsTableHeaderItem
                     key={item.dataIndex}
                  >{item.title} <FilterColumn /></GoodsTableHeaderItem>
               ))
            }
         </GoodsTableHeader>

         <GoodsTableBody>
            {/* {
               dataSource.map((item: any) => <GoodsTableItem id="dadak232rfhjiwrhhwh4349h" />)
            } */}
            <GoodsTableItem
               headerCount={header.length}
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrhhwh4349h"
            />
            <GoodsTableItem
               headerCount={header.length}
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrhhssqa49h"
            />
            <GoodsTableItem
               headerCount={header.length}
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrrwwh449h"
            />
            <GoodsTableItem
               headerCount={header.length}
               rowSelected={rowSelected}
               isRowClickable={isRowClickable}
               id="dadak232rfhjiwrh3fda49h"
            />
         </GoodsTableBody>
      </GoodsTableContainer>
   );
}

export default GoodsTable;
