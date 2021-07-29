import React from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus-btn.svg';
import { ReferenceListContainer, Title, AddButton, Add, Header } from './style';

interface Props {
  references: any[];
}

const ReferenceList: React.FC<Props> = ({ references }) => {
  console.log(references);
  return (
    <ReferenceListContainer>
      <Header>
        <Title>Справочники</Title>
        <AddButton>
          <Plus />
          <Add>Добавить</Add>
        </AddButton>
      </Header>
    </ReferenceListContainer>
  );
};

export default ReferenceList;
