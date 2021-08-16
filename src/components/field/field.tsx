import React, { FC } from 'react';
import Input from '../input';
import { useForm } from 'react-hook-form';
import Dropdown from '../drop-down';
import SimpleInput from '../simple-input';

enum FormatNames {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  REFERENCE = 'REFERENCE',
}

interface FieldProps {
  field: any;
}

const Field: FC<FieldProps> = ({ field }) => {
  const { register, setValue, watch } = useForm();
  const format = field.format;
  const fieldName = field.name;
  const list = field.list;

  switch (format) {
    case FormatNames.NUMBER:
      return (
        <Input
          name={fieldName}
          register={register}
          label={fieldName}
          inputType="onlyNumber"
          //   defVal="ada"
          setValue={setValue}
          watch={watch(fieldName)}
          style={{ maxWidth: '400px', marginBottom: '24px' }}
        />
      );

    case FormatNames.DATE:
      return (
        <SimpleInput
          name={fieldName}
          label={fieldName}
          type="date"
          style={{ maxWidth: '400px', marginBottom: '24px' }}
        />
      );

    case FormatNames.STRING:
      return (
        <Input
          name={fieldName}
          register={register}
          label={fieldName}
          //   defVal="addsfa"
          setValue={setValue}
          watch={watch(fieldName)}
          style={{ maxWidth: '400px', marginBottom: '24px' }}
        />
      );

    default:
      return <Dropdown option={list} label={fieldName} />;
  }
};

export default Field;
