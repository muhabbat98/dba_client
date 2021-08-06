import React from 'react';
import { AllFieldsContainer, Header, Name, Num } from './style';
import FieldsRow from './fields-row';

interface Props {
  fields: any[];
}

const AllFields: React.FC<Props> = ({ fields }) => {
  return (
    <AllFieldsContainer>
      <Header>
        <Num>ID</Num>
        <Name>Название поле</Name>
      </Header>
      {fields.map((row, index) => (
        <FieldsRow row={row} num={index + 1} />
      ))}
    </AllFieldsContainer>
  );
};

export default AllFields;
