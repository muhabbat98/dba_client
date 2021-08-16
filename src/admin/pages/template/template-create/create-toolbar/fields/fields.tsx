import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  FieldsContainer,
  Result,
  AddButton,
  Wrapper,
  AddContainer,
} from './style';
import { axios, useError } from '../../../../../../hooks';
import { ReactComponent as Plus } from '../../../../../assets/icons/plus.svg';
import AllField from '../../../../../../admin2/components/fields-modal/all_fields';
import AllFields from './all-fields';
import AddForm from './add-form';
import { useTemplateCreate } from '../../context';
import Field from '../../../../../../components/field';

interface Props {
  active: boolean;
  fetFields: any;
  fields: any;
}

const Fields: React.FC<Props> = ({ active, fields, fetFields }) => {
  const { checkError } = useError();

  const { state } = useTemplateCreate();

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetFields();
  }, []);

  function closeAddModal() {
    setOpenModal(false);
  }

  function openAddModal() {
    setOpenModal(true);
  }

  return (
    <FieldsContainer active={active}>
      <Wrapper>
        {openModal && <AddForm onClose={closeAddModal} fetFields={fetFields} />}
        <AddContainer>
          <AddButton onClick={openAddModal}>
            <Plus />
            Добавить поле
          </AddButton>
        </AddContainer>
        <Wrapper>
          <AllFields fields={fields} />
          <Result>
            {state.fields.map((field: any) => (
              <Field key={field.id} field={field} />
            ))}
          </Result>
        </Wrapper>
      </Wrapper>
    </FieldsContainer>
  );
};

export default Fields;
