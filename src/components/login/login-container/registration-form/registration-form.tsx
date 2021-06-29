import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin, User } from '../../context';
import { axios, useActionCreators } from '../../../../hooks';
import LoginHeader from '../../login-header';
import Line from './line';
import CircleLoader from '../../../circle-loader';
import RegForm from './reg-form';
import Sms from '../../../sms';
import {
  RegistrationFormContainer,
  Title,
  PhonNumberContainer,
  Container,
} from './style';

interface FieldProps {
  phone: string;
  pasword: string;
  re_pasword: string;
}

enum FormType {
  Reg,
  SMS,
}

const RegistrationForm = () => {
  const { setAlertMessage, setUser, closeLogin } = useActionCreators();
  const {
    state: { user },
  } = useLogin();
  const [phone, setPhone] = useState('');
  const [formType, setFormType] = useState(FormType.Reg);
  const { register, handleSubmit } = useForm<FieldProps>();
  const [ph, setPh] = useState('');
  const [ps, setPs] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSub = (
    data: FieldProps,
    callback: (error: string | undefined) => void
  ) => {
    const { pasword, re_pasword } = data;

    if (phone && pasword && re_pasword) {
      if (phone.length < 9) {
        callback('Номер телефона введен некорректно');
        return;
      } else if (pasword && re_pasword) {
        if (pasword.length < 6) {
          callback('Пароль должен состоять минимум из 6 символов');
          return;
        } else {
          if (pasword !== re_pasword) {
            callback('Пароли не совпадают');
          } else {
            registrationHandler(user, phone, pasword, (error) => {
              callback(error);
            });
            setPh(phone);
            setPs(pasword);
          }
        }
      } else {
        callback('Введите пароль');
      }
    } else {
      callback('Пожалуйста, заполните все поля.');
    }
  };

  const reRegistration = async () => {
    try {
      const respone = await axios.post('/auth/signup', {
        role: user,
        phoneNumber: `+998${ph}`,
        password: ps,
      });
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

  const registrationHandler = async (
    role: User,
    phoneNumber: string,
    password: string,
    callback: (error: string | undefined) => void
  ) => {
    callback(undefined);
    setLoading(true);
    try {
      const respone = await axios.post('/auth/signup', {
        role: role,
        phoneNumber: `+998${phoneNumber}`,
        password: password,
      });
      const data = await respone.data;
      setLoading(false);
      setFormType(FormType.SMS);
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

  const phoneHandler = (value: string) => {
    setPhone(value);
  };

  const prev = () => {
    setFormType(FormType.Reg);
  };

  const next = () => {
    setFormType(FormType.SMS);
  };

  const sendSms = async (
    code: string,
    callback: (error: string | undefined) => void
  ) => {
    callback(undefined);
    setLoading(true);
    try {
      const respone = await axios.post('/auth/confirm_registration', {
        role: user,
        phoneNumber: `+998${ph}`,
        password: ps,
        code: code,
      });
      const data = await respone.data;
      setUser(data);
      setAlertMessage({
        message: 'Вы успешно зарегистрировались',
        type: 'success',
      });
      setLoading(false);
      closeLogin();
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

  return (
    <RegistrationFormContainer>
      <LoginHeader title="Регистрация" />
      <Line isSms={formType === FormType.SMS} />
      <Container>
        {loading && <CircleLoader />}
        <Title>
          {formType === FormType.Reg ? (
            <>Пожалуйста, введите номер телефона</>
          ) : (
            <>
              Код активации отправлен на номер
              <PhonNumberContainer>+998 {phone} </PhonNumberContainer>
            </>
          )}
        </Title>

        {formType === FormType.SMS && (
          <Sms sendSms={sendSms} reSend={reRegistration} />
        )}

        {formType === FormType.Reg && (
          <RegForm
            register={register}
            submit={handleSub}
            handleSubmit={handleSubmit}
            phoneHandler={phoneHandler}
          />
        )}
      </Container>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
