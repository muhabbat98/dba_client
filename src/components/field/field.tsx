import React, { FC } from 'react';
import Input from '../input';
import {useForm} from 'react-hook-form';

enum FormatNames {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
}

interface FieldProps {
  format: 'STRING' | 'NUMBER' | 'DATE';
  fieldName: string;
}

const Field: FC<FieldProps> = ({ format, fieldName }) => {
  const {register}=useForm();

  switch (format) {
    case FormatNames.STRING:
      return <Input register={register}/>;

    default:
      return <Input register={register}/>;
  }
};

export default Field;
