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
  currentRef: any;
  r: any;
  num: number;
  check: (e: any, id: string) => void;
  deleteReferenceItems: (id: string) => void;
  updateReferenceItems: (id: string, name: string) => void;
  // deleteReference: (id: string) => void;
  // updateReference: (id: string, name: string) => void;
}

const Item: React.FC<RefProps> = ({
  // deleteReference,
  // updateReference,
  currentRef,
  num,
  r,
  check,
  deleteReferenceItems,
  updateReferenceItems,
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
        const respone = await axios.put(`/meta_data/reference_item/`, {
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
        updateReferenceItems(r.id, editValue);
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
          const respone = await axios.delete(
            `/meta_data/reference_item/${r.id}`
          );
          const data = await respone.data;
          setSnackbarMessage({
            message: data.message,
            type: 'success',
          });
          cleanConfirm();
          deleteReferenceItems(r.id);
        } catch (error) {
          setSnackbarMessage({
            message: error.message,
            type: 'error',
          });
        }
      },
    });
  };

  const checkboxHandler = (e: any, id: string) => {
    check(e, id);
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
        <RefActions
          refItem={r}
          checkboxHandler={checkboxHandler}
          onEdit={handleEdit}
          onDelete={deleteRef}
        />
      ) : (
        <Buttons isEdit={isEdit}>
          <Cancel onClick={cancel}>Отменить</Cancel>
          <OK onClick={onEditSubmit}>OK</OK>
        </Buttons>
      )}
    </Refer>
  );
};

export default Item;
