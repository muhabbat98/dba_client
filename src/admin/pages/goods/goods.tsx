import { useState, useContext } from 'react';

import GoodsGrid from '../../components/goods-grid';
import GoodsTable from '../../components/goods-table';
import GoodsTopControl from '../../components/goods-top-control';

import {
  GoodsContainer, GoodsDisplayContainer,
} from './style';

enum DisplayType {
  GRID_TYPE = "GRID_TYPE",
  TABLE_TYPE = "TABLE_TYPE"
}

const Goods = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.TABLE_TYPE);

  const changeDisplay = (type: DisplayType) => {
    setDisplayType(type);
  }

  const rowSelectedHandler = (item: any) => {
    console.log('Item: => ', item)
  }

  return (
    <GoodsContainer>
      <GoodsTopControl changeDisplay={changeDisplay} />

      <GoodsDisplayContainer>
        {
          displayType == DisplayType.GRID_TYPE ? <GoodsGrid />
            : <GoodsTable rowSelected={rowSelectedHandler} isRowClickable={true} />
        }
      </GoodsDisplayContainer>

    </GoodsContainer >
  );
};

export default Goods;
