

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {LogoPart, InputPart, SignUpDiv, LogoHeader, LogoIcon, LogoName, MainLogoPart, InputCard, AdminForm, CardHeader} from './style'
import Mlogo from '../../../assets/icons/m-icon.svg'
import MainImage from './sign-up-img.svg'
import Input from '../../../components/input'
import Button from '../../../components/button'


const MenuModal = () => {
	const { register, handleSubmit, control, watch, errors, setValue } =
    useForm();

  const [state, setState] = useState<any>({
    email: '',
    password: '',
  });
  const onSubmit = (data: any, ev: any) => {
    if (data) {
      console.log(data)
    }
  };
    
  return (
    <>
        <SignUpDiv>
			<LogoPart>
				<LogoHeader>
					<LogoIcon src={Mlogo}></LogoIcon>
					<LogoName>Marketplace</LogoName>
				</LogoHeader>
				<MainLogoPart >
					<img src={MainImage}  alt="analitic engeneer" />
				</MainLogoPart>
			</LogoPart>
			<InputPart>
				<InputCard>
					<CardHeader> Войти </CardHeader>
					
					<AdminForm onSubmit={handleSubmit(onSubmit)}>
						<Input
						name="email"
						placeholder="Email"
						label="Email"
						defVal={state.email}
						inputType="email"
						watch={watch('email')}
						error={errors.email}
						register={register}
						setValue={setValue}
						/>
						<Input
						name="password"
						placeholder="Пароль"
						label="Пароль"
						defVal={state.password}
						watch={watch('password')}
						error={errors.password}
						register={register}
						setValue={setValue}
						/>
						<Button style={{ marginTop: '32px', width: '100%' }} type="submit">
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
