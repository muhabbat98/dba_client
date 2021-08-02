import React from 'react';

import { TableBodyItem, TableBodyItemWrapper, TableHeader, TableHeaderItem } from '../../../../../global-styles';
import { SellerProductContainer } from './style';
import { ReactComponent as FilterColumn } from "../../../../assets/icons/filter-column.svg";
import { Order, StatusBox } from '../../../../components/goods-table/style';
import OptionBox from '../../../../components/goods-table/option-box';

const SellerAllProduct = () => {

   const clickHandler = (id: any, ev: any) => {
   }

   return (
      <SellerProductContainer>
         <TableHeader style={{ marginTop: '30px' }} grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}>
            <TableHeaderItem>№<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>ФИО руководителя<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Название предприятия<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Дата регистрации<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Статус<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>{" "}</TableHeaderItem>
         </TableHeader>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler("r23fewwrwrwr43", ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler("r23fewwrwrwr43", ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler("r23fewwrwrwr43", ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler("r23fewwrwrwr43", ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler("r23fewwrwrwr43", ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
      </SellerProductContainer>
   );
}

export default SellerAllProduct;
