import React from 'react';
import RefItem from './ref-item';
import { RefItemsContainer } from './style';

interface Props {
  items: any[];
  handleCheck: (id: string) => void;
}

const RefItems: React.FC<Props> = ({ items, handleCheck }) => {
  return (
    <RefItemsContainer>
      {items.map((item) => (
        <RefItem item={item} handleCheck={handleCheck} />
      ))}
    </RefItemsContainer>
  );
};

export default RefItems;
