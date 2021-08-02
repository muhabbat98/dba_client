import React from 'react';
import { ReactComponent as Close } from '../../../assets/icons/cancel.svg';
import {
  ChangeReferenceContainer,
  EditContainer,
  CloseContainer,
  Title,
} from './style';
import Backdrop from '../../../../components/backdrop';
import Input from '../../../../components/input';
import Button from '../../../../components/button';

interface Props {
  onClose: () => void;
  row: any;
}

const ChangeReference: React.FC<Props> = ({ onClose }) => {
  return (
    <ChangeReferenceContainer>
      <Backdrop close={onClose} />
      <EditContainer>
        <CloseContainer>
          <Close />
        </CloseContainer>
        <Title>Добавить продукт</Title>
        <Input />
        <Button>Добавить</Button>
      </EditContainer>
    </ChangeReferenceContainer>
  );
};

export default ChangeReference;
