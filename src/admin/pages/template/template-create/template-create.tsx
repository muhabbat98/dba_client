import React, { useState } from 'react';
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
import { axios, useActionCreators, useError } from '../../../../hooks';

interface Params {
  id: string;
}

const TemplateCreateMain = () => {
  const { id } = useParams<Params>();
  const { state, setView, setBuilder } = useTemplateCreate();
  const [name, setName] = useState('');
  const { checkError } = useError();
  const { setAlertMessage } = useActionCreators();

  const change =
    state.viewType === ViewType.TEMPLATE_BUILDER ? setView : setBuilder;

  console.log('state -- ', state);

  const add = async () => {
    let data = {
      categoryId: id,
      fieldIds: state.fields.map((f) => f.id),
      isMain: state.isMain,
      name: name,
      newFields: [],
      propertyIds: state.products.map((f) => f.id),
      referenceIds: [],
    };
    console.log(data);
    try {
      const response = await axios.post('/meta_data/add/product', data);
      const message = await response.data;
      //setAlertMessage({message});
    } catch (e) {
      checkError(e);
    }
  };

  ///marketplace-v1/api/meta_data/add/product

  return (
    <TemplateCreateContainer>
      <Header>
        <Left>
          <SimpleInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя шаблона"
            label="Имя шаблона"
          />
        </Left>
        <Right>
          <Button onClick={add}>Добавить</Button>
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
