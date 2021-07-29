import React from 'react';
import { ReactComponent } from '../../';
import { ReferenceListContainer, Title } from './style';

interface Props {
  references: any[];
}

const ReferenceList: React.FC<Props> = ({ references }) => {
  console.log(references);
  return (
    <ReferenceListContainer>
      <Header>
        <Title>Справочники</Title>
        <AddButton></AddButton>
      </Header>
    </ReferenceListContainer>
  );
};

export default ReferenceList;
