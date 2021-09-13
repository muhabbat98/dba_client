import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useError } from '../../hooks';
import Container from '../../components/grid/container';
import ProductTitle from '../../components/products-title';
import Dropdown from '../../components/drop-down';
import Button from '../../components/button';
import RadioButton from '../../components/radio-button';
import { useActionCreators } from '../../hooks/useActionCreators';
import { AlertPosition } from '../../utils/alert-position-enum';
import { axios } from '../../hooks';
import isEmptyObj from '../../utils/isEmptyObj';
import AddProductFormItemRecursive from './add-product-form-item';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';

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
  ClearButton,
  AddProductFormSaleBox,
} from './style';

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as PhotoApparat } from '../../assets/icons/add-product-photo-apparat.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/add-product-delete-icon.svg';
import { ReactComponent as FirstView } from '../../assets/icons/first-view.svg';
import { ReactComponent as AddProductPlus } from '../../assets/icons/add-product-plus-icon.svg';
import SimpleInput from '../../components/simple-input';
import { maskForMoney } from '../../utils/input-letter';
// import AddProductPhotoV1 from './add-product-photo-V1';

interface Params {
  categoryId: string;
  productId: string;
}

interface AddProductDataType {
  name: string;
  price: string;
  quantity: string;
  productComment: string;
  oldPrice: number;
}

interface DeliveryAddressType {
  province: string;
  city: string;
  deliveryPrice: number;
}

interface AddedPhotosType {
  photoUrl: string;
  isMain: boolean;
  id: string;
}

const AddProductForm = () => {
  const { categoryId, productId } = useParams<Params>();
  const { push } = useHistory();
  const { checkError } = useError();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { setAlertMessage } = useActionCreators();

  const [openDeleivery, setOpenDeleivery] = useState<boolean>(false);
  const [productPhoto, setProductPhoto] = useState<any>([]);
  const [allFields, setAllFields] = useState<any>(null);
  const [collectiveJson, setCollectiveJson] = useState<any>(null);
  const [region, setRegion] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [isReset, setIsReset] = useState<number>(0);
  const [isSale, setIsSale] = useState<boolean>(false);
  const [photoArray, setPhotoArray] = useState<any>([
    {
      photoData: '',
      isMain: true,
      id: uuid(),
    },
  ]);
  const [addProductData, setAddProductData] = useState<AddProductDataType>({
    name: '',
    price: '',
    quantity: '',
    productComment: '',
    oldPrice: 0,
  });
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressType>({
    province: '',
    city: '',
    deliveryPrice: 0,
  });
  const [addedPhotos, setAddedPhotos] = useState<any>([]);

  useEffect(() => {
    getData(productId);
  }, []);

  const addProductChangeHandler = (ev: any) => {
    if (ev) {
      let value = ev.target.value;
      const name = ev.target.name;
      // console.log(maskForMoney(value));
      if (name == 'oldPrice') {
        value = Number(value);
      }
      setAddProductData((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const deliveryPriceHandler = (ev: any) => {
    const value = Number(ev.target.value);

    setDeliveryAddress((prevState) => {
      return {
        ...prevState,
        deliveryPrice: value,
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
    console.log('e => ', e);

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
              copyObj.fields[i].value = val;

              copyObj.fields[i].selectedId = null;
              copyObj.fields[i].selectedName = null;
              copyObj.fields[i].parentId = null;
            }
          } else {
            if (
              copyObj.fields[i].values &&
              copyObj.fields[i].values.length > 0
            ) {
              for (let j = 0; j < copyObj.fields[i].values.length; j++) {
                if (copyObj.fields[i].values[j].id == id) {
                  // copyObj.fields[i].values = copyObj.fields[i].values[j].id;
                  copyObj.fields[i].selectedId = copyObj.fields[i].values[j].id;
                  copyObj.fields[i].selectedName =
                    copyObj.fields[i].values[j].name;
                  copyObj.fields[i].parentId = parentId;
                  copyObj.fields[i].value = null;
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

  const setSale = (ev: any) => {
    const val = ev.target.value;
    if (val == 'yes') {
      setIsSale(true);
    } else {
      setIsSale(false);
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

  const handleProductPhoto = (ev: any, isMainImg: boolean, id: string) => {
    let targetFile = ev.target.files;

    if (ev && targetFile && targetFile.length > 0) {
      for (let i = 0; i < targetFile.length; i++) {
        let imgFile = targetFile[i];
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
            setProductPhoto((prevState: any) => {
              return [...prevState, reader.result];
            });

            setAddedPhotos((prevState: any) => {
              return [
                ...prevState,
                { photoData: reader.result, isMain: isMainImg, id: id },
              ];
            });
          };
          reader.readAsDataURL(imgFile);
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

  const handleDeletePhoto = (id: string, idx: number) => {
    if (photoArray.length > 0) {
      for (let i = 0; i < photoArray.length; i++) {
        if (photoArray[i].id == id) {
          let removedPhotoArray = photoArray.filter(
            (item: any) => item.id != id
          );

          if (addedPhotos.length > 0 && addedPhotos[i]) {
            if (addedPhotos[i].id == id) {
              let removedAddedPhotos = addedPhotos.filter(
                (item: any) => item.id !== id
              );

              setProductPhoto(
                productPhoto.filter((photo: any, index: any) => index != idx)
              );

              setAddedPhotos(removedAddedPhotos);
            }
          }

          setPhotoArray(removedPhotoArray);
        }
      }
    }
  };

  const addMorePhoto = (ev: any) => {
    ev.preventDefault();

    if (photoArray.length < 8) {
      setPhotoArray([
        ...photoArray,
        {
          photoData: '',
          isMain: false,
          id: uuid(),
        },
      ]);
    }
    return false;
  };

  const resetHandle = () => {
    setIsReset(isReset + 1);
    setAddProductData({
      // ...prevState,
      oldPrice: 0,
      name: '',
      price: '',
      productComment: '',
      quantity: '',
    });

    setCollectiveJson(allFields);

    // setAddProductData((prevState) => {
    //   return {
    //     // ...prevState,
    //     oldPrice: 0,
    //     name: '',
    //     price: '',
    //     productComment: '',
    //     quantity: '',
    //   };
    // });

    if (photoArray.length > 0) {
      setPhotoArray([]);
      setAddedPhotos([]);
      setProductPhoto([]);
    }
  };

  const sendData = async (ev: any) => {
    ev.preventDefault();
    const newObj: any = { ...collectiveJson };

    setEmptyValueToReference(collectiveJson);

    newObj.addProductData = { ...addProductData };
    newObj.deliveryAddress = { ...deliveryAddress };
    newObj.addedPhotos = [...addedPhotos];

    delete newObj.id;

    console.log('newObj ', newObj);

    try {
      const response = await axios.post('/product', newObj);
      const data = await response.data;
      console.log('response => ', data);
      if (data.code == 200) {
        push('/product-detail/' + newObj.name + '/' + data.id);
      }
    } catch (error) {
      checkError(error);
    }
  };

  const setEmptyValueToReference = (obj: any) => {
    obj.fields &&
      obj.fields.map((item: any) => {
        if (item.format == 'REFERENCE') {
          item.values = null;
        }
      });

    if (obj.products.length > 0) {
      obj.products.map((item: any) => setEmptyValueToReference(item));
    }
  };

  // const checkDropdownIsFilled = (obj: any): boolean => {
  //   obj.fields &&
  //     obj.fields.map((item: any) => {
  //       if (item.format == 'REFERENCE') {
  //         if (typeof item.values === 'object') {
  //           console.log('item.values instanceof Array');
  //         }
  //         console.log('dddd ', item.values);
  //         return false;
  //       }
  //     });

  //   if (obj.products.length > 0) {
  //     obj.products.map((item: any) => checkDropdownIsFilled(item));
  //   }

  //   return true;
  // };

  // console.log('allFields ', allFields);

  console.log('addedPhotos ', addedPhotos);
  console.log('photoArray ', photoArray);
  console.log('productPhoto ', productPhoto);

  return (
    <Container>
      <AddProductFormContainer>
        <form>
          {/* <AddProductPhotoV1 /> */}

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
                <TextareaLabel
                  className={addProductData.productComment && 'active'}
                >
                  Введите описание товара
                </TextareaLabel>
              </AddProductFormItemBodyItem>
            </AddProductWrapp>
          </AddProductFormItem>

          <AddProductFormItem>
            <ProductTitle fSize={16} title="Скидка" />
            <AddProductWrapp>
              <AddProductFormSaleBox>
                <Row>
                  <Col xl={6}>
                    <RadioButton
                      value="yes"
                      name="sale"
                      label="Есть"
                      callback={setSale}
                    />
                  </Col>
                  <Col xl={6}>
                    <RadioButton
                      isChecked={true}
                      value="no"
                      name="sale"
                      label="Нет"
                      callback={setSale}
                    />
                  </Col>
                </Row>
              </AddProductFormSaleBox>

              <AddProductFormItemBody>
                <AddProductFormItemBodyItem>
                  <SimpleInput
                    name="price"
                    label="Стоимость *"
                    placeholder="Стоимость *"
                    inputType={'moneyFormat'}
                    onChange={addProductChangeHandler}
                  />
                </AddProductFormItemBodyItem>

                <AddProductFormItemBodyItem>
                  {isSale ? (
                    <SimpleInput
                      name="oldPrice"
                      label="Стоимость со скидкой *"
                      placeholder="Стоимость со скидкой *"
                      inputType={'moneyFormat'}
                      isReset={isReset}
                      // onChange={addProductChangeHandler}
                      inputValueHandler={addProductChangeHandler}
                    />
                  ) : null}
                </AddProductFormItemBodyItem>
              </AddProductFormItemBody>
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
                    index == 0 ? (
                      <AddProductPhotoItem>
                        <input
                          multiple
                          type="file"
                          onChange={(ev: any) =>
                            handleProductPhoto(ev, true, item.id)
                          }
                        />
                        <FirstViewIcon>
                          <FirstView />
                        </FirstViewIcon>
                        {productPhoto ? (
                          <img src={productPhoto[index]} />
                        ) : (
                          <PtotoApparatBox
                            onChange={(ev: any) =>
                              handleProductPhoto(ev, true, item.id)
                            }
                          >
                            <PhotoApparat />
                          </PtotoApparatBox>
                        )}

                        {productPhoto ? (
                          <DeleteIconBox
                            onClick={() => handleDeletePhoto(item.id, index)}
                          >
                            <DeleteIcon />
                          </DeleteIconBox>
                        ) : null}
                      </AddProductPhotoItem>
                    ) : (
                      <>
                        <AddProductPhotoItem>
                          <input
                            multiple
                            type="file"
                            onChange={(ev: any) =>
                              handleProductPhoto(ev, false, item.id)
                            }
                          />
                          {productPhoto ? (
                            <img src={productPhoto[index]} />
                          ) : (
                            <PtotoApparatBox
                              onChange={(ev: any) =>
                                handleProductPhoto(ev, false, item.id)
                              }
                            >
                              <PhotoApparat />
                            </PtotoApparatBox>
                          )}

                          {productPhoto ? (
                            <DeleteIconBox
                              onClick={() => handleDeletePhoto(item.id, index)}
                            >
                              <DeleteIcon />
                            </DeleteIconBox>
                          ) : null}
                        </AddProductPhotoItem>
                      </>
                    )
                  )}

                {photoArray.length < 8 ? (
                  <AddProductPhotoItem>
                    <AddPhotoButton onClick={(ev: any) => addMorePhoto(ev)}>
                      <AddProductPlus />
                    </AddPhotoButton>
                  </AddProductPhotoItem>
                ) : null}
              </AddProductPhoto>
            </AddProductPhotoBoxItem>
          </AddProductPhotoBox>

          <AddProductFormItem>
            {!isEmptyObj(allFields) && (
              <AddProductFormItemRecursive
                item={allFields}
                handleInput={handleInput}
                isReset={isReset}
                isAddProduct={true}
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
                  isChecked={true}
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
                      'Андижанская область',
                      'Бухарская область',
                      'Джизакская область',
                      'Кашкадарьинская область',
                      'Наманганская область',
                      'Навоийская область',
                      'Самаркандская область',
                      'Сурхандарьинская область',
                      'Сырдарьинская область',
                      'Ташкентская область',
                      'Ферганская область',
                      'Хорезмская область',
                      'Республика Каракалпакстан',
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
                <DeleiveryZoneItem>
                  <SimpleInput
                    onChange={deliveryPriceHandler}
                    name="deliveryPrice"
                    label="Сумма доставки"
                    placeholder="Сумма доставки"
                  />
                </DeleiveryZoneItem>
              </DeleiveryZone>
            </DeleiveryZoneBox>
          ) : null}
          <AddProductFormBottom>
            <ClearButton onClick={resetHandle} type="reset" value="Очистить" />
            <Button onClick={(ev: any) => sendData(ev)}>Опубликовать</Button>
          </AddProductFormBottom>
        </form>
      </AddProductFormContainer>
    </Container>
  );
};

export default AddProductForm;
