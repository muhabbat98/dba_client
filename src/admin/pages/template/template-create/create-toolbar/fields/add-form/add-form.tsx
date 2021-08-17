import React, { useState, useEffect } from 'react';
import {
  AddFormContainer,
  AddFormWrapper,
  CloseContainer,
  PrimitiveTypesContainer,
  Types,
} from './style';
import { useParams } from 'react-router-dom';
import { ReactComponent as Close } from '../../../../../../assets/icons/cancel.svg';
import Backdrop from '../../../../../../../components/backdrop';
import Input from '../../../../../../../components/input';
import {
  Div,
  Title,
} from '../../../../../../components/references/change-reference/style';
import Button from '../../../../../../../components/button';
import { useForm } from 'react-hook-form';
import { axios, useActionCreators, useError } from '../../../../../../../hooks';
import RadioButton from '../../../../../../../components/radio-button';
import field from '../../../../../../../admin2/components/field/field';

interface Props {
  onClose: () => void;
  fetFields: () => void;
}
interface Params {
  id: string;
}

const AddForm: React.FC<Props> = ({ onClose, fetFields }) => {
  const { register, handleSubmit, watch, setValue, errors } = useForm();
  const [primitiveTypes, setPrimitiveTypes] = useState<any[]>([]);
  const { checkError } = useError();
  const { setAlertMessage } = useActionCreators();
  const { id } = useParams<Params>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/meta_data/primitive_types');
        const data = await response.data;
        setPrimitiveTypes(data);
      } catch (e) {
        checkError(e);
      }
    })();
  }, []);

  async function submit(inputs: any) {
    console.log(inputs);
    try {
      const response = await axios.post('/meta_data/add/field', [
        {
          categoryId: id,
          format: inputs.type,
          name: inputs.name,
        },
      ]);
      const data = await response.data;
      fetFields();
      onClose();
      setAlertMessage({ message: data.message, type: 'success' });
    } catch (e) {
      checkError(e);
    }
  }

  const f = primitiveTypes.filter((type) => {
    return !(type.type === 'REFERENCE' || type.type === 'COLOR');
  });

  console.log('f', f);

  return (
    <AddFormContainer>
      <Backdrop close={onClose} />
      <AddFormWrapper>
        <CloseContainer onClick={onClose}>
          <Close />
        </CloseContainer>
        <Title>Добавить поле</Title>
        <form onSubmit={handleSubmit(submit)}>
          <PrimitiveTypesContainer>
            {f.map((type, index) => (
              <Types key={type.type} id={type.type}>
                <RadioButton
                  isChecked={index === 0 ? true : false}
                  label={type.name}
                  name="type"
                  value={type.type}
                  register={register}
                />
              </Types>
            ))}
          </PrimitiveTypesContainer>

          <br />
          <br />
          <Input
            name="name"
            register={register}
            placeholder="Названия поле"
            label="Названия поле"
            defVal={''}
            setValue={setValue}
            watch={watch('country')}
            error={errors.name}
          />
          <Div />
          <Button>Добавить</Button>
        </form>
      </AddFormWrapper>
    </AddFormContainer>
  );
};

export default AddForm;
