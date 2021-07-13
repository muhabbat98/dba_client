import React from 'react';
import Button from '../../../components/button';
import { ReactComponent as SadIcon } from '../../assets/icons/icon_sad.svg';
import { EmptyContainer, IconContainer, Title } from './style';

interface Props {
  title: string;
  callback?: () => void;
  btnTitle?: string;
}

const Empty: React.FC<Props> = ({ title, btnTitle, callback }) => {
  return (
    <EmptyContainer>
      <IconContainer>
        <SadIcon />
        <Title>{title}</Title>
      </IconContainer>
      {callback && <Button onClick={callback}>{btnTitle}</Button>}
    </EmptyContainer>
  );
};

export default Empty;
