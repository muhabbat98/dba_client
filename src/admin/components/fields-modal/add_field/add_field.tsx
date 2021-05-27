import React, { useEffect, useState } from 'react';
import {
  AddFieldContainer,
  FieldsdContainer,
  TypesdContainer,
  Suggestion,
  LeftArrowContainer,
  Title,
  SuggestionText,
  PlusButton,
  CurrentTypesListContainer,
} from './style';
import { axios } from '../../../../hooks';
import TypeField from '../../type-field';
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import TypeFieldForm from '../../type-field-form';
import { useActionCreators } from '../../../../hooks';
import Field from '../../../components/field';

interface AddField {
  menu: any;
  callback?: (field: any) => void;
}

const AddField: React.FC<AddField> = ({ menu, callback }) => {
  const [primitiveTypes, setPrimitiveTypes] = useState<any>([]);
  const [currentType, setCurrentType] = useState<any>(null);
  const [fieldsList, setFieldsList] = useState<any>([]);
  const [disable, setDisable] = useState<any>(false);
  const { setSnackbarMessage } = useActionCreators();

  async function fetchPrimitveTypes() {
    try {
      const respone = await axios.get('/meta_data/primitive_types');
      const data = await respone.data;

      setPrimitiveTypes(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPrimitveTypes();
  }, []);

  function currentTypeHandler(type: any) {
    setCurrentType(type);
  }

  const addFieldHandler = async (name: string, unity: any, unities: any) => {
    if (!callback) {
      try {
        setDisable(true);
        const respone = await axios.post('/meta_data/add/field', [
          {
            name: name,
            format: currentType.type,
            unity: unity ? unity : '',
            categoryId: menu.parentId,
          },
        ]);
        setFieldsList([
          ...fieldsList,
          {
            name: name,
            format: currentType.type,
            unity: unities,
            categoryId: menu.parentId,
            //unities: unities,
          },
        ]);
        const data = await respone.data;

        setSnackbarMessage({ message: data.message, type: 'success' });
        setDisable(false);
      } catch (error) {
        setDisable(false);
        setSnackbarMessage({ message: error.message, type: 'error' });
      }
    } else {
      callback({
        name: name,
        format: currentType.type,
        unity: unity ? unity : '',
        categoryId: menu.parentId,
      });
      setFieldsList([
        ...fieldsList,
        {
          name: name,
          format: currentType.type,
          unity: unities,
          categoryId: menu.parentId,
          //unities: unities,
        },
      ]);
    }
  };

  return (
    <AddFieldContainer>
      <TypesdContainer>
        <Title>Типы поле</Title>
        {primitiveTypes.map((type: any, i: number) => (
          <TypeField
            currentTypeHandler={currentTypeHandler}
            num={i}
            key={type.name}
            type={type}
          />
        ))}
      </TypesdContainer>
      <FieldsdContainer>
        {currentType ? (
          <TypeFieldForm
            disable={disable}
            addFieldHandler={addFieldHandler}
            type={currentType}
          />
        ) : (
          <Suggestion>
            <LeftArrowContainer>
              <LeftArrow />
            </LeftArrowContainer>
            <SuggestionText>
              Выберите тип поле и нажимайте( <PlusButton>+</PlusButton> )
            </SuggestionText>
          </Suggestion>
        )}
        <CurrentTypesListContainer>
          {fieldsList.map((field: any) => (
            <Field key={field.name} field={field} />
          ))}
        </CurrentTypesListContainer>
      </FieldsdContainer>
    </AddFieldContainer>
  );
};

export default AddField;
