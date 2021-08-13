import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MyProductsTableContainer,
  MyProductsTableTop,
  FilterText,
  MyProductsFilterBtn,
  MyProductsAddBtn,
  MyProductsHead,
  MyProductsHeadItem,
  MyProductsFilterSection,
} from './style';

import { ReactComponent as FilterIcon } from '../../../../assets/icons/filter-icon.svg';
import { ReactComponent as AddProductIcon } from '../../../../assets/icons/add-product-icon.svg';
import MyProductsCollapse from '../my-products-collapse';
import SettingsInput from '../../../../components/settings-input';
import SettingsDropdown from '../../../../components/settings-dropdown';

const MyProductsTable = () => {
  const { push } = useHistory();

  const [toggleFilter, setToggleFilter] = useState(false);
  const [state, setState] = useState('');

  const goToAddProductPage = () => {
    push(`/seller/add-product`);
  };

  return (
    <MyProductsTableContainer>
      <MyProductsTableTop>
        <MyProductsAddBtn>
          <AddProductIcon />
          <FilterText onClick={goToAddProductPage}>Добавить товар</FilterText>
        </MyProductsAddBtn>

        <MyProductsFilterBtn onClick={() => setToggleFilter(!toggleFilter)}>
          <FilterIcon />
          <FilterText>Фильтр</FilterText>
        </MyProductsFilterBtn>
      </MyProductsTableTop>

      {toggleFilter ? (
        <MyProductsFilterSection>
          <SettingsInput placeholder="НАИМЕНОВАНИЕ ТОВАРА" />
          <SettingsDropdown
            label="Статус"
            options={['Завершен', 'Активный']}
            getOption={setState}
          />
          <SettingsDropdown
            label="Причина"
            options={['Товар не прибыл', 'Товар не соотв...']}
            getOption={setState}
          />
          <SettingsDropdown
            label="Покупатель"
            options={['ООО "ДИХАУС', 'ООО "ДИХАУС']}
            getOption={setState}
          />
        </MyProductsFilterSection>
      ) : null}

      <MyProductsHead>
        <MyProductsHeadItem>НАИМЕНОВАНИЕ ТОВАРА</MyProductsHeadItem>
        <MyProductsHeadItem>СТОИМОСТЬ</MyProductsHeadItem>
        <MyProductsHeadItem>КАТЕГОРИЯ</MyProductsHeadItem>
        <MyProductsHeadItem>ПРОИЗВОДИТЕЛЬ</MyProductsHeadItem>
        <MyProductsHeadItem>КОЛ-ВО ТОВАРА</MyProductsHeadItem>
        <MyProductsHeadItem> </MyProductsHeadItem>
      </MyProductsHead>

      <MyProductsCollapse />
    </MyProductsTableContainer>
  );
};

export default MyProductsTable;
