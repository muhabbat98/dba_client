import React, { useState, useMemo } from 'react';
import { axios, useActionCreators } from '../../../../hooks';
import PhoneForm from './phone-form';
import Sms from '../../../sms';
import PasswordForm from './passpord-form';
import Line from './line';
import LoginHeader from '../../login-header';
import { useLogin } from '../../context';
import { ForgotPasswordContainer, Title, Container } from './style';
import CircleLoader from '../../../circle-loader';

enum ForgotPasswordStep {
  Phone,
  Sms,
  Password,
}

const ForgotPassword = () => {
  const {
    state: { user },
    setLoginForm,
  } = useLogin();
  const [step, setStep] = useState(ForgotPasswordStep.Phone);
  const [smsStep, setSmsStep] = useState(false);
  const [passwordStep, setPasswordStep] = useState(false);
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmationUrl, setConfirmationUrl] = useState<string | null>('');
  const { setAlertMessage } = useActionCreators();

  const sendPhone = async (
    phone: string,
    callback: (error: string | undefined) => void
  ) => {
    setLoading(true);
    try {
      const respone = await axios.post('/auth/reset_password', {
        phoneNumber: '+998' + phone,
        role: user,
      });
      const data = await respone.data;
      setNumber(phone);
      setSmsForm();
      callback(undefined);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

  const reSendPhone = async () => {
    try {
      const respone = await axios.post('/auth/reset_password', {
        phoneNumber: '+998' + number,
        role: user,
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

  const sendSms = async (
    code: string,
    callback: (error: string | undefined) => void
  ) => {
    callback(undefined);
    setLoading(true);
    try {
      const response = await axios.post('/auth/confirm_validation_code', {
        phoneNumber: '+998' + number,
        code: code,
      });
      const data = response.data;
      setConfirmationUrl(data.confirmationUrl);
      setPasswordForm();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.debugMessage) {
        callback(error.debugMessage);
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
        });
      }
    }
  };

  const sendPassword = async (password: string) => {
    setLoading(true);
    try {
      const response = await axios.post(confirmationUrl!, {
        newPassword: password,
        role: user,
      });

      const data = await response.data;
      setAlertMessage({
        message: data.message,
        type: 'success',
      });

      setLoginForm();
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

  // const sendSmsConfirm = (
  //   code: string,
  //   callback: (error: string | undefined) => void
  // ) => {
  //   setPasswordForm();
  //   callback(error);
  // };

  const setPhoneForm = () => {
    setSmsStep(false);
    setPasswordStep(false);
    setStep(ForgotPasswordStep.Phone);
  };

  const setSmsForm = () => {
    setSmsStep(true);
    setPasswordStep(false);
    setStep(ForgotPasswordStep.Sms);
  };

  const setPasswordForm = () => {
    setSmsStep(false);
    setPasswordStep(true);
    setStep(ForgotPasswordStep.Password);
  };

  return (
    <ForgotPasswordContainer>
      <LoginHeader title='Восстановление пароля' />

      <Line isSms={smsStep} isPassword={passwordStep} />
      <Container>
        {loading && <CircleLoader />}
        <Title>
          {step === ForgotPasswordStep.Phone && (
            <> Чтобы найти свой аккаунт, введите ваш номер мобилного телефона</>
          )}

          {step === ForgotPasswordStep.Sms && (
            <>Код восстановление пароля отправлен на номер +998 {number} </>
          )}
        </Title>

        {step === ForgotPasswordStep.Phone && (
          <PhoneForm sendPhone={sendPhone} />
        )}
        {step === ForgotPasswordStep.Sms && (
          <Sms sendSms={sendSms} reSend={reSendPhone} />
        )}
        {step === ForgotPasswordStep.Password && (
          <PasswordForm sendPassword={sendPassword} />
        )}
      </Container>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
