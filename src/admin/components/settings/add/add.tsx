import React, { useState } from 'react';
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
  parentId: string;
  close: () => void;
  fetchMenu: () => void;
}

const Add: React.FC<AddProps> = ({ parentId, close, fetchMenu }) => {
  const { register, handleSubmit, watch, getValues } = useForm<Inputs>();
  const [isSucces, setIsSuccess] = useState(false);

  const { setSnackbarMessage } = useActionCreators();

  const onSubmit = async (data: Inputs) => {
    if (data.file[0]) {
      let formData = new FormData();
      console.log(data.file[0]);
      formData.append('file', data.file[0]);
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('parentId', !parentId ? '' : parentId);

      setIsSuccess(true);
      try {
        const respone = await axios.post('/category/add', formData);
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
    } else {
      setSnackbarMessage({
        message: 'Загружайте картинку',
        type: 'warning',
      });
    }
  };

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
            />

            <Textarea
              register={register({ required: true })}
              name='description'
              label='Описание '
            ></Textarea>
          </div>
          <div>
            {/* <div>Иконки для категория</div> */}
            <ImageUpload register={register} />
          </div>
        </InfoContainer>
        <br />
        <Button size='md' fullWidth disabled={isSucces}>
          Добавить
        </Button>
      </form>
    </AddContainer>
  );
};

export default Add;
