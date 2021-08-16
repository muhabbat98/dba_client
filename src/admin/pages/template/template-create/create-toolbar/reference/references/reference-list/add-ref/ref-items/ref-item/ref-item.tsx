import React from 'react';
import { RefItemContainer } from './style';
import Checkbox from '../../../../../../../../../../../components/checkbox';

interface Props {
  item: any;
  handleCheck: (id: string) => void;
}

const RefItem: React.FC<Props> = ({ item, handleCheck }) => {
  return (
    <RefItemContainer>
      <Checkbox onChange={() => handleCheck(item.id)} />
      {item.name}
    </RefItemContainer>
  );
};

export default RefItem;
