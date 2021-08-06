import React, { FC } from 'react';
import Input from '../input';

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
  switch (format) {
    case FormatNames.STRING:
      return <Input />;

    default:
      return <Input />;
  }
};

export default Field;
