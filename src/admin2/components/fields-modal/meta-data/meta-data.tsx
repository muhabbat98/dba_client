import React, { useState, useEffect } from 'react';
import { useActionCreators, axios } from '../../../../hooks';
import Input from '../../../components/input';
import Button from '../../../components/button';
import {
  FieldsContainer,
  Fields,
  Products,
  FieldRow,
  Title,
  FieldTitle,
  Num,
  FTitle,
} from './style';
import { useForm } from 'react-hook-form';
import AddField from '../add_field';
import Add from '../../settings/add';
import Checkbox from '../../../components/checkbox';

interface MetaDataProps {
  menu: any;
}

const MetaData: React.FC<MetaDataProps> = ({ menu }) => {
  const [products, setProducts] = useState([]);
  const [fields, setFields] = useState([]);
  const [references, setReferences] = useState([]);
  const [choosenField, setChoosenField] = useState<string[]>([]);
  const [choosenProducts, setChoosenProducts] = useState<string[]>([]);
  const [choosenReferences, setChoosenReferences] = useState<string[]>([]);
  const [newField, setNewField] = useState<any[]>([]);
  const [name, setName] = useState<any[]>([]);
  const { setSnackbarMessage } = useActionCreators();
  const { register, handleSubmit, reset } = useForm<any>();

  useEffect(() => {
    fetchProducts();
    fetchFields();
    fetchReferences();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/meta_data/products/${menu.parentId}`);
      const data = await response.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      setSnackbarMessage({
        message: error.message,
        type: 'error',
      });
    }
  };

  const fetchFields = async () => {
    try {
      const response = await axios.get(
        `/meta_data/all/fields/${menu.parentId}`
      );
      const data = await response.data;
      console.log(data);
      setFields(data);
    } catch (error) {
      setSnackbarMessage({
        message: error.message,
        type: 'error',
      });
    }
  };

  const fetchReferences = async () => {
    try {
      const response = await axios.get(`/meta_data/reference/${menu.parentId}`);
      const data = await response.data;
      console.log(data);
      setReferences(data);
    } catch (error) {
      setSnackbarMessage({
        message: error.message,
        type: 'error',
      });
    }
  };

  const handleFields = (id: string) => {
    console.log(id);
    const copyArray = [...choosenField];
    const find = copyArray.findIndex((f) => f === id);
    console.log(find);
    if (find < 0) {
      setChoosenField([...choosenField, id]);
    } else {
      setChoosenField(choosenField.filter((f) => f !== id));
    }
  };

  const handleProducts = (id: string) => {
    console.log(id);
    const copyArray = [...choosenProducts];
    const find = copyArray.findIndex((f) => f === id);
    console.log(find);
    if (find < 0) {
      setChoosenProducts([...choosenProducts, id]);
    } else {
      setChoosenProducts(choosenProducts.filter((f) => f !== id));
    }
  };
  const handleReference = (id: string) => {
    console.log(id);
    const copyArray = [...choosenReferences];
    const find = copyArray.findIndex((f) => f === id);
    console.log(find);
    if (find < 0) {
      setChoosenReferences([...choosenReferences, id]);
    } else {
      setChoosenReferences(choosenReferences.filter((f) => f !== id));
    }
  };

  const newFieldHandler = (field: any) => {
    setNewField([...newField, field]);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    const meta = {
      name: data.name,
      categoryId: menu.parentId,
      fieldIds: [...choosenField],
      newFields: [...newField],
      propertyIds: [...choosenProducts],
      referenceIds: [...choosenReferences],
    };
    console.log(meta);
    try {
      const response = await axios.post(`/meta_data/add/product`, meta);
      const data = await response.data;
      setSnackbarMessage({
        message: data,
        type: 'success',
      });
    } catch (error) {
      setSnackbarMessage({
        message: error.message,
        type: 'error',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Имя шаблона'
          name='name'
          register={register({ required: true })}
        />
        <FieldsContainer>
          <Fields>
            <FTitle>Поле</FTitle>
            {fields.map((f: any, i: number) => {
              return (
                <FieldRow>
                  <FieldTitle>
                    <Num>{i + 1}.</Num> <Title>{f.name}</Title>
                  </FieldTitle>

                  <div>
                    <Checkbox callback={() => handleFields(f.id)} />
                  </div>
                </FieldRow>
              );
            })}
          </Fields>
          <Products>
            <FTitle>Продукты</FTitle>
            {products.map((f: any, i: number) => {
              return (
                <FieldRow>
                  <FieldTitle>
                    <Num>{i + 1}.</Num> <Title>{f.name}</Title>
                  </FieldTitle>

                  <div>
                    <Checkbox callback={() => handleProducts(f.id)} />
                  </div>
                </FieldRow>
              );
            })}
          </Products>
          <Products>
            <FTitle>Справочники</FTitle>
            {references.map((f: any, i: number) => {
              return (
                <FieldRow>
                  <FieldTitle>
                    <Num>{i + 1}.</Num> <Title>{f.name}</Title>
                  </FieldTitle>

                  <div>
                    <Checkbox callback={() => handleReference(f.id)} />
                  </div>
                </FieldRow>
              );
            })}
          </Products>
        </FieldsContainer>

        <br />
      </form>
      <AddField callback={newFieldHandler} menu={menu} />
      <br />
      <Button onClick={handleSubmit(onSubmit)} fullWidth size='bg'>
        Добавить шаблонь
      </Button>
    </div>
  );
};

export default MetaData;
