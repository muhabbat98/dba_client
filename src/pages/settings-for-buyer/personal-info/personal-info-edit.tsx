import React, { useState, FC, useEffect, useRef } from 'react';
import { AlertPosition } from '../../../utils/alert-position-enum';

import Input from '../../../components/input/';
import Button from '../../../components/button';
import Dropdown from '../../../components/drop-down'
import { axios, useActionCreators, useError } from '../../../hooks';
import { useForm } from "react-hook-form";

import {
   PersonalInfoContainer, PersonalHeader, PersonalHeaderLeft, PersonalHeaderRight,
   PersonalAvatarImg, PersonalNameWrapper, PersonalName, PersonalNameEmail, ChangeProfileButton, ChangeName, PersonalBody,
   PersonalBodyGrid, PersonalBodyFlex, PersonalEditImage, PersonalAvatarEdit, PersonalEditImageOther, PersonalVerified,
   PersonalVerifiedToggle
} from './style';

import Avatar from '../../../assets/images/personal-info-avatar.png';
import { ReactComponent as PersonalAvatarEditImg } from '../../../assets/icons/personal-info-avatar-edit.svg';
import { ReactComponent as Verified } from '../../../assets/icons/verified.svg';
import moment from 'moment';
import CircleLoader from '../../../components/circle-loader';

interface PersonalInfoEditProps {
   toggleComponent: () => void,
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const { register, handleSubmit, control, watch, errors, setValue } = useForm();
   const { setAlertMessage } = useActionCreators();
   const { checkError } = useError();

   const [state, setState] = useState<any>({
      id: "60927f03ad717f2975f9713d",
      firstName: "",
      secondName: "",
      phoneNumber: "",
      homePhoneNumber: "",
      email: "",
      inn: "",
      passportType: "",
      passportNumber: "",
      gender: "",
      birthday: "",
      dateOfExpire: "",
      dateOfIssue: ""
   });

   const [docType, setDocType] = useState<any>('');
   const [avatar, setAvatar] = useState<any>(Avatar);
   const [imgUrl, setImgUrl] = useState<any>(null);
   const [avatarToggle, setAvatarToggle] = useState(false);
   const [loading, setLoading] = useState(true);

   const fileRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (fileRef.current && fileRef.current.files && fileRef.current.files[0]) {
         setAvatarToggle(true);
      }
   }, [avatar]);

   useEffect(() => {
      getData('60927f03ad717f2975f9713d');
   }, []);

   const dropdownHandle = (data: any) => {
      setState({
         ...state,
         gender: data.value
      })
   }

   const dropdownDocumentHandle = (data: any) => {
      let text;
      if (data.value == 'Биометрический паспорт') {
         text = 'Серия номер биометрического распорта';
      } else if (data.value == 'ID-карта Республики Узбекистан') {
         text = 'Серия номер ID-карты Республики Узбекистан';
      } else if (data.value == 'Паспорт иностранного гражданина') {
         text = 'Серия номер паспорта иностранного гражданина';
      }

      setDocType(text);

      setState({
         ...state,
         passportType: data.value
      })
   }

   const handleAvatarChange = async (ev: any) => {
      let imgFile = ev.target.files[0];
      const fileExt = imgFile.name.toLowerCase().split('.').pop();

      if (imgFile &&
         (fileExt == 'jpg'
            || fileExt == 'jpeg'
            || fileExt == 'png'
            || fileExt == 'gif'
            || fileExt == 'webp')) {

         let reader = new FileReader();
         reader.onload = function () {
            setAvatar(reader.result);
         };
         reader.readAsDataURL(imgFile);

         const formData = new FormData();
         formData.append("file", imgFile);

         try {
            const response = await axios.post(`/images/upload`, formData);
            const data = await response.data;
            if (data.imageUrl) {
               setImgUrl(data);
            } else {
               setAlertMessage({
                  message: 'Serverdan rasmni manzili(url) NULL keldi!',
                  type: 'error',
                  position: AlertPosition.TOP_CENTER
               })
            }
         } catch (error) {
            checkError(error);
         }
      } else {
         setAlertMessage({
            message: 'Siz yuklagan rasm hajmi juda katta yoki boshqa format tanladingiz',
            type: 'error',
            position: AlertPosition.TOP_CENTER
         })
      }
   }

   const getData = async (id: any) => {
      try {
         const response = await axios.get(`/user/${id}`);
         const data = await response.data;
         setDocType(data.passportType);
         const dataObj = { ...data };

         dataObj.birthday = moment(dataObj.birthday).format('YYYY-MM-DD');
         dataObj.dateOfExpire = moment(dataObj.dateOfExpire).format('YYYY-MM-DD');
         dataObj.dateOfIssue = moment(dataObj.dateOfIssue).format('YYYY-MM-DD');

         setLoading(false);
         setState(dataObj);
         setAvatar(data.imageUrl);
         setImgUrl(data.imageUrl);
      } catch (error) {
         checkError(error);
      }
   }

   const uploadData = async (obj: any) => {
      try {
         let dataObj = {
            ...state,
            ...obj,
            imageUrl: imgUrl.imageUrl || imgUrl
         }

         const response = await axios.post(`user/`, dataObj);
         const data = await response.data;
         toggleComponent();
         setAlertMessage({
            message: data.message,
            type: 'success',
            position: AlertPosition.TOP_CENTER
         })
      } catch (error) {
         checkError(error);
      }
   }

   const onSubmit = (data: any, ev: any) => {
      uploadData(data);
   }

   return (
      <PersonalInfoContainer isLoading={loading}>
         {
            loading && <CircleLoader style={{ position: 'absolute' }} />
         }
         {
            !loading && <>
               <PersonalHeader>
                  <PersonalHeaderLeft>
                     <PersonalAvatarEdit isAvatar={avatarToggle}>
                        <PersonalAvatarImg src={avatar} />
                        <input ref={fileRef} type="file" onChange={handleAvatarChange} />
                        {
                           avatarToggle ? (
                              <PersonalEditImageOther onClick={handleAvatarChange}>
                                 <PersonalAvatarEditImg />
                              </PersonalEditImageOther>
                           ) : (
                              <PersonalEditImage isAvatar={avatarToggle}>
                                 <PersonalAvatarEditImg />
                              </PersonalEditImage>
                           )
                        }
                     </PersonalAvatarEdit>
                     <PersonalNameWrapper>
                        <PersonalName>{state.firstName} {" "} {state.secondName}</PersonalName>
                        <PersonalNameEmail>{state.email}</PersonalNameEmail>
                        <PersonalVerified>
                           <Verified />
                           <PersonalVerifiedToggle>Зарегистрирован</PersonalVerifiedToggle>
                        </PersonalVerified>
                     </PersonalNameWrapper>
                  </PersonalHeaderLeft>
                  <PersonalHeaderRight>
                     <ChangeProfileButton onClick={toggleComponent}>
                        <ChangeName style={{ margin: '0px' }}>Отмена</ChangeName>
                     </ChangeProfileButton>
                  </PersonalHeaderRight>
               </PersonalHeader>
               <PersonalBody>
                  <form onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: '28px' }}>
                     <PersonalBodyGrid>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="firstName"
                              placeholder="Имя"
                              label="Имя"
                              // value={state.firstName}
                              defVal={state.firstName}
                              inputType="letter"
                              watch={watch("firstName")}
                              error={errors.firstName}
                              register={register}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Dropdown
                              option={['Биометрический паспорт', 'ID-карта Республики Узбекистан', 'Паспорт иностранного гражданина']}
                              label="Тип удостоверяющего документа"
                              selected={state.passportType}
                              callback={dropdownDocumentHandle} />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="passportNumber"
                              placeholder={docType}
                              label={docType}
                              defVal={state.passportNumber}
                              // value={state.passportNumber}
                              watch={watch("passportNumber")}
                              register={register}
                              error={errors.passportNumber}
                              inputType="passport"
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="secondName"
                              label="Фамилия"
                              placeholder="Фамилия"
                              defVal={state.secondName}
                              watch={watch("secondName")}
                              register={register}
                              inputType="letter"
                              error={errors.secondName}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              label="Дата выдачи"
                              name="dateOfIssue"
                              defVal={state.dateOfIssue}
                              watch={watch("dateOfIssue")}
                              register={register}
                              error={errors.dateOfIssue}
                              setValue={setValue}
                              type="date" />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="phoneNumber"
                              label="Телефон"
                              placeholder="Телефон"
                              defVal={state.phoneNumber}
                              watch={watch("phoneNumber")}
                              register={register}
                              inputType="phone"
                              error={errors.phoneNumber}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              label="Срок действия"
                              name="dateOfExpire"
                              defVal={state.dateOfExpire}
                              watch={watch("dateOfExpire")}
                              register={register}
                              type="date"
                              error={errors.dateOfExpire}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="homePhoneNumber"
                              label="Телефон (рабочий )"
                              placeholder="Телефон (рабочий )"
                              defVal={state.homePhoneNumber}
                              watch={watch("homePhoneNumber")}
                              register={register}
                              inputType="phone"
                              error={errors.homePhoneNumber}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              label="Дата рождения"
                              defVal={state.birthday}
                              watch={watch("birthday")}
                              register={register}
                              type="date"
                              name="birthday"
                              error={errors.birthday}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="email"
                              placeholder="Эл.почта"
                              defVal={state.email}
                              watch={watch("email")}
                              register={register}
                              error={errors.email}
                              inputType="email"
                              setValue={setValue} />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="inn"
                              placeholder="ИНН"
                              label="ИНН"
                              defVal={state.inn}
                              watch={watch("inn")}
                              register={register}
                              inputType="inn"
                              error={errors.inn}
                              setValue={setValue}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Dropdown
                              option={['Мужской', 'Женский']}
                              selected={state.gender}
                              label="Пол"
                              callback={dropdownHandle} />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true} style={{ display: 'flex', alignItems: 'flex-end' }}>
                           <Button type="submit" style={{ backgroundColor: '#1541A9', width: '100%' }}>Сохранить</Button>
                        </PersonalBodyFlex>
                     </PersonalBodyGrid>
                  </form>
               </PersonalBody>
            </>
         }
      </PersonalInfoContainer>
   )
}

export default PersonalInfoEdit;