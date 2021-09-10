import React, { FC, useState } from 'react';
import Dropdown from '../drop-down';
import DropDownAddProduct from '../drop-down-add-product';
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
  parentId?: any;
  isReset?: number;
  isAddProduct?: boolean;
}

const Field: FC<FieldProps> = ({
  field,
  handleInput,
  parentId,
  isReset,
  isAddProduct,
}) => {
  const format = field.format;
  const fieldName = field.name;
  const list = field.values;

  const [state, setState] = useState(list);

  const dropdownClicked = (data: any) => {
    setState(data.value);
    if (handleInput) {
      handleInput(data.value.name, data.value.id, parentId, true);
    }
  };

  const change = (e: any) => {
    if (handleInput) {
      handleInput(e, field.id, parentId, false);
    }
  };

  const dropdownChecker = () => {
    if (isAddProduct) {
      return (
        <DropDownAddProduct
          callback={dropdownClicked}
          selected={state.name}
          isAdmin={true}
          option={list}
          label={fieldName}
          style={{ marginBottom: '16px' }}
          parentId={parentId}
          isReset={isReset}
          isAddProduct={isAddProduct}
        />
      );
    } else {
      return (
        <Dropdown
          callback={dropdownClicked}
          selected={state.name}
          isAdmin={true}
          option={list}
          label={fieldName}
          style={{ marginBottom: '16px' }}
          parentId={parentId}
          isReset={isReset}
          isAddProduct={isAddProduct}
        />
      );
    }
  };

  switch (format) {
    case FormatNames.NUMBER:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          // inputType="number"
          style={{ marginBottom: '16px' }}
          onChange={change}
          parentId={parentId}
          isReset={isReset}
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
          parentId={parentId}
          isReset={isReset}
        />
      );

    case FormatNames.STRING:
      return (
        <SimpleInput
          label={fieldName}
          placeholder={fieldName}
          // inputType="string"
          style={{ marginBottom: '16px' }}
          onChange={change}
          parentId={parentId}
          isReset={isReset}
        />
      );

    default:
      return dropdownChecker();
  }
};

export default Field;
