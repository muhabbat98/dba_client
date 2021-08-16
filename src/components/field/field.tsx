import React, { FC, useState } from 'react';
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
  const list = field.values;

  const [state, setState] = useState(list);

  const dropdownClicked = (data: any) => {
    setState(data.value);
  };

  switch (format) {
    case FormatNames.NUMBER:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          inputType="number"
          style={{ marginBottom: '16px' }}
        />
      );

    case FormatNames.DATE:
      return (
        <SimpleInput
          name={fieldName}
          label={fieldName}
          type="date"
          style={{ maxWidth: '100%', marginBottom: '16px' }}
        />
      );

    case FormatNames.STRING:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          inputType="string"
          style={{ marginBottom: '16px' }}
        />
      );

    default:
      return (
        <Dropdown
          callback={dropdownClicked}
          selected={state.name}
          isAdmin={true}
          option={list}
          label={fieldName}
          style={{ marginBottom: '16px' }}
        />
      );
  }
};

export default Field;
