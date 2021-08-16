import React from 'react';
import { useParams } from 'react-router-dom';
import {
  TemplateCreateContextProvider,
  useTemplateCreate,
  ViewType,
} from './context';
import {
  Header,
  Label,
  Left,
  Middle,
  Right,
  TemplateCreateContainer,
  ToggleContainer,
} from './style';
import CreateToolbar from './create-toolbar';
import View from './view/view';
import SimpleInput from '../../../../components/simple-input';
import Button from '../../../../components/button';
import Toggle from '../../../../components/toggle';

interface Params {
  id: string;
}

const TemplateCreateMain = () => {
  const { id } = useParams<Params>();
  const { state, setView, setBuilder } = useTemplateCreate();

  const change =
    state.viewType === ViewType.TEMPLATE_BUILDER ? setView : setBuilder;

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
          <Toggle onChange={change} />
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
