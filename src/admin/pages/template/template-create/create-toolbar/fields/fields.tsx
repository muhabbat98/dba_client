import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FieldsContainer, AddButton, Wrapper, AddContainer } from './style';
import { axios, useError } from '../../../../../../hooks';
import { ReactComponent as Plus } from '../../../../../assets/icons/plus.svg';
import AllField from '../../../../../../admin2/components/fields-modal/all_fields';
import AllFields from './all-fields';
import AddForm from './add-form';

interface Props {
  active: boolean;
}

interface Params {
  id: string;
}
const Fields: React.FC<Props> = ({ active }) => {
  const { id } = useParams<Params>();
  const { checkError } = useError();
  const [fields, setFields] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetFields();
  }, []);

  async function fetFields() {
    try {
      const response = await axios.get('/meta_data/all/fields/' + id);
      const data = await response.data;
      setFields(data);
    } catch (e) {
      checkError(e);
    }
  }

  function closeAddModal() {
    setOpenModal(false);
  }

  function openAddModal() {
    setOpenModal(true);
  }

  console.log('id - ', id);
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
        <AllFields fields={fields} />
      </Wrapper>
    </FieldsContainer>
  );
};

export default Fields;
