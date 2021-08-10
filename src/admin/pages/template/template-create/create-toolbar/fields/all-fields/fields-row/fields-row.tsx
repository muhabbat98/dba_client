import React from 'react';
import { FieldsRowContainer, Num, Name, Action } from './style';
import { ReactComponent as ActionIcon } from './avtion.svg';
import Checkbox from '../../../../../../../../components/checkbox';
import { useTemplateCreate } from '../../../../context';

interface Props {
  row: any;
  num: number;
}

const FieldsRow: React.FC<Props> = ({ row, num }) => {
  const { addField } = useTemplateCreate();
  const check = () => {
    addField(row);
  };
  return (
    <FieldsRowContainer>
      <Num>{num}</Num>
      <Checkbox callback={check} />
      <Name>{row.name}</Name>
      <Action>
        <ActionIcon />
      </Action>
    </FieldsRowContainer>
  );
};

export default FieldsRow;
