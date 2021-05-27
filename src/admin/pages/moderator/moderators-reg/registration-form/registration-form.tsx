import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axios } from '../../../../../hooks/useAxios';
import LoginInput from '../../../../components/input';
import PasswordInput from '../../../../components/password-input';
import { LoginFormContainer, Space } from './style';
import Button from '../../../../components/button';
import { ReactComponent as Account } from '../../../../assets/icons/account.svg';
import { ReactComponent as Email } from '../../../../assets/icons/email.svg';
import { useActionCreators } from '../../../../../hooks/useActionCreators';
import Loader from '../../../../components/circle-loader';

type Inputs = {
  username: string;
  email: string;
  password: string;
  r_password: string;
  role: string;
  secondName: string;
  firstName: string;
};

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [isSucces, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { setSnackbarMessage } = useActionCreators();

  const onSubmit = async (data: Inputs) => {
    setIsSuccess(true);
    if (data.r_password === data.password) {
      try {
        const respone = await axios.post('/register_moderator', {
          secondName: data.secondName,
          firstName: data.firstName,
          email: data.email,
          username: data.username,
          password: data.password,
          role: 'mod',
        });

        const resData = await respone.data;

        setSnackbarMessage({
          message: resData.message,
          type: 'success',
        });
        setIsSuccess(false);
        reset();
      } catch (e) {
        setIsSuccess(false);
        if (e.debugMessage) {
          setSnackbarMessage({
            message: e.debugMessage,
            type: 'error',
          });
        } else {
          setSnackbarMessage({
            message: e.message,
            type: 'error',
          });
        }
      }
    } else {
      setSnackbarMessage({
        message: 'Пароли не совпадают',
        type: 'warning',
      });
      setIsSuccess(false);
    }
  };

  return (
    <LoginFormContainer>
      {isSucces && <Loader />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          register={register({ required: true })}
          name='firstName'
          Icon={Account}
          label='Имя'
        />
        <Space />

        <LoginInput
          register={register({ required: true })}
          name='secondName'
          Icon={Account}
          label='Фамилия'
        />
        <Space />

        <LoginInput
          register={register({ required: true })}
          name='username'
          Icon={Account}
          label='Логин'
        />
        <Space />

        <LoginInput
          register={register({ required: true })}
          name='email'
          Icon={Email}
          label='Электронная почта'
          type='email'
        />
        <Space />

        <PasswordInput
          register={register({ required: true })}
          name='password'
          label='Пароль'
          type='password'
        />
        <Space />

        <PasswordInput
          register={register({ required: true })}
          name='r_password'
          label='Повторите пароль'
          type='password'
        />
        <Space />

        <Button size='bg' fullWidth disabled={isSucces}>
          Регистрация
        </Button>
      </form>
    </LoginFormContainer>
  );
};

export default RegistrationForm;
