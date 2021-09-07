import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axios, useActionCreators, UserRole } from '../../../../../hooks';
import LoginFooter from '../../../login-footer';
import Phone from '../../../login-inputs/phone';
import Password from '../../../login-inputs/password';
import Button from '../../../../button';
import { useLogin } from '../../../context';
import { AlertPosition } from '../../../../../utils/alert-position-enum';
import { Div, Error, Container } from './style';
import CircleLoader from '../../../../circle-loader';


interface FieldProps {
  pasword: string;
}

const Login = () => {
  const history = useHistory();
  const { setAlertMessage, setUser } = useActionCreators();
  const { register, handleSubmit } = useForm<FieldProps>();
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [phone, setPhone] = useState('');
  
  const {
    state: { user },
  } = useLogin();

  const { closeLogin } = useActionCreators();

  const submit = (data: FieldProps) => {
    setError(null);
    const { pasword } = data;

    if (phone && pasword) {
      if (phone.length < 9) {
        setError('Номер телефона введен некорректно');
        return;
      } else if (pasword.length < 6) {
        setError('Пароль должен состоять минимум из 6 символов');
        return;
      } else {
        setError(null);
        signIn(phone, pasword);
      }
    } else {
      setError('Пожалуйста, заполните все поля.');
    }
  };

  const signIn = async (phoneNumber: string, password: string) => {
    setError(null);
    setLoading(true);
    try {
      const respone = await axios.post('auth/signin', {
        phoneNumber: '+998' + phoneNumber,
        password: password,
        role: user,
      });
      const data = await respone.data;
      setUser(data);
      setLoading(false);
      if (data.roles === UserRole.SELLER) {
        history.push('/seller');
      }
      closeLogin();
      if(data.roles === UserRole.BUYER && history.location.pathname==="/cart"){
        history.push("/checkout")
      }
      // window.location.reload();
    } catch (error) {
      setLoading(false);
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
        });
        //setError(error.debugMessage);
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
      <form onSubmit={handleSubmit(submit)}>
        <Container>
          {loading && <CircleLoader />}
          <Phone onchange={setPhone} />
          <Password label="Пароль" name="pasword" register={register} />
          <Div />
          {error && <Error>{error}</Error>}
          <Button>Продолжить</Button>
        </Container>
      </form>
      <LoginFooter />
    </>
  );
};

export default Login;
