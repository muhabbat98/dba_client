import React, { useState } from 'react';
import Button from '../../../../button';
import Phone from '../../../login-inputs/phone';
import Password from '../../../login-inputs/password';
import { OfertaContainer, OfertaLink, OfertaTitle, Error } from './style';

interface RegFormProps {
  register: any;
  handleSubmit: any;
  submit: any;
  phoneHandler: (value: string) => void;
}

const RegForm: React.FC<RegFormProps> = ({
  register,
  handleSubmit,
  submit,
  phoneHandler,
}) => {
  const [error, setError] = useState<string | undefined>('');

  const handle = (data: any) => {
    return submit(data, (error: string | undefined) => {
      setError(error);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handle)}>
        <Phone onchange={phoneHandler} />
        <Password label='Пароль' name='pasword' register={register} />
        <Password
          label='Повторить пароль'
          name='re_pasword'
          register={register}
        />
        {error && <Error> {error}</Error>}
        <OfertaContainer>
          <OfertaTitle>Регистрируясь, вы соглашаетесь с нашими</OfertaTitle>
          <OfertaLink>Условия и политика конфиденциальности.</OfertaLink>
        </OfertaContainer>

        <Button>Продолжить</Button>
      </form>
    </>
  );
};

export default RegForm;
