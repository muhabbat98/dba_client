import React, { useState } from 'react';

import SellerAllProduct from './seller-all-product';
import SellerInformation from './seller-information';

import { AboutSellerContainer, TabHeader, TabHeaderItem } from './style';

enum DisplayTab {
   SELLER = 'SELLER',
   PRODUCTS = 'PRODUCTS'
}

const AboutSeller = () => {
   const [type, setType] = useState<DisplayTab>(DisplayTab.SELLER);

   const changeTab = (type: DisplayTab) => {
      setType(type);
   }

   return (
      <AboutSellerContainer>
         <TabHeader>
            <TabHeaderItem
               className={type == DisplayTab.SELLER ? 'active' : ''}
               onClick={() => changeTab(DisplayTab.SELLER)}>Информация о продавца</TabHeaderItem>
            <TabHeaderItem
               className={type == DisplayTab.PRODUCTS ? 'active' : ''}
               onClick={() => changeTab(DisplayTab.PRODUCTS)}>Все товари</TabHeaderItem>
         </TabHeader>

         {
            type == DisplayTab.SELLER ? <SellerInformation /> : <SellerAllProduct />
         }
      </AboutSellerContainer>
   );
}

export default AboutSeller;
