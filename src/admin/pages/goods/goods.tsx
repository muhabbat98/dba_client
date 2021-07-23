import { useState, useContext } from 'react';

import {
  GoodsContainer, GoodsTopControl, GoodsTopControlBreadcrumb, GoodsTopControlRight, DisplayTypeBox, DisplayTable,
  DisplayGrid, GoodsDisplayContainer, FilterBtn, GoodsFilterBox, GoodsFilterBoxItem, FilterInput
} from './style';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as GridIcon } from '../../assets/icons/grid-icon.svg';
import { ReactComponent as TableIcon } from '../../assets/icons/table-icon.svg';
import GoodsGrid from '../../components/goods-grid';
import GoodsTable from '../../components/goods-table';
import SearchInput from '../../components/search-input';
import SettingsDropdown from '../../../components/settings-dropdown';

enum DisplayType {
  GRID_TYPE = "GRID_TYPE",
  TABLE_TYPE = "TABLE_TYPE"
}

const Goods = () => {

  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.TABLE_TYPE);
  const [openFilter, setOpenFilter] = useState(false);

  const changeDisplay = (type: DisplayType) => {
    setDisplayType(type);
  }

  const changeHandle = (ev: any) => {
    console.log(ev.target.value);
  }

  return (
    <GoodsContainer>
      <GoodsTopControl>
        <GoodsTopControlBreadcrumb>Категории/Электроника </GoodsTopControlBreadcrumb>

        <GoodsTopControlRight>
          {/* <GoodsIconButtons>
            <GoodsIconButton>
              <Excel />
            </GoodsIconButton>
            <GoodsIconButton>
              <Printer />
            </GoodsIconButton>
            <GoodsIconButton>
              <Delete />
            </GoodsIconButton>
          </GoodsIconButtons> */}

          <SearchInput
            label="Искать категории ..."
            callback={changeHandle}
            style={{ marginRight: '16px' }}
          />

          <DisplayTypeBox>
            <DisplayTable
              className={displayType == DisplayType.TABLE_TYPE ? 'active' : ''}
              onClick={() => changeDisplay(DisplayType.TABLE_TYPE)}>
              <TableIcon />
            </DisplayTable>

            <DisplayGrid
              className={displayType == DisplayType.GRID_TYPE ? 'active' : ''}
              onClick={() => changeDisplay(DisplayType.GRID_TYPE)}>
              <GridIcon />
            </DisplayGrid>
          </DisplayTypeBox>

          <FilterBtn isOpen={openFilter} onClick={() => setOpenFilter(!openFilter)}>
            <FilterIcon />
            Фильтр
          </FilterBtn>
        </GoodsTopControlRight>
      </GoodsTopControl>

      {
        openFilter ? (
          <GoodsFilterBox>
            <GoodsFilterBoxItem>
              <FilterInput placeholder="Название товара" />
            </GoodsFilterBoxItem>

            <GoodsFilterBoxItem>
              <SettingsDropdown isFromAdmin={true} label="Категория" options={['Категория', 'Категория2']} />
            </GoodsFilterBoxItem>


            <GoodsFilterBoxItem>
              <FilterInput placeholder="ФИО руководителя" />
            </GoodsFilterBoxItem>

            <GoodsFilterBoxItem>
              <SettingsDropdown isFromAdmin={true} label="Статус" options={['Активный', 'Неактивный']} />
            </GoodsFilterBoxItem>
          </GoodsFilterBox>
        ) : null
      }

      <GoodsDisplayContainer>
        {
          displayType == DisplayType.GRID_TYPE ? <GoodsGrid /> : <GoodsTable />
        }
      </GoodsDisplayContainer>
    </GoodsContainer >
  );
};

export default Goods;
