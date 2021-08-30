import React, { useState, FC } from 'react';

import SearchInput from '../../components/search-input';
import SettingsDropdown from '../../../components/settings-dropdown';

import {
  GoodsTopControlContainer,
  GoodsTopControlBreadcrumb,
  GoodsTopControlRight,
  DisplayTypeBox,
  DisplayTable,
  DisplayGrid,
  FilterBtn,
  GoodsFilterBox,
  GoodsFilterBoxItem,
  FilterInput,
} from './style';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as GridIcon } from '../../assets/icons/grid-icon.svg';
import { ReactComponent as TableIcon } from '../../assets/icons/table-icon.svg';

enum DisplayType {
  GRID_TYPE = 'GRID_TYPE',
  TABLE_TYPE = 'TABLE_TYPE',
}

interface GoodsTopControlProps {
  changeDisplay?: (type: DisplayType) => void | null;
  isShowChangeGrids: boolean;
}

const GoodsTopControl: FC<GoodsTopControlProps> = ({
  changeDisplay,
  isShowChangeGrids,
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.TABLE_TYPE
  );

  const changeDisplays = (type: DisplayType) => {
    setDisplayType(type);
    if (changeDisplay) {
      changeDisplay(type);
    }
  };

  const changeHandle = (ev: any) => {};

  return (
    <>
      <GoodsTopControlContainer>
        <GoodsTopControlBreadcrumb>
          {/* Категории/Электроника{' '} */}
        </GoodsTopControlBreadcrumb>

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

          {isShowChangeGrids ? (
            <DisplayTypeBox>
              <DisplayTable
                className={
                  displayType == DisplayType.TABLE_TYPE ? 'active' : ''
                }
                onClick={() => changeDisplays(DisplayType.TABLE_TYPE)}
              >
                <TableIcon />
              </DisplayTable>

              <DisplayGrid
                className={displayType == DisplayType.GRID_TYPE ? 'active' : ''}
                onClick={() => changeDisplays(DisplayType.GRID_TYPE)}
              >
                <GridIcon />
              </DisplayGrid>
            </DisplayTypeBox>
          ) : null}

          <FilterBtn
            isOpen={openFilter}
            onClick={() => setOpenFilter(!openFilter)}
          >
            <FilterIcon />
            Фильтр
          </FilterBtn>
        </GoodsTopControlRight>
      </GoodsTopControlContainer>

      {openFilter ? (
        <GoodsFilterBox>
          <GoodsFilterBoxItem>
            <FilterInput placeholder="Название товара" />
          </GoodsFilterBoxItem>

          <GoodsFilterBoxItem>
            <SettingsDropdown
              isFromAdmin={true}
              label="Категория"
              options={['Категория', 'Категория2']}
            />
          </GoodsFilterBoxItem>

          <GoodsFilterBoxItem>
            <FilterInput placeholder="ФИО руководителя" />
          </GoodsFilterBoxItem>

          <GoodsFilterBoxItem>
            <SettingsDropdown
              isFromAdmin={true}
              label="Статус"
              options={['Активный', 'Неактивный']}
            />
          </GoodsFilterBoxItem>
        </GoodsFilterBox>
      ) : null}
    </>
  );
};

export default GoodsTopControl;
