import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SendRecipient, FormRecipient } from './style';

import Input from '../../../components/input';
import Button from '../../../components/button';

interface RecipientItemProps {
  nextStep: any;
}
const RecipientItem: FC<RecipientItemProps> = ({ nextStep }) => {
  const { register, handleSubmit, control, watch, errors, setValue } =
    useForm();
  console.log(nextStep);
  const [state, setState] = useState<any>({
    fio: '',
    phoneNumber: '',
  });

  const onSubmit = (data: any, ev: any) => {
    if (data) {
      nextStep.setTab('address');
      nextStep.setStep({ ...nextStep.step, address: 1 });
    }
    console.log('data => ', data);
  };

  return (
    <SendRecipient>
      <FormRecipient onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="fio"
          placeholder="Ф.И.О. получателя"
          label="Ф.И.О. получателя"
          defVal={state.fio}
          inputType="letter"
          watch={watch('fio')}
          error={errors.fio}
          register={register}
          setValue={setValue}
        />
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
        <Button type="submit">Продолжить</Button>
      </FormRecipient>
    </SendRecipient>
  );
};
export default RecipientItem;
