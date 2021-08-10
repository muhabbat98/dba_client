import React, { useState } from 'react';
import { CreateToolbarContainer, TabItem, Tab, TabWrapper } from './style';
import Fields from './fields';
import Products from './products';
import Reference from './reference';
import Checkbox from '../../../../../components/checkbox';

enum FormType {
  FIELDS,
  PRODUCTS,
  REFERENCES,
}

const CreateToolbar = () => {
  const [formType, setFormType] = useState<FormType>(FormType.FIELDS);

  const setForm = (form: FormType): void => setFormType(form);

  return (
    <CreateToolbarContainer>
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
        <Checkbox label="Основной" />
      </Tab>

      <Fields active={formType === FormType.FIELDS} />
      <Products active={formType === FormType.PRODUCTS} />
      <Reference active={formType === FormType.REFERENCES} />
    </CreateToolbarContainer>
  );
};

export default CreateToolbar;
