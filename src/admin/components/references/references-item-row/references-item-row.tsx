import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';
import { ReactComponent as Edit } from '../../../assets/icons/edit2.svg';
import { ReactComponent as Trash } from '../../../assets/icons/trash2.svg';
import { ReferencesItemRowContainer, Name, Action, Wrapper } from './style';
import { axios, useActionCreators, useError } from '../../../../hooks';

interface ReferencesItemRowProps {
  row: any;
  fetchReferenceItems?: (row: any) => void;
  isActive: boolean;
}

const ReferencesItemRow: React.FC<ReferencesItemRowProps> = ({
  isActive,
  row,
  fetchReferenceItems,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { setConfirm, cleanConfirm, setAlertMessage } = useActionCreators();
  const { checkError } = useError();

  function editRow(e: any) {
    e.stopPropagation();
    console.log('edit');
  }

  function deleteRow(e: any) {
    e.stopPropagation();
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить эту справочника. <p>{row.name}</p>
        </>
      ),
      callback: async () => {
        try {
          const response = await axios.get(`/meta_data/reference/${row.id}`);
          const data = await response.data;
          setAlertMessage({ message: data, type: 'success' });
          cleanConfirm();
        } catch (e) {
          checkError(e);
        }
      },
    });
  }

  function click(e: any) {
    fetchReferenceItems && fetchReferenceItems(row);
  }

  function actionClick(e: any) {
    e.stopPropagation();
  }

  return (
    <ReferencesItemRowContainer
      onClick={click}
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
