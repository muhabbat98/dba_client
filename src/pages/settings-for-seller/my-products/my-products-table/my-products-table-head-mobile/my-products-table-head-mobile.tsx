import React, { useState } from 'react';
import MyProductsMobileCollapse from './my-products-mobile-collapse';

import {
  MyProductsTableHeadMobileContainer,
  MyProductsTableHeadMobileHeader,
  MyProductsTableHeadMobileHeaderItem,
  MyProductsTableHeadMobileLeft,
  MyProductsTableHeadMobileRight,
  CollapseBtn,
} from './style';

import { ReactComponent as ArrowDown } from '../../../../../assets/icons/down-arrow.svg';

const MyProductsTableHeadMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <MyProductsTableHeadMobileContainer>
      <MyProductsTableHeadMobileHeader>
        <MyProductsTableHeadMobileHeaderItem>
          <MyProductsTableHeadMobileLeft>
            НАИМЕНОВАНИЕ ТОВАРА
          </MyProductsTableHeadMobileLeft>
          <MyProductsTableHeadMobileRight>
            Macbook Pro
          </MyProductsTableHeadMobileRight>
        </MyProductsTableHeadMobileHeaderItem>
        <MyProductsTableHeadMobileHeaderItem>
          <MyProductsTableHeadMobileLeft>
            СТОИМОСТЬ
          </MyProductsTableHeadMobileLeft>
          <MyProductsTableHeadMobileRight>
            23 125 000 сум
          </MyProductsTableHeadMobileRight>
        </MyProductsTableHeadMobileHeaderItem>
        <MyProductsTableHeadMobileHeaderItem>
          <MyProductsTableHeadMobileLeft>
            КАТЕГОРИЯ
          </MyProductsTableHeadMobileLeft>
          <MyProductsTableHeadMobileRight>
            ООО “ДИХАУС”
          </MyProductsTableHeadMobileRight>
        </MyProductsTableHeadMobileHeaderItem>
        <MyProductsTableHeadMobileHeaderItem>
          <MyProductsTableHeadMobileLeft>
            ПРОИЗВОДИТЕЛЬ
          </MyProductsTableHeadMobileLeft>
          <MyProductsTableHeadMobileRight>
            ООО “ДИХАУС”
          </MyProductsTableHeadMobileRight>
        </MyProductsTableHeadMobileHeaderItem>
        <MyProductsTableHeadMobileHeaderItem>
          <MyProductsTableHeadMobileLeft>
            КОЛ-ВО ТОВАРА
          </MyProductsTableHeadMobileLeft>
          <MyProductsTableHeadMobileRight>50</MyProductsTableHeadMobileRight>
        </MyProductsTableHeadMobileHeaderItem>
      </MyProductsTableHeadMobileHeader>

      {open ? <MyProductsMobileCollapse /> : null}

      <CollapseBtn opened={open} onClick={() => setOpen(!open)}>
        {open ? 'Свернуть' : 'Подробно'} <ArrowDown />
      </CollapseBtn>
    </MyProductsTableHeadMobileContainer>
  );
};

export default MyProductsTableHeadMobile;
