import React from 'react';
import { ReferenceContainer } from './style';
import References from './references';

interface Props {
  active: boolean;
  fetFields: any;
}

const Reference: React.FC<Props> = ({ active, fetFields }) => {
  return (
    <ReferenceContainer active={active}>
      <References fetFields={fetFields} />
    </ReferenceContainer>
  );
};

export default Reference;
