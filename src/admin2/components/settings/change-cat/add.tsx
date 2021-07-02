import React, { useState, useEffect } from 'react';
import { axios, useActionCreators } from '../../../../hooks';
import { useForm } from 'react-hook-form';
import LoginInput from '../../../components/input';
import Button from '../../../components/button';
import Textarea from '../../../components/textarea';
import ImageUpload from '../../../components/image-upload';
import { AddContainer, InfoContainer } from './style';

type Inputs = {
  name: string;
  description: string;
  file: Blob[];
};

interface AddProps {
  menu: any;
  close: () => void;
  fetchMenu: () => void;
}

const Add: React.FC<AddProps> = ({ menu, close, fetchMenu }) => {
  const { register, handleSubmit, watch, getValues } = useForm<Inputs>();
  const [isSucces, setIsSuccess] = useState(false);
  const [defaultValues, setDefaultValues] = useState<any>({});

  const fetchCat = async () => {
    try {
      const respone = await axios.get(`category/${menu.parentId}`);
      const resData = await respone.data;

      setDefaultValues(resData);
    } catch (e) {
      setSnackbarMessage({
        message: e.message,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const { setSnackbarMessage } = useActionCreators();

  const onSubmit = async (data: Inputs) => {
    console.log(1111);
    let formData = new FormData();
    console.log(data.file[0]);
    if (data.file[0]) {
      formData.append('file', data.file[0]);
    }

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('id', defaultValues.id);

    setIsSuccess(true);
    try {
      const respone = await axios.put('/category/update', formData);
      const resData = await respone.data;

      close();
      setSnackbarMessage({
        message: resData.message,
        type: 'success',
      });
      fetchMenu();
    } catch (e) {
      setIsSuccess(false);

      setSnackbarMessage({
        message: e.message,
        type: 'error',
      });
    }
  };
  console.log(menu);
  return (
    <AddContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InfoContainer>
          <div>
            <LoginInput
              register={register({ required: true })}
              name='name'
              label='Имя категории'
              type='string'
              defaultValue={defaultValues.name ? defaultValues.name : ''}
            />

            <Textarea
              register={register({ required: true })}
              name='description'
              label='Описание '
              defaultValue={
                defaultValues.description ? defaultValues.description : ''
              }
            ></Textarea>
          </div>
          <div>
            {/* <div>Иконки для категория</div> */}

            <ImageUpload
              propImage={defaultValues.imageUrl} 
              register={register}
            />
          </div>
        </InfoContainer>
        <br />
        <Button size='md' fullWidth disabled={isSucces}>
          Изменить
        </Button>
      </form>
    </AddContainer>
  );
};

export default Add;
