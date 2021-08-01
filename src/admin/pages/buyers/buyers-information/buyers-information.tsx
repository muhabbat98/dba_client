import React from 'react';
import SellerInformation from '../../sellers/about-seller/seller-information';
import { BuyersInformationContainer } from './style';

const BuyersInformation = () => {
   return (
      <BuyersInformationContainer>
         <SellerInformation />
      </BuyersInformationContainer>
   );
}

export default BuyersInformation;
