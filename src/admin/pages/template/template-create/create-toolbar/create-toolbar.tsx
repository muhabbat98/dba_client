import React, { useState } from 'react';
import { CreateToolbarContainer, Tab, TabItem, TabWrapper } from './style';
import Fields from './fields';
import Products from './products';
import Reference from './reference';
import Checkbox from '../../../../../components/checkbox';
import { useTemplateCreate, ViewType } from '../context';
import { axios, useError } from '../../../../../hooks';
import { useParams } from 'react-router-dom';

enum FormType {
  FIELDS,
  PRODUCTS,
  REFERENCES,
}
interface Params {
  id: string;
}

const CreateToolbar = () => {
  const [formType, setFormType] = useState<FormType>(FormType.FIELDS);
  const { checkError } = useError();
  const { id } = useParams<Params>();
  const [fields, setFields] = useState<any[]>([]);
  const {
    state: { viewType },
    toggleMain,
  } = useTemplateCreate();

  const setForm = (form: FormType): void => setFormType(form);

  async function fetFields() {
    try {
      const response = await axios.get('/meta_data/all/fields/' + id);
      const data = await response.data;
      setFields(data);
    } catch (e) {
      checkError(e);
    }
  }

  return (
    <CreateToolbarContainer isActive={viewType === ViewType.TEMPLATE_BUILDER}>
      <Tab>
        <TabWrapper>
          <TabItem
            active={formType === FormType.FIELDS}
            onClick={() => setForm(FormType.FIELDS)}
          >
            Поле
          </TabItem>
          <TabItem
            active={formType === FormType.PRODUCTS}
            onClick={() => setForm(FormType.PRODUCTS)}
          >
            Продукты
          </TabItem>
          <TabItem
            active={formType === FormType.REFERENCES}
            onClick={() => setForm(FormType.REFERENCES)}
          >
            Справочники
          </TabItem>
        </TabWrapper>
        <Checkbox label="Основной" onChange={toggleMain} />
      </Tab>

      <Fields
        active={formType === FormType.FIELDS}
        fields={fields}
        fetFields={fetFields}
      />
      <Products active={formType === FormType.PRODUCTS} />
      <Reference
        active={formType === FormType.REFERENCES}
        fetFields={fetFields}
      />
    </CreateToolbarContainer>
  );
};

export default CreateToolbar;
