import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../../../../components/input';
import Tabs from '../tabs';
import { AddCardContainer, FormContainer } from './style';

interface FormType {
  cardNumber: number;
  expireDate: number;
  cardName: string;
}

const AddCard = () => {
  const { control, handleSubmit } = useForm<FormType>();

  const onSubmit = () => {};

  return (
    <AddCardContainer>
      <Tabs />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='cardNumber'
            label='Номер карты'
            inputType='card'
            control={control}
          />
          <Input
            name='expireDate'
            label='Срок действия'
            inputType='cardData'
            control={control}
          />

          <Input
            name='cardName'
            placeholder='Название карты'
            label='Название карты'
            control={control}
          />
        </form>
      </FormContainer>
    </AddCardContainer>
  );
};

export default AddCard;
