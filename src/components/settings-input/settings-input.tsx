import React from 'react';
import { Input } from './style';

interface SettingsInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: any;
}
const SettingsInput: React.FC<SettingsInputProps> = ({ ...rest }) => {
  return (
    <>
      <Input {...rest} />
    </>
  );
};

export default SettingsInput;
