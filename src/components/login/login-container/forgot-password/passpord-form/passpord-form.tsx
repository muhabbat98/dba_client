import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Password from '../../../login-inputs/password';
import Button from '../../../../button';
import { PasspordFormContainer, Div, Exact } from './style';

interface PasspordFormProps {
  sendPassword: (password: string) => void;
}

interface Form {
  password: string;
  re_password: string;
}

const PasspordForm: React.FC<PasspordFormProps> = ({ sendPassword }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const { handleSubmit, register } = useForm<Form>();

  const submit = (data: Form) => {
    const { password, re_password } = data;
    setErrorMessage(null);
    if (password && re_password) {
      if (password.length < 6) {
        setErrorMessage('Пароль должен состоять минимум из 6 символов');
      } else {
        if (password !== re_password) {
          setErrorMessage('Пароли не совпадают');
        } else {
          sendPassword(password);
        }
      }
    } else {
      setErrorMessage('Заполните все поля');
    }
  };
  return (
    <PasspordFormContainer>
      <form onSubmit={handleSubmit(submit)}>
        <Password name='password' register={register} label='Новый пароль' />
        <Password
          name='re_password'
          register={register}
          label='Повторите пароль'
        />
        <Div />
        {errorMessage && <Exact>{errorMessage}</Exact>}
        <Button>Продолжить</Button>
      </form>
    </PasspordFormContainer>
  );
};

export default PasspordForm;
