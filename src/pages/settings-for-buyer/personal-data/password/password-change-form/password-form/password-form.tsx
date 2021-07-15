import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Password from '../../../../../../components/login/login-inputs/password';
import Button from '../../../../../../components/button';
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/ic_close.svg';

import {
  PasswordFormContainer,
  Div,
  Div2,
  Line,
  Caption,
  Title,
  CloseIconContainer,
  Error,
} from './style';
import { axios, useActionCreators } from '../../../../../../hooks';
import CircleLoader from '../../../../../../components/circle-loader';

interface Props {
  closeModal: () => void;
}

interface FormInputs {
  currentPassword: string;
  password: string;
  rePassword: string;
}

const PasswordForm: React.FC<Props> = ({ closeModal }) => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { setAlertMessage } = useActionCreators();

  const submit = (data: FormInputs) => {
    setError(null);
    const { currentPassword, password, rePassword } = data;
    if (currentPassword && password && rePassword) {
      if (currentPassword.length < 6 || password.length < 6) {
        setError('Пароль должен состоять минимум из 6 символов');
        return;
      } else {
        if (password != rePassword) {
          setError('Пароли не совпадают');
        } else {
          changePassword(password, currentPassword);
        }
      }
    } else {
      setError('Пожалуйста, заполните все поля.');
    }
  };

  async function changePassword(password: string, currentPassword: string) {
    setLoading(true);
    try {
      const response = await axios.put('/user/change_password', {
        newPassword: password,
        oldPassword: currentPassword,
      });
      const data = await response.data;
      setLoading(false);

      setAlertMessage({
        message: data.message,
        type: 'success',
      });
      setTimeout(() => {
        closeModal();
      }, 500);
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
      setLoading(false);
    }
  }

  return (
    <PasswordFormContainer>
      {loading && <CircleLoader />}
      <CloseIconContainer>
        <CloseIcon onClick={closeModal} />
      </CloseIconContainer>
      <Caption>Изменить пароль</Caption>
      <Line />
      <Title>Пожалуйста введите текущий пароль</Title>
      <form onSubmit={handleSubmit(submit)}>
        <Password
          label="Текущий пароль"
          name="currentPassword"
          register={register}
        />
        <Div />
        <Password label="Новый пароль" name="password" register={register} />
        <Div />
        <Password
          label="Повторите новый пароль"
          name="rePassword"
          register={register}
        />
        {error ? <Error>{error}</Error> : <Div2 />}
        <Button>Готово</Button>
      </form>
    </PasswordFormContainer>
  );
};

export default PasswordForm;
