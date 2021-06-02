import React from 'react';

import SettingsInput from '../../components/settings-input';
import Checkbox from '../../components/checkbox';
import FilterInput from './filter-input';
import FilterCollapse from './filter-collapse';

import { ProductsFilterWrapper, FilterCollapseItem, FilterUl, FilterLi, ClearFilterBtn } from './style';
import PriceInput from './price-input';

function ProductsFilter() {
   return (
      <ProductsFilterWrapper>
         <FilterCollapse headerTitle="Цена, UZS">
            <FilterCollapseItem>
               <PriceInput placeholder="От 10" />
               <PriceInput placeholder="До 20" />
               <FilterUl>
                  <FilterLi><Checkbox label="В наличие" /></FilterLi>
                  <FilterLi><Checkbox label="С учётом доставки курьером" /></FilterLi>
                  <FilterLi><Checkbox label="С учётом самовызова" /></FilterLi>
                  <FilterLi><Checkbox label="Без учёта доставки" /></FilterLi>
               </FilterUl>
            </FilterCollapseItem>
         </FilterCollapse>

         <FilterCollapse headerTitle="Бренд">
            <FilterCollapseItem>
               <FilterInput placeholder=" Я ищу..."/>
               <FilterUl>
                  <FilterLi><Checkbox label="Apple" /></FilterLi>
                  <FilterLi><Checkbox label="Samsung" /></FilterLi>
                  <FilterLi><Checkbox label="Xiaomi" /></FilterLi>
                  <FilterLi><Checkbox label="Asus" /></FilterLi>
                  <FilterLi><Checkbox label="ARS" /></FilterLi>
                  <FilterLi><Checkbox label="Nokia" /></FilterLi>
                  <FilterLi><Checkbox label="Motorolla" /></FilterLi>
                  <FilterLi><Checkbox label="Fly" /></FilterLi>
                  <FilterLi><Checkbox label="LG" /></FilterLi>
               </FilterUl>
            </FilterCollapseItem>
         </FilterCollapse>

         <FilterCollapse headerTitle="Разрешение экрана в пикселях">
            <FilterCollapseItem>
               <FilterInput placeholder="Поиск"/>
               <FilterUl>
                  <FilterLi><Checkbox label="1132x540" /></FilterLi>
                  <FilterLi><Checkbox label="1136x640" /></FilterLi>
                  <FilterLi><Checkbox label="1270x720" /></FilterLi>
                  <FilterLi><Checkbox label="1280x600" /></FilterLi>
                  <FilterLi><Checkbox label="1280x720" /></FilterLi>
                  <FilterLi><Checkbox label="812x325" /></FilterLi>
                  <FilterLi><Checkbox label="128x160" /></FilterLi>
                  <FilterLi><Checkbox label="128x96" /></FilterLi>
                  <FilterLi><Checkbox label="128x96" /></FilterLi>
               </FilterUl>
            </FilterCollapseItem>
         </FilterCollapse>

         <FilterCollapse headerTitle="Количество основных камер">
            <FilterCollapseItem>
               <FilterUl>
                  <FilterLi><Checkbox label="1" /></FilterLi>
                  <FilterLi><Checkbox label="2" /></FilterLi>
                  <FilterLi><Checkbox label="3" /></FilterLi>
                  <FilterLi><Checkbox label="4" /></FilterLi>
                  <FilterLi><Checkbox label="5" /></FilterLi>
               </FilterUl>
            </FilterCollapseItem>
         </FilterCollapse>

         <FilterCollapse headerTitle="Память">
            <FilterCollapseItem>
               <FilterUl>
                  <FilterLi><Checkbox label="128 ГБ" /></FilterLi>
                  <FilterLi><Checkbox label="64 ГБ" /></FilterLi>
                  <FilterLi><Checkbox label="256 ГБ" /></FilterLi>
                  <FilterLi><Checkbox label="32 ГБ" /></FilterLi>
                  <FilterLi><Checkbox label="16 ГБ" /></FilterLi>
               </FilterUl>
            </FilterCollapseItem>
         </FilterCollapse>
         <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}><ClearFilterBtn>Очистить</ClearFilterBtn></div>

      </ProductsFilterWrapper>
   )
}

export default ProductsFilter;
