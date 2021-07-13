import React from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/images/error_page.svg';
import { ReactComponent as Icon } from '../../assets/images/vector.svg';
import {
  ErrorContainer,
  Title,
  Header,
  ErrorIconContainer,
  IconContainer,
} from './style';
import Button from '../../../components/button';

interface Props {
  type?: 'server';
  callback?: () => void;
}

const Error: React.FC<Props> = ({ callback, type }) => {
  return (
    <ErrorContainer>
      <Header>
        <IconContainer>
          <Icon />
        </IconContainer>

        <Title>Ошибка</Title>
      </Header>
      <ErrorIconContainer>
        <ErrorIcon />
      </ErrorIconContainer>
      {callback && <Button onClick={callback}>Обновить страницу</Button>}
    </ErrorContainer>
  );
};

Error.defaultProps = {
  type: 'server',
};
export default Error;
