import React from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus-btn.svg';
import {
  ReferenceListContainer,
  Title,
  AddButton,
  Add,
  Header,
  Divider,
  EmptyMessage,
} from './style';
import ReferencesItemRow from '../references-item-row';

interface Props {
  references: any[];
  fetchReferenceItems: (row: any) => void;
  currentReference?: any;
  isParent?: boolean;
  openModal: (isAdding: boolean, row: any, isParent?: boolean) => void;
  fetchReferences: () => void;
}

const ReferenceList: React.FC<Props> = ({
  references,
  fetchReferenceItems,
  currentReference,
  isParent,
  openModal,
  fetchReferences,
}) => {
  return (
    <ReferenceListContainer>
      <Header>
        <Title>{isParent ? <>Справочники</> : currentReference?.name}</Title>
        <AddButton
          onClick={() => openModal(true, isParent ? null : currentReference)}
        >
          <Plus />
          <Add>Добавить</Add>
        </AddButton>
      </Header>
      <Divider />
      {references.length > 0 ? (
        references.map((ref) => (
          <ReferencesItemRow
            isActive={ref.id === currentReference?.id}
            key={ref.id}
            row={ref}
            fetchReferenceItems={fetchReferenceItems}
            isParent={isParent}
            fetchReferences={fetchReferences}
            currentReference={currentReference}
            openModal={openModal}
          />
        ))
      ) : (
        <EmptyMessage>Пуста</EmptyMessage>
      )}
    </ReferenceListContainer>
  );
};

export default ReferenceList;
