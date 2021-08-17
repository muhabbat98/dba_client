import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ReactComponent as View } from '../../../assets/icons/view.svg';
import { ReactComponent as Cancel } from '../../../assets/icons/cancel.svg';
import { useActionCreators } from '../../../../hooks';
import {
  CircleImageUploaderContainer,
  Label,
  Input,
  Title,
  IconContainer,
  UploadedImage,
  CancelIconContainer,
  ViewIconContainer,
  IconWrapper,
  Overlay,
} from './style';

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
    console.log(input.files);
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
      console.log(11);
      setAlertMessage({
        message: 'Размер картинки слишком большой или формат не правильный',
        type: 'warning',
      });
      setImage(undefined);
    }
  };
  console.log('image --- ', image);
  return (
    <CircleImageUploaderContainer isImage={image}>
      <Label htmlFor={id} />
      {!image ? (
        <>
          <IconContainer src={icon} />
          <Title>{title}</Title>
        </>
      ) : (
        <>
          <UploadedImage src={image} alt="image" />
          <Overlay>
            <IconWrapper>
              {/*<ViewIconContainer title="Посмотреть фото ">*/}
              {/*  <a href={image} target="_blank">*/}
              {/*    <View />*/}
              {/*  </a>*/}
              {/*</ViewIconContainer>*/}
              <CancelIconContainer
                title="Убрать фото"
                onClick={() => setImage(undefined)}
              >
                <Cancel />
              </CancelIconContainer>
            </IconWrapper>
          </Overlay>
        </>
      )}

      <Input
        onChange={fileHandler}
        name={name}
        type="file"
        id={id}
        ref={register}
        //value={image}
        defaultValue={image}
      />
    </CircleImageUploaderContainer>
  );
};

export default CircleImageUploader;
