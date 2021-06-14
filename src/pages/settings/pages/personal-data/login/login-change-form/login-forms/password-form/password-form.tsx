import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useActionCreators } from '../../../../../../../../hooks';
import Button from '../../../../../../../../components/button';
import CircleLoader from '../../../../../../../../components/circle-loader';
import Password from '../../../../../../../../components/login/login-inputs/password';
import {
  PasswordFormContainer,
  Caption,
  Div,
  Error,
  ErrorContainer,
} from './style';

interface FormInputs {
  password: string;
}

interface Props {
  confirmPassword: (
    password: string,
    callback: (error: string) => void
  ) => void;
}

///marketplace-v1/api/user/validate_password

///marketplace-v1/api/user/confirm_phone_number

///marketplace-v1/api/user/change_password

const PasswordForm: React.FC<Props> = ({ confirmPassword }) => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const { setAlertMessage } = useActionCreators();

  const submit = (data: FormInputs) => {
    setError(null);
    setLoading(true);
    if (data.password.length > 0) {
      if (data.password.length >= 6) {
        confirmPassword(data.password, (error) => {
          setLoading(false);
          setAlertMessage({ message: error, type: 'error' });
        });
      } else {
        setLoading(false);
        setError('Пароль должен состоять минимум из 6 символов');
      }
    } else {
      setLoading(false);
      setError('Введите пароль');
    }
  };

  return (
    <PasswordFormContainer>
      <Caption>
        Чтобы изменить свой номер мобильного телефона, введите пароль
      </Caption>
      <form onSubmit={handleSubmit(submit)}>
        <Password name='password' register={register} label='Пароль' />

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
    </PasswordFormContainer>
  );
};

export default PasswordForm;
