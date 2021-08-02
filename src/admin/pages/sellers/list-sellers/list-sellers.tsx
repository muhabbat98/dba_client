import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import OptionBox from '../../../components/goods-table/option-box';
import GoodsTopControl from '../../../components/goods-top-control';

import {
   TableBodyItem,
   TableBodyItemWrapper,
   TableHeader,
   TableHeaderItem,
} from '../../../../global-styles';
import { Order, StatusBox } from '../../../components/goods-table/style';

import { ReactComponent as FilterColumn } from '../../../assets/icons/filter-column.svg';

import { ListSellersContainer } from './style';

const ListSellers = () => {
   const { push } = useHistory();
   const { pathname } = useLocation();

   const clickHandler = (id: any, ev: any) => {
      if (getParents(ev.target)) {
      } else {
         push(`${pathname}/${id}`);
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

   return (
      <ListSellersContainer>
         <GoodsTopControl isShowChangeGrids={false} />

         <TableHeader grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}>
            <TableHeaderItem>
               №<FilterColumn />
            </TableHeaderItem>
            <TableHeaderItem>
               Названия товаров
               <FilterColumn />
            </TableHeaderItem>
            <TableHeaderItem>
               Категория
               <FilterColumn />
            </TableHeaderItem>
            <TableHeaderItem>
               Имя владельца
               <FilterColumn />
            </TableHeaderItem>
            <TableHeaderItem>
               Статус
               <FilterColumn />
            </TableHeaderItem>
            <TableHeaderItem> </TableHeaderItem>
         </TableHeader>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdkg00e9ej', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdkg00werrw', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdkg0234243', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdkfsf44533', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdk234sfs34', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('3113dfdkg4fsfsf3', ev)}
            isCursor={true}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem> Филипп Назаров </TableBodyItem>
            <TableBodyItem> “OOO Sherin”</TableBodyItem>
            <TableBodyItem>20.02.2021</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
      </ListSellersContainer>
   );
};

export default ListSellers;
