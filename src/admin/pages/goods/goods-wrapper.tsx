import React from 'react';
import Goods from './goods';
import { CheckedItemProvider } from './goods-context';

const GoodsWrapper = () => {
   return (
      <CheckedItemProvider>
         <Goods />
      </CheckedItemProvider>
   )
}

export default GoodsWrapper;
