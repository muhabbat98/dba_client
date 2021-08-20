import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  LogoPart,
  InputPart,
  SignUpDiv,
  LogoHeader,
  LogoIcon,
  LogoName,
  MainLogoPart,
  InputCard,
  AdminForm,
  CardHeader,
} from './style';
import Mlogo from '../../../assets/icons/m-icon.svg';
import MainImage from './sign-up-img.svg';
import Input from '../../../components/input';
import Password from '../../../components/login/login-inputs/password';

import Button from '../../../components/button';
import Checkbox from '../../../components/checkbox';
import { axios, useActionCreators, UserRole } from '../../../hooks';
import { Link, useHistory } from 'react-router-dom';

const MenuModal = () => {
  const { register, handleSubmit, control, watch, errors, setValue } =
    useForm();

  const { setAlertMessage, setUser } = useActionCreators();
  const { push } = useHistory();

  const [state, setState] = useState<any>({
    password: '',
    phoneNumber: '',
    isAdmin: false,
  });
  const onSubmit = async (data: any, ev: any) => {
    let { phoneNumber, password, isAdmin } = data;

    phoneNumber = phoneNumber
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '');

    try {
      const response = await axios.post('auth/signin', {
        phoneNumber: '+998' + phoneNumber,
        password: password,
        role: isAdmin ? 'admin' : 'moderator',
      });
      const data = await response.data;
      setUser(data);
      push('/admin');
   
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
    <>
      <SignUpDiv>
        <LogoPart>
          <LogoHeader>
            <LogoIcon src={Mlogo}></LogoIcon>
            <LogoName><Link to='/'>Marketplace</Link></LogoName>
          </LogoHeader>
          <MainLogoPart>
            <img src={MainImage} alt="analitic engeneer" />
          </MainLogoPart>
        </LogoPart>
        <InputPart>
          <InputCard>
            <CardHeader>Войти </CardHeader>

            <AdminForm onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="phoneNumber"
                placeholder="Номер телефона"
                label="Номер телефона"
                defVal={state.phoneNumber}
                inputType="phone"
                watch={watch('phoneNumber')}
                error={errors.phoneNumber}
                register={register}
                setValue={setValue}
              />
              <Password
                name="password"
                label="Пароль"
                error={errors.password}
                register={register}
              />

              <Checkbox
                register={register}
                label="войти как администратор"
                name="isAdmin"
              ></Checkbox>

              <Button
                style={{ marginTop: '32px', width: '100%' }}
                type="submit"
              >
                Продолжить
              </Button>
            </AdminForm>
          </InputCard>
        </InputPart>
      </SignUpDiv>
    </>
  );
};

export default MenuModal;
