import React from 'react'
import MyProductsCollapseBody from './my-products-collapse-body';
import MyProductsCollapseHeader from './my-products-collapse-header';
import { MyProductsCollapseContainer } from './style';

const MyProductsCollapse = () => {
   return (
      <MyProductsCollapseContainer>
         <MyProductsCollapseHeader />
      </MyProductsCollapseContainer>
   )
}

export default MyProductsCollapse
