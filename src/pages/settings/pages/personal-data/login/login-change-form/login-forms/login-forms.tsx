import React, { useState } from 'react';
import PasswordForm from './password-form';
import SmsForm from './sms-form';
import NumberForm from './number-form';
import { ReactComponent as CloseIcon } from '../../../../../../../assets/icons/ic_close.svg';
import Line from './line';
import { LoginFormsContainer, Title, CloseIconContainer } from './style';
import { axios, useActionCreators } from '../../../../../../../hooks';

export enum LoginChangeFormSteps {
  PASSWORD,
  PHONE,
  SMS,
  END,
}

interface Props {
  closeModal: () => void;
}

const LoginForms: React.FC<Props> = ({ closeModal }) => {
  const [step, setStep] = useState<LoginChangeFormSteps>(
    LoginChangeFormSteps.PASSWORD
  );
  const [token, setToken] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { setAlertMessage } = useActionCreators();

  const confirmPassword = async (
    password: string,
    callback: (error: string) => void
  ) => {
    try {
      const respone = await axios.put('/user/validate_password', password, {
        headers: { 'content-type': 'text/plain' },
      });
      const data = await respone.data;
      setToken(data);
      setStep(LoginChangeFormSteps.PHONE);
    } catch (error) {
      if (error.debugMessage) {
        callback(error.debugMessage);
      } else {
        callback(error.message);
      }
    }
  };

  const phoneHandler = async (
    phone: string,
    callback: (error: string) => void
  ) => {
    try {
      const respone = await axios.put('/user/confirm_phone_number', {
        code: 0,
        phoneNumber: phone,
        temporaryJwt: token,
      });
      const data = await respone.data;
      setPhoneNumber(phone);
      setStep(LoginChangeFormSteps.SMS);
    } catch (error) {
      if (error.debugMessage) {
        callback(error.debugMessage);
      } else {
        callback(error.message);
      }
    }
  };

  const smsHandler = async (sms: string, callback: (error: string) => void) => {
    try {
      const respone = await axios.put('/user/confirm_phone_number', {
        code: sms,
        phoneNumber: phoneNumber,
        temporaryJwt: token,
      });
      const data = await respone.data;

      setStep(LoginChangeFormSteps.END);

      setTimeout(() => {
        setAlertMessage({
          message: data.message,
          type: 'success',
        });
        //+998 66 666 66 55
        closeModal();
      }, 500);
    } catch (error) {
      if (error.debugMessage) {
        callback(error.debugMessage);
      } else {
        callback(error.message);
      }
    }
  };

  const smsResend = async () => {
    try {
      const respone = await axios.put('/user/confirm_phone_number', {
        code: 0,
        phoneNumber: phoneNumber,
        temporaryJwt: token,
      });
      const data = await respone.data;
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
  };

  return (
    <LoginFormsContainer>
      <CloseIconContainer>
        <CloseIcon onClick={closeModal} />
      </CloseIconContainer>

      <Title>Изменение номера мобильного телефона</Title>
      <Line step={step} />
      {step === LoginChangeFormSteps.PASSWORD && (
        <PasswordForm confirmPassword={confirmPassword} />
      )}

      {step === LoginChangeFormSteps.PHONE && (
        <NumberForm phoneHandler={phoneHandler} />
      )}

      {(step === LoginChangeFormSteps.SMS ||
        step === LoginChangeFormSteps.END) && (
        <SmsForm
          phoneNumber={phoneNumber}
          smsResend={smsResend}
          smsHandler={smsHandler}
        />
      )}
    </LoginFormsContainer>
  );
};

export default LoginForms;
