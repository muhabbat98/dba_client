import React from 'react';
import { ReferenceContainer } from './style';
import References from './references';

interface Props {
  active: boolean;
}

const Reference: React.FC<Props> = ({ active }) => {
  return (
    <ReferenceContainer active={active}>
      <References />
    </ReferenceContainer>
  );
};

export default Reference;
