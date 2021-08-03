import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';
import { ReactComponent as Edit } from '../../../assets/icons/edit2.svg';
import { ReactComponent as Trash } from '../../../assets/icons/trash2.svg';
import { ReferencesItemRowContainer, Name, Action, Wrapper } from './style';
import { axios, useActionCreators, useError } from '../../../../hooks';

interface ReferencesItemRowProps {
  row: any;
  fetchReferenceItems: (
    row: any,
    isDeletedFetch: boolean,
    currentReference: any
  ) => void;
  isActive: boolean;
  isParent?: boolean;
  fetchReferences: () => void;
  currentReference: any;
  openModal: any;
}

const ReferencesItemRow: React.FC<ReferencesItemRowProps> = ({
  isActive,
  row,
  fetchReferenceItems,
  isParent,
  fetchReferences,
  currentReference,
  openModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { setConfirm, cleanConfirm, setAlertMessage } = useActionCreators();
  const { checkError } = useError();

  function editRow(e: any) {
    e.stopPropagation();
    console.log('edit');
    openModal(false, row, isParent);
  }

  function deleteRow(e: any) {
    console.log('row -- ', row);
    e.stopPropagation();
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить эту справочника. <p>{row.name}</p>
        </>
      ),
      callback: async () => {
        try {
          const response = await axios.delete(
            isParent
              ? `/meta_data/reference/${row.id}`
              : `/meta_data/reference_item/${row.id}`
          );
          const data = await response.data;
          setAlertMessage({ message: data.message, type: 'success' });
          cleanConfirm();
          isParent
            ? fetchReferences()
            : fetchReferenceItems(row, true, currentReference);
        } catch (e) {
          checkError(e);
        }
      },
    });
  }

  function click(e: any) {
    fetchReferenceItems && fetchReferenceItems(row, false, currentReference);
  }

  function actionClick(e: any) {
    e.stopPropagation();
  }

  return (
    <ReferencesItemRowContainer
      onClick={isParent ? click : () => {}}
      ref={containerRef}
      isActive={isActive}
    >
      <Name>{row.name}</Name>
      <Action onClick={actionClick}>
        <Wrapper isActive={isActive}>
          <Edit title="Измнеить" onClick={editRow} />
          <Trash title="Удалить " onClick={deleteRow} />
        </Wrapper>
      </Action>
    </ReferencesItemRowContainer>
  );
};

export default ReferencesItemRow;
