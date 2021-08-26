import React, { useState, useEffect, useRef } from 'react';
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
  FirstViewIcon,
  TextareaLabel,
  AddProductWrapp,
  AddPhotoButton,
} from './style';

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as PhotoApparat } from '../../assets/icons/add-product-photo-apparat.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/add-product-delete-icon.svg';
import { ReactComponent as FirstView } from '../../assets/icons/first-view.svg';
import SimpleInput from '../../components/simple-input';

interface Params {
  categoryId: string;
  productId: string;
}

interface AddProductDataType {
  name: string;
  price: string;
  quantity: string;
  productComment: string;
}

interface DeliveryAddressType {
  province: string;
  city: string;
}

interface AddedPhotosType {
  photoUrl: string;
  isMain: boolean;
}

const AddProductForm = () => {
  const { categoryId, productId } = useParams<Params>();
  const { checkError } = useError();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [openDeleivery, setOpenDeleivery] = useState<boolean>(false);
  const [productPhoto, setProductPhoto] = useState<any>([]);
  const [allFields, setAllFields] = useState<any>(null);
  const [collectiveJson, setCollectiveJson] = useState<any>(null);
  const [region, setRegion] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [photoArray, setPhotoArray] = useState<any>([
    {
      photoData: '',
      isMain: true,
    },
  ]);
  const [addProductData, setAddProductData] = useState<AddProductDataType>({
    name: '',
    price: '',
    quantity: '',
    productComment: '',
  });
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressType>({
    province: '',
    city: '',
  });
  const [addedPhotos, setAddedPhotos] = useState<any>([]);

  useEffect(() => {
    getData(productId);

    if (textareaRef) {
      textareaRef.current?.focus();
    }
  }, []);

  const addProductChangeHandler = (ev: any) => {
    setAddProductData((prevState) => {
      return {
        ...prevState,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  /** TODO
   *
   *handleInput(e: any, id: string, parentId: any) da "e" ning qiymati 2 ta qiymat qabul qiladi:
    1) e = bir marta string qiymat qiymat
    2) e = bir marta Event objectini qabul qiladi(asosan Date tipidan keladi)
   */
  const handleInput = (
    e: any,
    id: string,
    parentId: any,
    isReference?: boolean
  ) => {
    if (e) {
      if (typeof e == 'object') {
        e = e.target.value;
      }
      let copyObj = JSON.parse(JSON.stringify(collectiveJson));
      setCollectiveJson(
        changeFieldsValueHandler(e, id, copyObj, parentId, isReference)
      );
    }
  };

  const changeFieldsValueHandler = (
    val: any,
    id: string,
    copyObj: any,
    parentId: any,
    isReference?: boolean
  ) => {
    for (let key in copyObj) {
      if (key === 'id' && copyObj[key] == parentId) {
        for (let i = 0; i < copyObj.fields.length; i++) {
          if (!isReference) {
            if (copyObj.fields[i].id == id) {
              copyObj.fields[i].values = val;
            }
          } else {
            if (
              copyObj.fields[i].values &&
              copyObj.fields[i].values.length > 0
            ) {
              for (let j = 0; j < copyObj.fields[i].values.length; j++) {
                if (copyObj.fields[i].values[j].id == id) {
                  copyObj.fields[i].values = copyObj.fields[i].values[j].id;
                }
              }
            }
          }
        }
      }
    }

    if (copyObj.products.length > 0) {
      for (let i = 0; i < copyObj.products.length; i++) {
        changeFieldsValueHandler(
          val,
          id,
          copyObj.products[i],
          parentId,
          isReference
        );
      }
    }

    return copyObj;
  };

  const dropdownRegionHandle = (data: any) => {
    setRegion(data.value);
    setDeliveryAddress((prevState) => {
      return {
        ...prevState,
        province: data.value,
      };
    });
  };

  const dropdownCityHandle = (data: any) => {
    setCity(data.value);
    setDeliveryAddress((prevState) => {
      return {
        ...prevState,
        city: data.value,
      };
    });
  };

  const setDelivery = (ev: any) => {
    const val = ev.target.value;
    if (val == 'yes') {
      setOpenDeleivery(true);
    } else {
      setOpenDeleivery(false);
    }
  };

  const getData = async (id: any) => {
    try {
      const response = await axios.get('/meta_data/product/' + id);
      const data = await response.data;
      setAllFields(data);
      setCollectiveJson(data);
    } catch (error) {
      checkError(error);
    }
  };

  const handleProductPhoto = (ev: any, isMainImg: boolean) => {
    let targetFile = ev.target.files;
    console.log('isMainImg ', isMainImg);

    if (ev && targetFile && targetFile.length > 0) {
      for (let i = 0; i < targetFile.length; i++) {
        let imgFile = targetFile[i];
        const fileExt = imgFile.name.toLowerCase().split('.').pop();
        console.log('imgFile ', imgFile);

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
            setProductPhoto((prevState: any) => {
              return [...prevState, reader.result];
            });

            setAddedPhotos((prevState: any) => {
              return [
                ...prevState,
                { photoData: reader.result, isMain: isMainImg },
              ];
            });
          };
          reader.readAsDataURL(imgFile);

          // const formData = new FormData();
          // formData.append('file', imgFile);
        } else {
          setAlertMessage({
            message:
              'Siz yuklagan rasm hajmi juda katta yoki boshqa format tanladingiz',
            type: 'error',
            position: AlertPosition.TOP_CENTER,
          });
        }
      }
    }
  };

  const handleDeletePhoto = () => {};

  const addMorePhoto = () => {
    if (photoArray.length < 8) {
      setPhotoArray([
        ...photoArray,
        {
          photoData: '',
          isMain: false,
        },
      ]);
    }
    return false;
  };

  console.log('photoArray ', photoArray);
  console.log('addedPhotos ', addedPhotos);

  const sendData = async () => {
    const newObj: any = { ...collectiveJson };
    newObj.addProductData = { ...addProductData };
    newObj.deliveryAddress = { ...deliveryAddress };
    newObj.addedPhotos = [...addedPhotos];

    console.log('newObj ', newObj);

    try {
      const response = await axios.post('/product', newObj);
      const data = await response.data;
      console.log('response => ', data);
    } catch (error) {
      checkError(error);
    }
  };

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
          <AddProductWrapp>
            <AddProductFormItemBody>
              <AddProductFormItemBodyItem>
                <SimpleInput
                  name="name"
                  label="Введите название товара *"
                  placeholder="Введите название товара *"
                  onChange={addProductChangeHandler}
                />
              </AddProductFormItemBodyItem>

              <AddProductFormItemBodyItem>
                <SimpleInput
                  name="price"
                  label="Стоимость *"
                  placeholder="Стоимость *"
                  // inputType="number"
                  // inputValueHandler={addProductChangeHandler}
                  onChange={addProductChangeHandler}
                />
              </AddProductFormItemBodyItem>

              <AddProductFormItemBodyItem>
                <SimpleInput
                  name="quantity"
                  label="Производитель *"
                  placeholder="Производитель *"
                  // inputType="number"
                  onChange={addProductChangeHandler}
                  // inputValueHandler={addProductChangeHandler}
                />
              </AddProductFormItemBodyItem>
            </AddProductFormItemBody>
            <AddProductFormItemBodyItem className="wrap">
              <Textarea
                name="productComment"
                ref={textareaRef}
                // placeholder="Введите описание товара"
                onChange={addProductChangeHandler}
              ></Textarea>
              <TextareaLabel>Введите описание товара</TextareaLabel>
            </AddProductFormItemBodyItem>
          </AddProductWrapp>
        </AddProductFormItem>

        <AddProductPhotoBox>
          <ProductTitle fSize={16} title="Добавить фото" />
          <AddProductPhotoBoxItem>
            <AddProductPhotoAttention>
              Первое фото будет на обложке объявления. Перетащите, чтобы
              изменить порядок
            </AddProductPhotoAttention>
            <AddProductPhoto>
              {photoArray.length > 0 &&
                photoArray.map((item: any, index: number) =>
                  item.isMain ? (
                    <AddProductPhotoItem>
                      <input
                        multiple
                        type="file"
                        onChange={(ev: any) => handleProductPhoto(ev, true)}
                      />
                      <FirstViewIcon>
                        <FirstView />
                      </FirstViewIcon>
                      {productPhoto ? (
                        <img src={productPhoto[index]} />
                      ) : (
                        <PtotoApparatBox
                          onChange={(ev: any) => handleProductPhoto(ev, true)}
                        >
                          <PhotoApparat />
                        </PtotoApparatBox>
                      )}

                      {productPhoto ? (
                        <DeleteIconBox onClick={handleDeletePhoto}>
                          <DeleteIcon />
                        </DeleteIconBox>
                      ) : null}
                    </AddProductPhotoItem>
                  ) : (
                    <AddProductPhotoItem>
                      <input
                        multiple
                        type="file"
                        onChange={(ev: any) => handleProductPhoto(ev, false)}
                      />
                      {productPhoto ? (
                        <img src={productPhoto[index]} />
                      ) : (
                        <PtotoApparatBox
                          onChange={(ev: any) => handleProductPhoto(ev, false)}
                        >
                          <PhotoApparat />
                        </PtotoApparatBox>
                      )}

                      {productPhoto ? (
                        <DeleteIconBox onClick={handleDeletePhoto}>
                          <DeleteIcon />
                        </DeleteIconBox>
                      ) : null}
                    </AddProductPhotoItem>
                  )
                )}
            </AddProductPhoto>
            <AddPhotoButton onClick={addMorePhoto}>ADD PHOTO</AddPhotoButton>
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
                  selected={region}
                  callback={dropdownRegionHandle}
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
                  selected={city}
                  callback={dropdownCityHandle}
                />
              </DeleiveryZoneItem>
            </DeleiveryZone>
          </DeleiveryZoneBox>
        ) : null}

        <AddProductFormBottom>
          <Button btnType="gray">Очистить</Button>
          <Button onClick={sendData}>Опубликовать</Button>
        </AddProductFormBottom>
      </AddProductFormContainer>
    </Container>
  );
};

export default AddProductForm;
