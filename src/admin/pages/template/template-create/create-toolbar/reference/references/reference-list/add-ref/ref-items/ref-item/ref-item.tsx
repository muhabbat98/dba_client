import React from 'react';
import { RefItemContainer } from './style';
import Checkbox from '../../../../../../../../../../../components/checkbox';

interface Props {
  item: any;
  handleCheck: any;
  checked: boolean;
}

const RefItem: React.FC<Props> = ({ item, handleCheck, checked }) => {
  return (
    <RefItemContainer>
      <Checkbox
        onChange={(e) => handleCheck(e, item.id)}
        checked={checked}
        defaultChecked={checked}
      />
      {item.name}
    </RefItemContainer>
  );
};

export default RefItem;
