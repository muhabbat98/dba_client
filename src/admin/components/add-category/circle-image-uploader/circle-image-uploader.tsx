import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  CircleImageUploaderContainer,
  Label,
  Input,
  Title,
  IconContainer,
  UploadedImage,
  Overlay,
} from './style';
import { useActionCreators } from '../../../../hooks';

interface Props {
  title: string;
  icon: string;
  imageProps?: string | null;
  register: any;
  name: string;
}

const CircleImageUploader: React.FC<Props> = ({
  imageProps,
  register,
  icon,
  title,
  name,
}) => {
  const [image, setImage] = useState<any>();
  const { setAlertMessage } = useActionCreators();

  useEffect(() => {
    setImage(imageProps);
  }, [imageProps]);

  const id = uuid();

  const fileHandler = (e: any) => {
    const input = e.target;
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
      setAlertMessage({
        message: 'Размер картинки слишком большой или формат не правильный',
        type: 'warning',
      });
      setImage(undefined);
    }
  };

  return (
    <CircleImageUploaderContainer>
      <Label htmlFor={id} />
      {!image ? (
        <>
          <IconContainer src={icon} />
          <Title>{title}</Title>
        </>
      ) : (
        <>
          <UploadedImage src={image} alt="image" />
          <Overlay></Overlay>
        </>
      )}

      <Input
        onChange={fileHandler}
        name={name}
        type="file"
        id={id}
        ref={register}
      />
    </CircleImageUploaderContainer>
  );
};

export default CircleImageUploader;
