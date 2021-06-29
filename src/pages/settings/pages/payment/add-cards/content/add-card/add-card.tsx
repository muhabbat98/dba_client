import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../../../../components/input';
import Button from '../../../../../../../components/button';
import Sms from '../../../../../../../components/sms';
import Tabs from '../tabs';
import {
  Title,
  AddCardContainer,
  FormContainer,
  Div,
  ErrorContainer,
  Error,
  CheckContainer,
} from './style';
import Checkbox from '../../../../../../../components/checkbox';
import CircleLoader from '../../../../../../../components/main-loader';
import { axios, useActionCreators } from '../../../../../../../hooks';

interface FormType {
  card: string;
  expireDate: string;
  cardName: string;
  isMain: boolean;
}

const AddCard = () => {
  const { control, handleSubmit, register, watch, setValue, errors } =
    useForm<FormType>();
  const [loading, isLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setAlertMessage } = useActionCreators();
  const [isSmsStep, setIsSmsStep] = useState<boolean>(false);
  const [smsLoading, setSmsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormType) => {
    console.log(data);
    setError(null);
    const { cardName, card, expireDate, isMain } = data;
    const cardNameTransformed = card.replaceAll(' ', '').replaceAll('_', '');
    const expireDateTransformed = expireDate
      .replaceAll(' ', '')
      .replaceAll('_', '');
    const expirationMonth = expireDate.substr(0, 2);
    const expirationYear = expireDate.substr(3);

    const cardObject = {
      cardName: cardName,
      cardNumber: cardNameTransformed,
      expirationMonth,
      expirationYear,
      main: isMain,
    };

    if (cardName && card && expireDate) {
      if (
        cardNameTransformed.length === 16 &&
        expireDateTransformed.length === 5 &&
        cardName.length > 0
      ) {
        try {
          const respone = await axios.post('/user/card', cardObject);
          const data = await respone;
        } catch (error) {
          if (error.debugMessage) {
            setAlertMessage({
              message: error.debugMessage,
              type: 'error',
            });
          } else {
            setAlertMessage({
              message: error.message,
              type: 'error',
            });
          }
        }
      } else {
        setError('Пожалуйста, заполните все поля.');
      }
    } else {
      setError('Пожалуйста, заполните все поля.');
    }
  };

  const resendHandler = () => {};

  const sendSmsHandler = () => {};

  return (
    <AddCardContainer>
      {!isSmsStep && <Tabs />}

      {isSmsStep && <Sms reSend={resendHandler} sendSms={sendSmsHandler} />}
      {smsLoading && <CircleLoader />}
      {!isSmsStep && (
        <FormContainer>
          {loading && <CircleLoader />}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="card"
              label="Номер карты"
              placeholder="Номер карты"
              inputType="card"
              watch={watch('card')}
              error={errors.card}
              register={register}
              setValue={setValue}
            />

            <Div />

            <Input
              name="expireDate"
              label="Срок действия"
              placeholder="Срок действия"
              inputType="cardData"
              watch={watch('expireDate')}
              error={errors.expireDate}
              register={register}
              setValue={setValue}
            />

            <Div />

            <Input
              placeholder="Название карты"
              label="Название карты"
              name="cardName"
              inputType="letter"
              watch={watch('cardName')}
              error={errors.cardName}
              register={register}
              setValue={setValue}
            />

            <Div />

            {/* {error && (
              <ErrorContainer>
                <Error>{error}</Error>
              </ErrorContainer>
            )} */}

            <CheckContainer>
              <Checkbox id="check" register={register} name="isMain" />
              <Title>
                <label htmlFor="check">Сделать основным способ оплаты </label>
              </Title>
            </CheckContainer>

            <Button>Добавить</Button>
          </form>
        </FormContainer>
      )}
    </AddCardContainer>
  );
};

export default AddCard;
