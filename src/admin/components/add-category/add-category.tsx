import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { axios, useActionCreators, useError } from '../../../hooks';
import Backdrop from '../../../components/backdrop';
import Input from '../../../components/input';
import Button from '../../../components/button';
import CircleImageUploader from './circle-image-uploader';
import photoIcon from '../../assets/icons/photo.svg';
import iconIcon from '../../assets/icons/icon.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel.svg';
import { useCategory } from '../../pages/category/context';
import {
  AddCategoryContainer,
  AddCategoryWrapper,
  Div,
  Title,
  CloseIconContainer,
  ImagesUploadContainer,
} from './style';

interface FormInputs {
  name: string;
  description: string;
  icon: FileList;
  image: FileList;
}

const AddCategory = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    icon: '',
    photo: '',
  });
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);
  const [isIconUpload, setIsIconUpload] = useState<boolean>(false);
  const { setAlertMessage } = useActionCreators();
  const params = useParams();
  const { checkError } = useError();

  const {
    closeModal,
    state: { id },
  } = useCategory();

  const { register, watch, setValue, handleSubmit, errors } =
    useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const { description, name, icon, image } = data;
    setIsImageUpload(false);
    setIsIconUpload(false);
    console.log('data------->', data);
    if (data.image[0] && data.icon[0]) {
      try {
        let formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('icon', data.icon[0]);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('parentId', !id ? '' : id);

        //console.log('formData -- ', formData);
        const response = await axios.post('/category/add', formData);
        const d = await response.data;

        setAlertMessage({
          message: d.message,
          type: 'success',
        });
        window.location.reload();

        closeModal();
      } catch (e) {
        checkError(e);
      }
    } else {
      if (!data.image[0]) {
        setIsImageUpload(true);
      }
      if (!data.icon[0]) {
        setIsIconUpload(true);
      }
      setAlertMessage({
        message: 'Пожалуйста, заполните все поля',
        type: 'warning',
      });
    }
  };

  return (
    <AddCategoryContainer>
      <Backdrop close={closeModal} />
      <AddCategoryWrapper>
        <CloseIconContainer onClick={closeModal}>
          <Cancel />
        </CloseIconContainer>
        <Title>Добавить категория</Title>
        <ImagesUploadContainer>
          <CircleImageUploader
            register={register}
            icon={photoIcon}
            title="Фото"
            imageProps={null}
            name="image"
            isUpload={isImageUpload}
            setValue={setValue}
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <CircleImageUploader
            register={register}
            icon={iconIcon}
            title="Иконка"
            imageProps={null}
            name="icon"
            isUpload={isIconUpload}
            setValue={setValue}
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
