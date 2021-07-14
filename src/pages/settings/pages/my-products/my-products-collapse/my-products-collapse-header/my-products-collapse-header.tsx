import React, { useState } from 'react';

import { MyProductsCollapseHeaderContainer, MyProductsCollapseHeaderItem, ArrowButton } from './style';

import { ReactComponent as Arrow } from '../../../../../../assets/icons/down-arrow.svg';
import MyProductsCollapseBody from '../my-products-collapse-body';

const MyProductsCollapseHeader = () => {

   const [toggle, setToggle] = useState(false);

   const toggleHandle = () => {
      setToggle(!toggle);
   };

   return (
      <>
         <MyProductsCollapseHeaderContainer>
            <MyProductsCollapseHeaderItem>Redmi Note 7 64GB...</MyProductsCollapseHeaderItem>
            <MyProductsCollapseHeaderItem>23 125 000 сум</MyProductsCollapseHeaderItem>
            <MyProductsCollapseHeaderItem>Моб. телефоны</MyProductsCollapseHeaderItem>
            <MyProductsCollapseHeaderItem>Redmi</MyProductsCollapseHeaderItem>
            <MyProductsCollapseHeaderItem>50</MyProductsCollapseHeaderItem>
            <MyProductsCollapseHeaderItem>
               <ArrowButton
                  onClick={toggleHandle}
                  className={toggle ? 'opened' : ''}
               >
                  <Arrow />
               </ArrowButton></MyProductsCollapseHeaderItem>
         </MyProductsCollapseHeaderContainer>
         {
            toggle ? <MyProductsCollapseBody /> : null
         }
      </>
   );
}

export default MyProductsCollapseHeader;
