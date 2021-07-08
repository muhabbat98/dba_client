import React, { useState } from 'react';

import {
  GoodsContainer, GoodsTopControl, GoodsTopControlBreadcrumb, GoodsTopControlRight,
  GoodsIconButtons, GoodsIconButton, SearchInputBox, SearchInput, DisplayTypeBox, DisplayTable,
  DisplayGrid, GoodsDisplayContainer,
} from './style';

import { ReactComponent as Excel } from '../../assets/icons/excel.svg';
import { ReactComponent as Printer } from '../../assets/icons/printer.svg';
import { ReactComponent as Delete } from '../../assets/icons/trash.svg';
import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';
import { ReactComponent as TableIcon } from '../../assets/icons/table-icon.svg';
import { ReactComponent as GridIcon } from '../../assets/icons/grid-icon.svg';
import GoodsGrid from '../../components/goods-grid';
import GoodsTable from '../../components/goods-table';

enum DisplayType {
  GRID_TYPE = "GRID_TYPE",
  TABLE_TYPE = "TABLE_TYPE"
}

const Goods = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.TABLE_TYPE);

  const changeDisplay = (type: DisplayType) => {
    setDisplayType(type);
  }

  return (
    <GoodsContainer>
      <GoodsTopControl>
        <GoodsTopControlBreadcrumb>Категории/Электроника </GoodsTopControlBreadcrumb>

        <GoodsTopControlRight>
          <GoodsIconButtons>
            <GoodsIconButton>
              <Excel />
            </GoodsIconButton>
            <GoodsIconButton>
              <Printer />
            </GoodsIconButton>
            <GoodsIconButton>
              <Delete />
            </GoodsIconButton>
          </GoodsIconButtons>

          <SearchInputBox>
            <SearchInput placeholder="Искать категории ..." />
            <Search />
          </SearchInputBox>

          <DisplayTypeBox>
            <DisplayGrid
              className={displayType == DisplayType.GRID_TYPE ? 'active' : ''}
              onClick={() => changeDisplay(DisplayType.GRID_TYPE)}>
              <GridIcon />
            </DisplayGrid>
            <DisplayTable 
              className={displayType == DisplayType.TABLE_TYPE ? 'active' : ''}
              onClick={() => changeDisplay(DisplayType.TABLE_TYPE)}>
              {/* <TableIcon /> */}
            </DisplayTable>
          </DisplayTypeBox>
        </GoodsTopControlRight>
      </GoodsTopControl>

      <GoodsDisplayContainer>
        {
          displayType == DisplayType.GRID_TYPE ? <GoodsGrid /> : <GoodsTable />
        }
      </GoodsDisplayContainer>
    </GoodsContainer>
  );
};

export default Goods;
