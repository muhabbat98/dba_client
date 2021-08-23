import React from 'react';
import RefItem from './ref-item';
import { RefItemsContainer } from './style';

interface Props {
  items: any[];
  handleCheck: any;
  selected: any;
}

const RefItems: React.FC<Props> = ({ items, handleCheck, selected }) => {
  const selectedItems = items.map((item) => {
    let isExact = selected.find((ref: any) => ref == item.id);
    const checked = !!isExact;
    return (
      <RefItem
        key={item.id}
        checked={checked}
        item={item}
        handleCheck={handleCheck}
      />
    );
  });

  return <RefItemsContainer>{selectedItems}</RefItemsContainer>;
};

export default RefItems;
