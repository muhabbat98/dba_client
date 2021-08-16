import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Close } from '../../../assets/icons/cancel.svg';
import {
  ChangeReferenceContainer,
  EditContainer,
  CloseContainer,
  Title,
  Div,
} from './style';
import Backdrop from '../../../../components/backdrop';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import { axios, useActionCreators, useError } from '../../../../hooks';

interface Props {
  onClose: () => void;
  data: any;
  fetchReferences: () => void;
  fetchReferenceItems: any;
  currentReference: any;
}

const ChangeReference: React.FC<Props> = ({
  onClose,
  data,
  fetchReferences,
  fetchReferenceItems,
  currentReference,
}) => {
  const { isAdding, row, isParent } = data;
  const { checkError } = useError();
  const { setAlertMessage } = useActionCreators();
  console.log('data', data);
  const { register, handleSubmit, watch, setValue, errors } = useForm();

  async function submit(datas: any) {
    if (isAdding) {
      if (row && row.id) {
        try {
          const response = await axios.post('/meta_data/reference_item', {
            name: datas.name,
            parentId: row.id,
          });
          const dat = await response.data;
          setAlertMessage({
            message: dat.message,
            type: 'success',
          });
          fetchReferenceItems(row);
          onClose();
        } catch (error) {
          checkError(error);
        }
      } else {
        try {
          const response = await axios.post(
            '/meta_data/reference',
            datas.name,
            {
              headers: {
                'Content-Type': 'text/plain ',
              },
            }
          );
          const dat = await response.data;
          setAlertMessage({
            message: dat.message,
            type: 'success',
          });
          fetchReferences();
          onClose();
        } catch (e) {
          checkError(e);
        }
      }
    } else {
      try {
        const response = await axios.put(
          isParent
            ? '/meta_data/reference'
            : '/meta_data/change_reference_item',
          isParent
            ? {
                id: row.id,
                name: datas.name,
              }
            : { newName: datas.name, referenceItemId: row.id }
        );
        const dat = await response.data;

        setAlertMessage({
          message: dat.message,
          type: 'success',
        });

        isParent
          ? fetchReferences()
          : fetchReferenceItems(row, true, currentReference);
        onClose();
      } catch (error) {
        checkError(error);
      }
    }
    //onClose();
  }

  const defValue = isAdding ? '' : row.name;

  return (
    <ChangeReferenceContainer>
      <Backdrop close={onClose} />
      <EditContainer>
        <CloseContainer>
          <Close onClick={onClose} />
        </CloseContainer>
        <Title>Добавить справочник</Title>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            name="name"
            register={register}
            placeholder="Названия"
            label="Названия"
            defVal={defValue}
            setValue={setValue}
            watch={watch('country')}
            error={errors.name}
          />
          <Div />
          <Button>Добавить</Button>
        </form>
      </EditContainer>
    </ChangeReferenceContainer>
  );
};

export default ChangeReference;
