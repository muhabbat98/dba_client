import React from 'react';
import References from '../../components/fields-modal/reference';
import { ReferencePageProvider } from './context';

const Reference = () => {
  return (
    <ReferencePageProvider>
      <div>
        <References />
      </div>
    </ReferencePageProvider>
  );
};

export default Reference;
