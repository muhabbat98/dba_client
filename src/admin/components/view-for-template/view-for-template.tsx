import React, { FC, useState } from 'react';
import Button from '../../../components/button';
import ProductTitle from '../../../components/products-title';
import SimpleInput from '../../../components/simple-input';
import { setAlertMessage } from '../../../store/root-action-creators';
import RadioButton from '../../../components/radio-button';
import Dropdown from '../../../components/drop-down';

import {
  ViewForTemplateContainer,
  AddProductFormItem,
  AddProductFormItemBody,
  AddProductFormItemBodyItem,
  Textarea,
  AddProductPhotoBox,
  AddProductPhotoBoxItem,
  AddProductPhotoAttention,
  AddProductPhoto,
  AddProductPhotoItem,
  PtotoApparatBox,
  DeleteIconBox,
  DeleiveryBox,
  Deleivery,
  DeleiveryItem,
  DeleiveryZoneBox,
  DeleiveryZone,
  DeleiveryZoneItem,
  AddProductFormBottom,
} from './style';

import { ReactComponent as PhotoApparat } from '../../../assets/icons/add-product-photo-apparat.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/add-product-delete-icon.svg';
import { AlertPosition } from '../../../utils/alert-position-enum';
import ViewForTemplateRecursive from './view-for-template-recursive';

interface ViewForTemplateProps {
  data: any;
}

const ViewForTemplate: FC<ViewForTemplateProps> = ({ data }) => {
  const [productPhoto, setProductPhoto] = useState<any>(null);
  const [openDeleivery, setOpenDeleivery] = useState<boolean>(false);

  const handleProductPhoto = (ev: any) => {
    let imgFile = ev.target.files[0];
    const fileExt = imgFile.name.toLowerCase().split('.').pop();

    if (
      imgFile &&
      (fileExt == 'jpg' ||
        fileExt == 'jpeg' ||
        fileExt == 'png' ||
        fileExt == 'gif' ||
        fileExt == 'webp')
    ) {
      let reader = new FileReader();
      reader.onload = function () {
        setProductPhoto(reader.result);
      };
      reader.readAsDataURL(imgFile);

      const formData = new FormData();
      formData.append('file', imgFile);
    } else {
      setAlertMessage({
        message:
          'Siz yuklagan rasm hajmi juda katta yoki boshqa format tanladingiz',
        type: 'error',
        position: AlertPosition.TOP_CENTER,
      });
    }
  };

  const handleDeletePhoto = () => {};

  const setDelivery = (ev: any) => {
    const val = ev.target.value;
    if (val == 'yes') {
      setOpenDeleivery(true);
    } else {
      setOpenDeleivery(false);
    }
  };

  const dropdownDocumentHandle = () => {};

  return (
    <ViewForTemplateContainer>
      <AddProductFormItem>
        <ProductTitle fSize={16} title="Добавить данные" />
        <AddProductFormItemBody>
          <AddProductFormItemBodyItem>
            <SimpleInput
              label="Введите название товара *"
              placeholder="Введите название товара *"
              //   inputValueHandler={handleInput}
            />
          </AddProductFormItemBodyItem>

          <AddProductFormItemBodyItem>
            <SimpleInput
              label="Стоимость *"
              placeholder="Стоимость *"
              inputType="number"
              //   inputValueHandler={handleInput}
            />
          </AddProductFormItemBodyItem>

          <AddProductFormItemBodyItem>
            <SimpleInput
              label="Количество *"
              placeholder="Количество *"
              inputType="number"
              //   inputValueHandler={handleInput}
            />
          </AddProductFormItemBodyItem>

          <AddProductFormItemBodyItem>
            <Textarea placeholder="Введите описание товара"></Textarea>
          </AddProductFormItemBodyItem>
        </AddProductFormItemBody>
      </AddProductFormItem>

      <AddProductPhotoBox>
        <ProductTitle fSize={16} title="Добавить фото" />
        <AddProductPhotoBoxItem>
          <AddProductPhotoAttention>
            Первое фото будет на обложке объявления. Перетащите, чтобы изменить
            порядок
          </AddProductPhotoAttention>
          <AddProductPhoto>
            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>

            <AddProductPhotoItem>
              <input type="file" onChange={handleProductPhoto} />
              {productPhoto ? (
                <img src={productPhoto} />
              ) : (
                <PtotoApparatBox onClick={handleProductPhoto}>
                  <PhotoApparat />
                </PtotoApparatBox>
              )}
              {productPhoto ? (
                <DeleteIconBox onClick={handleDeletePhoto}>
                  <DeleteIcon />
                </DeleteIconBox>
              ) : null}
            </AddProductPhotoItem>
          </AddProductPhoto>
        </AddProductPhotoBoxItem>
      </AddProductPhotoBox>

      <ViewForTemplateRecursive item={data} />

      <DeleiveryBox>
        <ProductTitle fSize={16} title="Доставка" />
        <Deleivery>
          <DeleiveryItem>
            <RadioButton
              value="yes"
              name="delivery"
              label="Есть"
              callback={setDelivery}
            />
          </DeleiveryItem>

          <DeleiveryItem>
            <RadioButton
              value="no"
              name="delivery"
              label="Нет"
              callback={setDelivery}
            />
          </DeleiveryItem>
        </Deleivery>
      </DeleiveryBox>

      {openDeleivery ? (
        <DeleiveryZoneBox>
          <ProductTitle fSize={16} title="Территория доставки" />
          <DeleiveryZone>
            <DeleiveryZoneItem>
              <Dropdown
                option={[
                  'Биометрический паспорт',
                  'ID-карта Республики Узбекистан',
                  'Паспорт иностранного гражданина',
                ]}
                label="Область"
                // selected={state.typeOfIdentityDocumentOfSupervisor}
                callback={dropdownDocumentHandle}
              />
            </DeleiveryZoneItem>

            <DeleiveryZoneItem>
              <Dropdown
                option={[
                  'Алмалык',
                  'Ангрен',
                  'Ахангаран',
                  'Бекабад',
                  'Нурафшан',
                  'Чирчик ',
                  'Янгиюль ',
                ]}
                label="Город"
                // selected={state.typeOfIdentityDocumentOfSupervisor}
                callback={dropdownDocumentHandle}
              />
            </DeleiveryZoneItem>
          </DeleiveryZone>
        </DeleiveryZoneBox>
      ) : null}

      <AddProductFormBottom>
        <Button btnType="gray">Очистить</Button>
        <Button>Опубликовать</Button>
      </AddProductFormBottom>
    </ViewForTemplateContainer>
  );
};

export default ViewForTemplate;
