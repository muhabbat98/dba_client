import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Backdrop from '../../../components/backdrop';
import Input from '../../../components/input';
import Button from '../../../components/button';
import CircleImageUploader from './circle-image-uploader';
import photoIcon from '../../assets/icons/photo.svg';
import iconIcon from '../../assets/icons/icon.svg';
import {
  AddCategoryContainer,
  AddCategoryWrapper,
  Div,
  Title,
  ImagesUploadContainer,
} from './style';

interface FormInputs {
  name: string;
  description: string;
  icon: FileList;
  photo: FileList;
}

const AddCategory = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    icon: '',
    photo: '',
  });

  const { register, watch, setValue, handleSubmit, errors } =
    useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const { description, name, icon, photo } = data;
    console.log('data------->', data);
  };

  return (
    <AddCategoryContainer>
      <Backdrop close={() => console.log()} />
      <AddCategoryWrapper>
        <Title>Добавить категория</Title>
        <ImagesUploadContainer>
          <CircleImageUploader
            register={register}
            icon={photoIcon}
            title="Фото"
            imageProps="https://www.gravatar.com/avatar/7bda2a2eac33e696cf0978dc9d24b5f0?s=328&d=identicon&r=PG&f=1"
            name="photo"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <CircleImageUploader
            register={register}
            icon={iconIcon}
            title="Иконка"
            imageProps={null}
            name="icon"
          />
        </ImagesUploadContainer>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Название категория"
            label="Название категория"
            name="name"
            defVal={data.name}
            register={register}
            setValue={setValue}
            watch={watch('name')}
            error={errors.name}
          />
          <Div h={16} />

          <Input
            placeholder="Описание"
            label="Описание"
            name="description"
            style={{ height: 100 }}
            defVal={data.description}
            register={register}
            setValue={setValue}
            watch={watch('description')}
            error={errors.description}
          />
          <Div h={24} />
          <Button>Добавить</Button>
        </form>
      </AddCategoryWrapper>
    </AddCategoryContainer>
  );
};

export default AddCategory;
