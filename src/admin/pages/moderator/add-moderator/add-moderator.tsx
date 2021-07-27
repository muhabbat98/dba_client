import React from 'react';
import ImgUpload from '../../../assets/images/upload-foto.svg'
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import { useForm } from "react-hook-form";
import {ModalContainer,AddContainer,Title,UploadImg} from './style'

interface Propses {
      setClose:any;
      reff?:any;
}

const AddModerator: React.FC<Propses> = ({setClose,reff}) =>{
      const { register, handleSubmit, control, watch, errors, setValue } = useForm();
      const onSubmit = (data: any) => {
            console.log('dataa-->',data);
            setClose(false);
         }
      return(
            <ModalContainer>
                  <AddContainer ref={reff}>
                        <Title>Добавить модератор </Title>  
                        <UploadImg ><img src={ImgUpload}/></UploadImg>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="firstName"
                              placeholder="Имя"
                              label="Имя"
                              // value={state.firstName}
                              // defVal={state.firstName}
                              inputType="letter"
                              watch={watch("firstName")}
                              error={errors.firstName}
                              register={register}
                              setValue={setValue}
                              />
                        </div>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="secondName"
                              label="Фамилия"
                              placeholder="Фамилия"
                              // defVal={state.secondName}
                              watch={watch("secondName")}
                              register={register}
                              inputType="letter"
                              error={errors.secondName}
                              setValue={setValue}
                              />
                        </div>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="phoneNumber"
                              label="Телефон номер"
                              placeholder="Телефон номер"
                              // defVal={state.secondName}
                              watch={watch("phoneNumber")}
                              register={register}
                              inputType="phone"
                              error={errors.phoneNumber}
                              setValue={setValue}
                              />
                        </div>
                           
                           <Button type="submit" >Добавить</Button>
                        </form>
                  </AddContainer>
            </ModalContainer>
      );
}

export default AddModerator;