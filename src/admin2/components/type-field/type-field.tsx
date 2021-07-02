import React from 'react';
import {
  TypeFieldContainer,
  Title,
  PlusButton,
  Num,
  TitleContainer,
} from './style';

interface TypeFieldProps {
  type: any;
  num: number;
  currentTypeHandler: (type: any) => void;
}

const TypeField: React.FC<TypeFieldProps> = ({
  type,
  num,
  currentTypeHandler,
}) => {
  return (
    <TypeFieldContainer>
      <TitleContainer>
        <Num>{num + 1}</Num>
        <Title> {type.name}</Title>
      </TitleContainer>
      <PlusButton onClick={() => currentTypeHandler(type)}>+</PlusButton>
    </TypeFieldContainer>
  );
};

export default TypeField;
