import React, { useState, useEffect } from 'react';
import img from '../../assets/images/image.png';
import { axios, useActionCreators } from '../../../hooks';
import { ImageUploadContainer, Input, Img } from './style';

interface ImageUpload {
  register: any;
  propImage?: any;
}

const ImageUpload: React.FC<ImageUpload> = ({ register, propImage }) => {
  const [image, setImage] = useState<any>();
  const { setSnackbarMessage } = useActionCreators();

  console.log('propImage', propImage);

  useEffect(() => {
    setImage(propImage);
  }, [propImage]);

  const fileHandler = (e: any) => {
    const input = e.target;
    console.log(e.target.files);
    console.log(e.target);
    const url = input.value;
    const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (
      input.files &&
      input.files[0] &&
      (ext == 'gif' ||
        ext == 'png' ||
        ext == 'jpeg' ||
        ext == 'jpg' ||
        ext == 'webp')
    ) {
      var reader = new FileReader();

      reader.onload = function (ev: any) {
        setImage(ev.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      setSnackbarMessage({
        message: 'Размер картинки слишком большой или формат не правильный',
        type: 'warning',
      });
      setImage(undefined);
    }
  };

  console.log(image);

  return (
    <ImageUploadContainer>
      <Input
        type='file'
        placeholder='Write something...'
        name='file'
        ref={register}
        onChange={fileHandler}
      />
      {!image && <div> Добавить картинку </div>}

      {image && <Img src={image} />}
    </ImageUploadContainer>
  );
};

export default ImageUpload;
