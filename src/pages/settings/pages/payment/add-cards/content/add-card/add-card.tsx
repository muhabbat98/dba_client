import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../../../../components/input';
import Button from '../../../../../../../components/button';
import Tabs from '../tabs';
import {
  Title,
  AddCardContainer,
  FormContainer,
  Div,
  CheckContainer,
} from './style';
import Checkbox from '../../../../../../../components/checkbox';

interface FormType {
  cardNumber: number;
  expireDate: number;
  cardName: string;
}

const AddCard = () => {
  const { control, handleSubmit, register } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <AddCardContainer>
      <Tabs />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Номер карты'
            placeholder='Номер карты'
            inputType='card'
            control={control}
          />
          <Div />
          <Input
            name='expireDate'
            label='Срок действия'
            placeholder='Срок действия'
            inputType='cardData'
            control={control}
          />
          <Div />
          <Input
            placeholder='Название карты'
            label='Название карты'
            {...register('cardName', { required: true, maxLength: 30 })}
          />
          <Div />
          <CheckContainer>
            <Checkbox id='check' />
            <Title>
              <label htmlFor='check'>Сделать основным способ оплаты </label>
            </Title>
          </CheckContainer>
          <Button>Добавить</Button>
        </form>
      </FormContainer>
    </AddCardContainer>
  );
};

export default AddCard;
