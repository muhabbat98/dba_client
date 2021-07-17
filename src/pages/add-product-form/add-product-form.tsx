import React from 'react'
import Container from '../../components/grid/container';
import {
   AddProductFormContainer, AddProductFormBreadcrumb, AddProductFormBreadcrumbItem, AddProductFormItem,
   AddProductFormItemBody, AddProductFormItemBodyItem, Textarea, AddProductFormBottom
} from './style';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import ProductTitle from '../../components/products-title';
import Input from '../../components/input';
import { useForm } from 'react-hook-form';
import Dropdown from '../../components/drop-down';
import Button from '../../components/button';

const AddProductForm = () => {
   const { register, handleSubmit, control, errors, watch, setValue } = useForm();

   const dropdownDocumentHandle = () => {

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



            <AddProductFormBottom>
               <Button btnType="gray" >Очистить</Button>
               <Button>Опубликовать</Button>
            </AddProductFormBottom>

         </AddProductFormContainer >
      </Container >
   )
}

export default AddProductForm;
