import React, { useState } from 'react';
import { useActionCreators } from '../../../../../../../hooks';
import Button from '../../../../../../../components/button';
import { NumberFormContainer } from './style';
import { Caption, Div, Error, ErrorContainer } from '../password-form/style';
import { useForm } from 'react-hook-form';
import Input from '../../../../../../../components/input';
import CircleLoader from '../../../../../../../components/circle-loader';

interface FormInputs {
  phone: string;
}

interface Props {
  phoneHandler: (phone: string, callback: (error: string) => void) => void;
}

const NumberForm: React.FC<Props> = ({ phoneHandler }) => {
  const { register, handleSubmit, control } = useForm<FormInputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const { setAlertMessage } = useActionCreators();

  const submit = (data: FormInputs) => {
    setError(null);
    setLoading(true);
    if (data.phone) {
      console.log(data);
      let phone = data.phone.replace(/\s/g, '');
      phone = phone.replace(/_/g, '');
      console.log(phone);
      if (phone.length > 0) {
        if (phone.length > 12) {
          phoneHandler(phone, (error) => {
            setLoading(false);
            setAlertMessage({ message: error, type: 'error' });
          });
        } else {
          setLoading(false);
          setError('Номер телефона введен некорректно');
        }
      } else {
        setLoading(false);
        setError('Введите номер телефона');
      }
    } else {
      setLoading(false);
      setError('Введите номер телефона');
    }
  };

  return (
    <NumberFormContainer>
      <Caption>Пожалуйста, введите новый номер</Caption>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          name="phone"
          control={control}
          inputType="phone"
          label="Hовый номер"
          placeholder="Hовый номер"
        />
        <Div style={{ marginBottom: '12px' }} />
        {error ? (
          <ErrorContainer>
            <Error>{error}</Error>
          </ErrorContainer>
        ) : (
          <Div />
        )}

        <Button>Продолжить</Button>
      </form>
      {loading && <CircleLoader />}
    </NumberFormContainer>
  );
};

export default NumberForm;
