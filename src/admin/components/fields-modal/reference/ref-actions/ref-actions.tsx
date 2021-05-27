import React from 'react';
import { RefActionsContainer, DeleteContainer, EditContainer } from './style';
import { ReactComponent as Delete } from '../../../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';
import Checkbox from '../../../../components/checkbox';

interface RefActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  refItem?: any;
  checkboxHandler?: (e: any, id: string) => void;
}

const RefActions: React.FC<RefActionsProps> = ({
  checkboxHandler,
  refItem,
  onEdit,
  onDelete,
}) => {
  return (
    <RefActionsContainer>
      {refItem && (
        <Checkbox
          callback={(e) => checkboxHandler && checkboxHandler(e, refItem.id)}
          value={refItem.selected}
          checked={refItem.selected}
        />
      )}

      <DeleteContainer onClick={onDelete}>
        <Delete />
      </DeleteContainer>
      <EditContainer onClick={onEdit}>
        <Edit />
      </EditContainer>
    </RefActionsContainer>
  );
};

export default RefActions;
