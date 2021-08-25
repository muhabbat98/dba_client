import { useState } from 'react';
import { useParams } from 'react-router-dom';

import GoodsGrid from '../../components/goods-grid';
import GoodsTable from '../../components/goods-table';
import GoodsTopControl from '../../components/goods-top-control';
import {} from '../../..';

import { GoodsContainer, GoodsDisplayContainer } from './style';

enum DisplayType {
  GRID_TYPE = 'GRID_TYPE',
  TABLE_TYPE = 'TABLE_TYPE',
}

interface Params {
  id: string;
}

const Goods = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.TABLE_TYPE
  );
  const { id } = useParams<Params>();

  const changeDisplay = (type: DisplayType) => {
    setDisplayType(type);
  };

  const rowSelectedHandler = (item: any) => {
    console.log('rowSelected => ', item);
  };

  return (
    <GoodsContainer>
      <GoodsTopControl isShowChangeGrids={true} changeDisplay={changeDisplay} />

      <GoodsDisplayContainer>
        {displayType == DisplayType.GRID_TYPE ? (
          <GoodsGrid />
        ) : (
          <GoodsTable rowSelected={rowSelectedHandler} isRowClickable={true} />
        )}
      </GoodsDisplayContainer>
    </GoodsContainer>
  );
};

export default Goods;
