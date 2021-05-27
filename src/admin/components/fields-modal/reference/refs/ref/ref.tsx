import React, { useState, useRef, useEffect } from 'react';
import RefActions from '../../ref-actions';
import { axios, useActionCreators } from '../../../../../../hooks';
import {
  RefContainer,
  Refer,
  Num,
  RefName,
  ToggleContainer,
  ToggleForm,
  Form,
  Input,
  ToggleWrapper,
  Buttons,
  Cancel,
  OK,
} from './style';

interface RefProps {
  handleReference: (ref: any) => void;
  currentRef: any;
  r: any;
  num: number;
  deleteReference: (id: string) => void;
  updateReference: (id: string, name: string) => void;
}

const Ref: React.FC<RefProps> = ({
  deleteReference,
  updateReference,
  currentRef,
  handleReference,
  num,
  r,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(r.name);
  const { setConfirm, cleanConfirm, setSnackbarMessage } = useActionCreators();

  const inputEl = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (!isEdit) {
      setTimeout(() => {
        if (inputEl && inputEl.current) {
          inputEl.current.selectionStart = editValue.length;
          inputEl.current.selectionEnd = editValue.length;
          inputEl.current.focus();
        }
      }, 250);
    }
    setIsEdit(!isEdit);
  };

  const onEditSubmit = async (e: any) => {
    e.preventDefault();
    if (r.name !== editValue) {
      try {
        const respone = await axios.put(`/meta_data/reference/`, {
          id: r.id,
          name: editValue,
        });
        const data = await respone.data;
        setIsEdit(false);
        setEditValue(editValue);
        setSnackbarMessage({
          message: data.message,
          type: 'success',
        });
        updateReference(r.id, editValue);
      } catch (error) {
        setSnackbarMessage({
          message: error.message,
          type: 'error',
        });
      }
    } else {
      cancel();
    }
  };

  const cancel = () => {
    setIsEdit(false);
    setEditValue(r.name);
  };

  const deleteRef = () => {
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить этого справочника?
          <p>
            <b> - {r.name}</b>
          </p>
        </>
      ),
      callback: async () => {
        try {
          const respone = await axios.delete(`/meta_data/reference/${r.id}`);
          const data = await respone.data;
          setSnackbarMessage({
            message: data.message,
            type: 'success',
          });
          cleanConfirm();
          deleteReference(r.id);
        } catch (error) {
          setSnackbarMessage({
            message: error.message,
            type: 'error',
          });
        }
      },
    });
  };

  return (
    <Refer
      isActive={currentRef && currentRef.id ? currentRef.id === r.id : false}
      isEdit={isEdit}
    >
      <Num>{num + 1}</Num>
      <ToggleContainer>
        <ToggleWrapper isToggle={isEdit}>
          <RefName
            onClick={() => handleReference(r)}
            isActive={
              currentRef && currentRef.id ? currentRef.id === r.id : false
            }
          >
            {r.name}
          </RefName>
          <ToggleForm>
            <Form onSubmit={onEditSubmit}>
              <Input
                ref={inputEl}
                type='text'
                onChange={(e) => setEditValue(e.target.value)}
                value={editValue}
                defaultValue={editValue}
              />
            </Form>
          </ToggleForm>
        </ToggleWrapper>
      </ToggleContainer>
      {!isEdit ? (
        <RefActions onEdit={handleEdit} onDelete={deleteRef} />
      ) : (
        <Buttons isEdit={isEdit}>
          <Cancel onClick={cancel}>Отменить</Cancel>
          <OK onClick={onEditSubmit}>OK</OK>
        </Buttons>
      )}
    </Refer>
  );
};

export default Ref;
