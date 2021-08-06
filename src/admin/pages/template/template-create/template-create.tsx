import React from 'react';
import { useParams } from 'react-router-dom';
import { TemplateCreateContextProvider, useTemplateCreate } from './context';
import {
  TemplateCreateContainer,
  Header,
  Right,
  Left,
  Middle,
  ToggleContainer,
  Label,
} from './style';
import CreateToolbar from './create-toolbar';
import View from './view/view';
import SimpleInput from '../../../../components/simple-input';
import Checkbox from '../../../../components/checkbox';
import Button from '../../../../components/button';
import Toggle from '../../../../components/toggle';

interface Params {
  id: string;
}

const TemplateCreateMain = () => {
  const { id } = useParams<Params>();
  const { state } = useTemplateCreate();

  console.log('state -- ', state);
  return (
    <TemplateCreateContainer>
      <Header>
        <Left>
          <SimpleInput placeholder="Имя шаблона" label="Имя шаблона" />
        </Left>
        <Right>
          <Button>Добавить</Button>
        </Right>
      </Header>
      <Middle>
        <ToggleContainer>
          <Toggle />
          <Label>Предварительный просмотр</Label>
        </ToggleContainer>
      </Middle>
      <CreateToolbar />
      <View />
    </TemplateCreateContainer>
  );
};

const TemplateCreate = () => {
  return (
    <TemplateCreateContextProvider>
      <TemplateCreateMain />
    </TemplateCreateContextProvider>
  );
};

export default TemplateCreate;
