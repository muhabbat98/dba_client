import React, { FormEvent, useState } from 'react';
import Phone from '../../../login-inputs/phone';
import Button from '../../../../button';
import { PhoneFormContainer, Error } from './style';
import { Div } from '../../login-form/login/style';
import { error } from '../../../../../store/root-action-creators';

interface PhoneFormProps {
  sendPhone: (
    phone: string,
    callback: (error: string | undefined) => void
  ) => void;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ sendPhone }) => {
  const [phone, setPhone] = useState('');
  const [incorrectPhoneError, setIncorrectPhoneError] = useState(false);
  const [noPhone, setNoPhone] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (phone.length === 0) {
      setNoPhone(true);
      setIncorrectPhoneError(false);
      setError('');
    } else if (phone.length < 9) {
      setNoPhone(false);
      setIncorrectPhoneError(true);
      setError('');
    } else {
      setIncorrectPhoneError(false);
      setNoPhone(false);
      sendPhone(phone, (error) => {
        if (error) {
          setError(error);
        } else {
          setError('');
        }
      });
    }
  };

  return (
    <PhoneFormContainer>
      {error && <Error>{error}</Error>}
      {incorrectPhoneError && <Error>Неверный номер</Error>}
      <form onSubmit={submit}>
        <Phone
          onchange={setPhone}
          noPhoneError={noPhone}
          incorrectPhoneError={incorrectPhoneError}
        />
        <Div />
        <Button type='submit'>Продолжить</Button>
      </form>
    </PhoneFormContainer>
  );
};

export default PhoneForm;
