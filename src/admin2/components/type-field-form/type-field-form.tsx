import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TypeFormContainer,
  FieldAddForm,
  Fieldset,
  ActionContainer,
} from './style';

import { Select, Option } from '../../global-styles';
import Input from '../../components/input';
import Button from '../../components/button';
import CircleLoader from '../../components/circle-loader';

interface TypeFieldFormProps {
  type?: any;
  num?: number;
  color?: string;
  addFieldHandler: (name: string, unity: string, unities: any) => void;
  disable: boolean;
}

const TypeFieldForm: React.FC<TypeFieldFormProps> = ({
  type,
  addFieldHandler,
  disable,
}) => {
  const { register, handleSubmit, reset } = useForm<any>();

  function onSubmit(data: any) {
    const unities = type.unities.find((t: any) => t.name === data.unity);
    reset();
    addFieldHandler(data.name, data.unity, unities);
  }
  console.log(type);
  return (
    <TypeFormContainer>
      {disable && <CircleLoader />}
      <FieldAddForm>
        <Fieldset>Форма добавление поле</Fieldset>
        <h1> {type.name}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='name'
            register={register({ required: true })}
            label='Имя поле'
          />

          {type.unities.length > 0 && (
            <Select ref={register} name='unity' id=''>
              {type.unities.map((unity: any) => (
                <Option key={unity.name} value={unity.name}>
                  {unity.name}
                </Option>
              ))}
            </Select>
          )}

          <ActionContainer>
            <Button disabled={disable}>Добавить поле</Button>
          </ActionContainer>
        </form>
      </FieldAddForm>
    </TypeFormContainer>
  );
};

export default TypeFieldForm;
