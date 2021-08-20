import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useError } from '../../hooks';
import Container from '../../components/grid/container';
import ProductTitle from '../../components/products-title';
import Dropdown from '../../components/drop-down';
import Button from '../../components/button';
import RadioButton from '../../components/radio-button';
import { setAlertMessage } from '../../store/root-action-creators';
import { AlertPosition } from '../../utils/alert-position-enum';
import { axios } from '../../hooks';
import isEmptyObj from '../../utils/isEmptyObj';
import AddProductFormItemRecursive from './add-product-form-item';

import {
  AddProductFormContainer,
  AddProductFormBreadcrumb,
  AddProductFormBreadcrumbItem,
  AddProductFormItem,
  AddProductFormItemBody,
  AddProductFormItemBodyItem,
  Textarea,
  AddProductFormBottom,
  DeleiveryItem,
  Deleivery,
  DeleiveryBox,
  DeleiveryZone,
  DeleiveryZoneItem,
  DeleiveryZoneBox,
  AddProductPhotoBox,
  AddProductPhotoBoxItem,
  AddProductPhotoAttention,
  AddProductPhoto,
  AddProductPhotoItem,
  PtotoApparatBox,
  DeleteIconBox,
} from './style';

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as PhotoApparat } from '../../assets/icons/add-product-photo-apparat.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/add-product-delete-icon.svg';
import SimpleInput from '../../components/simple-input';

interface Params {
  categoryId: string;
  productId: string;
}

const AddProductForm = () => {
  const { categoryId, productId } = useParams<Params>();
  const { checkError } = useError();

  const [openDeleivery, setOpenDeleivery] = useState<boolean>(false);
  const [productPhoto, setProductPhoto] = useState<any>(null);
  const [allFields, setAllFields] = useState<any>(null);
  const [collectiveJson, setCollectiveJson] = useState<any>(null);

  useEffect(() => {
    getData(productId);
  }, []);

  /** TODO
   *
   *handleInput(e: any, id: string, parentId: any) da "e" ning qiymati 2 ta qiymat qabul qiladi:
    1) e = bir marta string qiymat qiymat
    2) e = bir marta Event objectini qabul qiladi(asosan Date tipidan keladi)
   */
  const handleInput = (e: any, id: string, parentId: any) => {
    console.log('handleInput',e);
    if (e) {
      console.log('e => ', typeof e);
      console.log('id => ', id);
      console.log('parentid => ', parentId);
      if (typeof e == 'object') {
        e = e.target.value;
      }
      let copyObj = { ...allFields };
      console.log(changeFieldsValueHandler(e, id, copyObj, parentId));
      setCollectiveJson(changeFieldsValueHandler(e, id, copyObj, parentId));
    }
  };

  const changeFieldsValueHandler = (
    val: any,
    id: string,
    copyObj: any,
    parentId: any
  ) => {
    for (let key in copyObj) {
      if (key === 'id' && copyObj[key] == parentId) {
        for (let i = 0; i < copyObj.fields.length; i++) {
          if (copyObj.fields[i].id == id) {
            copyObj.fields[i].values = val;
          }
        }
      }
    }

    if (copyObj.products.length > 0) {
      for (let i = 0; i < copyObj.products.length; i++) {
        changeFieldsValueHandler(val, id, copyObj.products[i], parentId);
      }
    }

    return copyObj;
  };

  const dropdownDocumentHandle = () => {};

  const setDelivery = (ev: any) => {
    const val = ev.target.value;
    if (val == 'yes') {
      setOpenDeleivery(true);
    } else {
      setOpenDeleivery(false);
    }
  };

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

  const getData = async (id: any) => {
    try {
      const response = await axios.get('/meta_data/product/' + id);
      const data = await response.data;
      setAllFields(data);
    } catch (error) {
      checkError(error);
    }
  };

  const handleDeletePhoto = () => {};

  return (
    <Container>
      <AddProductFormContainer>
        <AddProductFormBreadcrumb>
          <AddProductFormBreadcrumbItem className="main">
            Электроника <ArrowRight />
          </AddProductFormBreadcrumbItem>
          <AddProductFormBreadcrumbItem>
            Мобильные телефоны и аксессуары <ArrowRight />
          </AddProductFormBreadcrumbItem>
          <AddProductFormBreadcrumbItem>
            Мобильные телефоны <ArrowRight />
          </AddProductFormBreadcrumbItem>
        </AddProductFormBreadcrumb>

        <AddProductFormItem>
          <ProductTitle fSize={16} title="Добавить данные" />
          <AddProductFormItemBody>
            <AddProductFormItemBodyItem>
              <SimpleInput
                label="Введите название товара *"
                placeholder="Введите название товара *"
                inputValueHandler={handleInput}
              />
            </AddProductFormItemBodyItem>

            <AddProductFormItemBodyItem>
              <SimpleInput
                label="Стоимость *"
                placeholder="Стоимость *"
                inputType="number"
                inputValueHandler={handleInput}
              />
            </AddProductFormItemBodyItem>

            <AddProductFormItemBodyItem>
              <SimpleInput
                label="Количество *"
                placeholder="Количество *"
                inputType="number"
                inputValueHandler={handleInput}
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
              Первое фото будет на обложке объявления. Перетащите, чтобы
              изменить порядок
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

        <AddProductFormItem>
          {!isEmptyObj(allFields) && (
            <AddProductFormItemRecursive
              item={allFields}
              handleInput={handleInput}
            />
          )}
        </AddProductFormItem>

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
      </AddProductFormContainer>
    </Container>
  );
};

export default AddProductForm;
