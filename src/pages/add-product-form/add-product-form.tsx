import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import Container from '../../components/grid/container';
import ProductTitle from '../../components/products-title';
import Input from '../../components/input';
import Dropdown from '../../components/drop-down';
import Button from '../../components/button';
import RadioButton from '../../components/radio-button';
import { setAlertMessage } from '../../store/root-action-creators';
import { AlertPosition } from '../../utils/alert-position-enum';

import {
   AddProductFormContainer, AddProductFormBreadcrumb, AddProductFormBreadcrumbItem, AddProductFormItem,
   AddProductFormItemBody, AddProductFormItemBodyItem, Textarea, AddProductFormBottom, DeleiveryItem, Deleivery,
   DeleiveryBox, DeleiveryZone, DeleiveryZoneItem, DeleiveryZoneBox, AddProductPhotoBox,
   AddProductPhotoBoxItem, AddProductPhotoAttention, AddProductPhoto, AddProductPhotoItem,
   PtotoApparatBox, DeleteIconBox
} from './style';

import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as PhotoApparat } from '../../assets/icons/add-product-photo-apparat.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/add-product-delete-icon.svg';

const AddProductForm = () => {
   const { register, setValue } = useForm();

   const [openDeleivery, setOpenDeleivery] = useState<boolean>(false);
   const [productPhoto, setProductPhoto] = useState<any>(null);

   const dropdownDocumentHandle = () => {

   }

   const setDelivery = (ev: any) => {
      const val = ev.target.value;
      if (val == 'yes') {
         setOpenDeleivery(true);
      } else {
         setOpenDeleivery(false);
      }
   }

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
   }

   const handleDeletePhoto = () => {
   }

   return (
      <Container>
         <AddProductFormContainer>
            <AddProductFormBreadcrumb>
               <AddProductFormBreadcrumbItem className="main">Электроника <ArrowRight /></AddProductFormBreadcrumbItem>
               <AddProductFormBreadcrumbItem>Мобильные телефоны и аксессуары <ArrowRight /></AddProductFormBreadcrumbItem>
               <AddProductFormBreadcrumbItem>Мобильные телефоны <ArrowRight /></AddProductFormBreadcrumbItem>
            </AddProductFormBreadcrumb>

            <AddProductFormItem>
               <ProductTitle title="Добавить данные" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Введите название товара *"
                        label="Форма собственности"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Стоимость *"
                        label="Форма собственности"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Количество *"
                        label="Форма собственности"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Textarea placeholder="Введите описание товара"></Textarea>
                  </AddProductFormItemBodyItem>
               </AddProductFormItemBody>
            </AddProductFormItem>


            <AddProductPhotoBox>
               <ProductTitle title="Добавить фото" />
               <AddProductPhotoBoxItem>
                  <AddProductPhotoAttention>Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок</AddProductPhotoAttention>
                  <AddProductPhoto>
                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                     <AddProductPhotoItem>
                        <input
                           type="file"
                           onChange={handleProductPhoto}
                        />
                        {
                           productPhoto ? <img src={productPhoto} /> :
                              (<PtotoApparatBox onClick={handleProductPhoto}>
                                 <PhotoApparat />
                              </PtotoApparatBox>)
                        }
                        {
                           productPhoto ? <DeleteIconBox onClick={handleDeletePhoto}>
                              <DeleteIcon />
                           </DeleteIconBox> : null
                        }
                     </AddProductPhotoItem>

                  </AddProductPhoto>
               </AddProductPhotoBoxItem>
            </AddProductPhotoBox>

            <AddProductFormItem>
               <ProductTitle title="Общая характеристика" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Производитель"
                        label="Производитель"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Количество SIM-карт"
                        label="Количество SIM-карт"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Безконтактная оплата"
                        label="Безконтактная оплата"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Версия ОС"
                        label="Версия ОС"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Отпечаток пальца"
                        label="Отпечаток пальца"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Объем оперативной памяти"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Сканер лица"
                        label="Сканер лица"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Влагозащита"
                        label="Влагозащита"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Объем встроенной памяти"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

               </AddProductFormItemBody>
            </AddProductFormItem>

            <AddProductFormItem>
               <ProductTitle title="Экран" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Тип  дисплея"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Протектор  экрана"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Соотношение сторон"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Диагональ"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Разрешениe экрана"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Частота обновления экрана"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>
               </AddProductFormItemBody>
            </AddProductFormItem>

            <AddProductFormItem>
               <ProductTitle title="Связь" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="WI-FI"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Спутниковая навигация"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Стандарт"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

               </AddProductFormItemBody>
            </AddProductFormItem>

            <AddProductFormItem>
               <ProductTitle title="Камера смартфона" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Dropdown
                        option={[
                           'Биометрический паспорт',
                           'ID-карта Республики Узбекистан',
                           'Паспорт иностранного гражданина',
                        ]}
                        label="Особенности камеры"
                        // selected={state.typeOfIdentityDocumentOfSupervisor}
                        callback={dropdownDocumentHandle}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Фронтальная камера"
                        label="Фронтальная камера"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Основная камера"
                        label="Основная камера"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

               </AddProductFormItemBody>
            </AddProductFormItem>

            <AddProductFormItem>
               <ProductTitle title="Питание и процессор смартфона" />
               <AddProductFormItemBody>
                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Видеопроцессор "
                        label="Видеопроцессор "
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Тип аккумулятора"
                        label="Тип аккумулятора"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder="Емкость аккумулятора"
                        label="Емкость аккумулятора"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>

                  <AddProductFormItemBodyItem>
                     <Input
                        name="typeOfOwnership"
                        placeholder=" Функция быстрой зарядки"
                        label=" Функция быстрой зарядки"
                        // defVal={state.typeOfOwnership}
                        // watch={watch('typeOfOwnership')}
                        // error={errors.typeOfOwnership}
                        register={register}
                        setValue={setValue}
                     />
                  </AddProductFormItemBodyItem>
               </AddProductFormItemBody>
            </AddProductFormItem>


            <DeleiveryBox>
               <ProductTitle title="Доставка" />
               <Deleivery>
                  <DeleiveryItem>
                     <RadioButton value="yes" name="delivery" label="Есть" callback={setDelivery} />
                  </DeleiveryItem>

                  <DeleiveryItem>
                     <RadioButton value="no" name="delivery" label="Нет" callback={setDelivery} />
                  </DeleiveryItem>
               </Deleivery>
            </DeleiveryBox>

            {
               openDeleivery ? (
                  <DeleiveryZoneBox>
                     <ProductTitle title="Территория доставки" />
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
                                 'Янгиюль '
                              ]}
                              label="Город"
                              // selected={state.typeOfIdentityDocumentOfSupervisor}
                              callback={dropdownDocumentHandle}
                           />
                        </DeleiveryZoneItem>
                     </DeleiveryZone>
                  </DeleiveryZoneBox>
               ) : null
            }

            <AddProductFormBottom>
               <Button btnType="gray" >Очистить</Button>
               <Button>Опубликовать</Button>
            </AddProductFormBottom>

         </AddProductFormContainer >
      </Container >
   )
}

export default AddProductForm;
