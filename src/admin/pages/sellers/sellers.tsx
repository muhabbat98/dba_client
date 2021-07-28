import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import OptionBox from '../../components/goods-table/option-box';
import GoodsTopControl from '../../components/goods-top-control';

import {
  TableBodyItem,
  TableBodyItemWrapper,
  TableHeader,
  TableHeaderItem,
} from '../../../global-styles';
import { Order, StatusBox } from '../../components/goods-table/style';

import { ReactComponent as FilterColumn } from '../../assets/icons/filter-column.svg';
import AboutSeller from './about-seller';

import { SellersContainer } from './style';

const Sellers = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const clickHandler = (id: any) => {
    push(`${pathname}/${id}`);
  };

  return (
    <SellersContainer>
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
        onClick={() => clickHandler('3113dfdkg00e9ej')}
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
        onClick={() => clickHandler('3113dfdkg00werrw')}
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
        onClick={() => clickHandler('3113dfdkg0234243')}
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
        onClick={() => clickHandler('3113dfdkfsf44533')}
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
        onClick={() => clickHandler('3113dfdk234sfs34')}
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
        onClick={() => clickHandler('3113dfdkg4fsfsf3')}
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
    </SellersContainer>
  );
};

export default Sellers;
