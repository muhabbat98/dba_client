import React, { FC, useState } from 'react';
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
  handleInput?: any;
}

const Field: FC<FieldProps> = ({ field, handleInput }) => {
  // console.log('field => ', field);
  const format = field.format;
  const fieldName = field.name;
  const list = field.values;

  const [state, setState] = useState(list);

  const dropdownClicked = (data: any) => {
    setState(data.value);
  };

  const change = (e: any) => {
    console.log('e--', e, field.id);
    // handleInput(e, field.id);
  };

  switch (format) {
    case FormatNames.NUMBER:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          inputType="number"
          style={{ marginBottom: '16px' }}
          inputValueHandler={change}

          // onChange={change}
        />
      );

    case FormatNames.DATE:
      return (
        <SimpleInput
          name={fieldName}
          label={fieldName}
          type="date"
          style={{ maxWidth: '100%', marginBottom: '16px' }}
          onChange={change}
        />
      );

    case FormatNames.STRING:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          inputType="string"
          style={{ marginBottom: '16px' }}
          onChange={change}
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
