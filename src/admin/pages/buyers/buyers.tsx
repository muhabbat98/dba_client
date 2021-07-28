import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import OptionBox from '../../components/goods-table/option-box';

import { Order, StatusBox } from '../../components/goods-table/style';
import { TableBodyItem, TableBodyItemWrapper, TableHeader, TableHeaderItem } from '../../../global-styles';
import { BuyersContainer } from './style';

import { ReactComponent as FilterColumn } from "../../assets/icons/filter-column.svg";
import Avatar from '../../assets/images/buyer-table-img.png';
import Avatar2 from '../../assets/images/buyer-table-img2.png';

const Buyers = () => {
   const { push } = useHistory();
   const { pathname } = useLocation();

   const clickHandler = (id: any, ev: any) => {
      if (getParents(ev.target)) {
         console.log(id);
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
      <BuyersContainer>
         <TableHeader grids={['1fr', '2fr', '4fr', '4fr', '4fr', '1fr']}>
            <TableHeaderItem>№<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Фото<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>ФИО покупателя<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Номер телефона<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>Дата регистрации<FilterColumn /></TableHeaderItem>
            <TableHeaderItem>{" "}</TableHeaderItem>
         </TableHeader>

         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('242342fsdfsd', ev)}
            isCursor={true}
            grids={['1fr', '2fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>
               <img src={Avatar} />
            </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>+998 91 223 66 55</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('242342fsdfsd', ev)}
            isCursor={true}
            grids={['1fr', '2fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>
               <img src={Avatar2} />
            </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>+998 91 223 66 55</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('242342fsdfsd', ev)}
            isCursor={true}
            grids={['1fr', '2fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>
               <img src={Avatar} />
            </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>+998 91 223 66 55</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler('242342fsdfsd', ev)}
            isCursor={true}
            grids={['1fr', '2fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>
               <img src={Avatar2} />
            </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>+998 91 223 66 55</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
      </BuyersContainer>
   );
}

export default Buyers;
