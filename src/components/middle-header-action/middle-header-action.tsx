import React from 'react';
import { useSellerPathname } from '../../hooks';
import MiddleHeaderActionForBuyer from './middle-header-action-for-buyer';
import MiddleHeaderActionForSeller from './middle-header-action-for-seller';

import { MiddleHeaderActionContainer } from './style';

const MiddleHeaderAction = () => {
  const { isSellerPath } = useSellerPathname();
  return (
    <MiddleHeaderActionContainer>
      {isSellerPath ? (
        <MiddleHeaderActionForSeller />
      ) : (
        <MiddleHeaderActionForBuyer />
      )}
    </MiddleHeaderActionContainer>
  );
};

export default MiddleHeaderAction;
