import React, { useState, FC, useEffect, useRef } from 'react';
import { AlertPosition } from '../../../../utils/alert-position-enum';

import Input from '../../../../components/input/';
import Button from '../../../../components/button';
import Dropdown from '../../../../components/drop-down'
import { axios, useActionCreators, useSelector } from '../../../../hooks';
import { useForm } from "react-hook-form";

import {
   PersonalInfoContainer, PersonalHeader, PersonalHeaderLeft, PersonalHeaderRight, PersonalAvatar,
   PersonalAvatarImg, PersonalNameWrapper, PersonalName, PersonalNameEmail, ChangeProfileButton, ChangeName, PersonalBody,
   PersonalBodyGrid, PersonalBodyFlex, PersonalEditImage, PersonalAvatarEdit, PersonalEditImageOther, PersonalVerified,
   PersonalVerifiedToggle
} from './style';

import Avatar from '../../../../assets/images/personal-info-avatar.png';
import { ReactComponent as PersonalAvatarEditImg } from '../../../../assets/icons/personal-info-avatar-edit.svg';
import { ReactComponent as Verified } from '../../../../assets/icons/verified.svg';
import getStoredState from 'redux-persist/es/integration/getStoredStateMigrateV4';
import inputLetter from '../../../../utils/input-letter';

interface PersonalInfoEditProps {
   toggleComponent: () => void
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const { register, handleSubmit, control } = useForm();

   const [state, setState] = useState<any>({
      id: "60927f03ad717f2975f9713d",
      firstName: "",
      secondName: "",
      phoneNumber: null,
      homePhoneNumber: null,
      email: null,
      inn: "",
      passportType: null,
      passportNumber: "",
      gender: null,
      birthday: null,
      dateOfExpire: "2021-06-17",
      dateOfIssue: null

   });

   const [avatar, setAvatar] = useState<any>(Avatar);
   const [imgUrl, setImgUrl] = useState<any>(null);
   const [avatarToggle, setAvatarToggle] = useState(false);
   const { setAlertMessage } = useActionCreators();

   const fileRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (fileRef.current && fileRef.current.files && fileRef.current.files[0]) {
         setAvatarToggle(true);
      }
   }, [avatar]);

   useEffect(() => {
      getData('60927f03ad717f2975f9713d');
   }, []);

   const handleChange = (ev: any) => {

      const name = ev.target.name;
      const value = ev.target.value;

      setState({
         ...state,
         [name]: value
      })
   }

   const dropdownHandle = (data: any) => {
      setState({
         ...state,
         gender: data.value
      })
   }

   const dropdownDocumentHandle = (data: any) => {
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
                  message: `Serverdan rasmni manzili(url) NULL keldi!`,
                  type: 'error',
                  position: AlertPosition.TOP_CENTER
               })
            }

         } catch (error) {
            if (error.debugMessage) {
               setAlertMessage({
                  message: error.debugMessage,
                  type: 'error',
                  position: AlertPosition.TOP_LEFT
               });
            } else {
               setAlertMessage({
                  message: error.message,
                  type: 'error',
                  position: AlertPosition.TOP_LEFT
               });
            }
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
         setState(data);
         setAvatar(data.imageUrl);
         setImgUrl(data.imageUrl);
      } catch (error) {
         if (error.debugMessage) {
            setAlertMessage({
               message: error.debugMessage,
               type: 'error',
               position: AlertPosition.TOP_LEFT
            });
         } else {
            setAlertMessage({
               message: error.message,
               type: 'error',
               position: AlertPosition.TOP_LEFT
            });
         }
      }
   }

   const uploadData = async (obj: any) => {
      // ev.preventDefault();
      try {
         let dataObj = {
            ...state,
            ...obj,
            imageUrl: imgUrl.imageUrl || imgUrl
         }
         console.log("dataObj === ", dataObj)

         const response = await axios.post(`user/`, dataObj);
         const data = await response.data;
         console.log("DDDDDDDDDDD ===  ", data);
         // toggleComponent();
         setAlertMessage({
            message: data.message,
            type: 'success',
            position: AlertPosition.TOP_CENTER
         })
      } catch (error) {
         console.log('error === ', error)
         // if (error.debugMessage) {
         //    setAlertMessage({
         //       message: error.debugMessage,
         //       type: 'error',
         //       position: AlertPosition.TOP_LEFT
         //    });
         // } else {
         //    setAlertMessage({
         //       message: error.message,
         //       type: 'error',
         //       position: AlertPosition.TOP_LEFT
         //    });
         // }
      }
   }

   console.log('STATE = ', state);

   const onSubmit = (data: any) => {
      console.log('data ===== ', data);
      uploadData(data);
   }
   return (
      state &&
      <PersonalInfoContainer>
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
                        onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                        label="Имя"
                        value={state.firstName}
                        defaultValue={state.firstName}
                        type="text" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Dropdown
                        option={['Биометрический паспортs', 'Биометрический паспорт 2']}
                        label="Тип удостоверяющего документа"
                        selected={state.passportType}
                        callback={dropdownDocumentHandle} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="passportNumber"
                        placeholder="Серия номер распорта(ID-карты)"
                        // onChange={handleChange}
                        label="Серия номер распорта(ID-карты)"
                        inputType="passport"
                        control={control}
                        defaultValue={state.passportNumber}
                     />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="secondName"
                        label="Фамилия"
                        placeholder="Фамилия"
                        value={state.secondName}
                        onChange={ev => setState({ ...state, secondName: inputLetter(ev) })}
                     />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input onChange={handleChange} label="Дата выдачи" name="dateOfIssue" defaultValue={state.dateOfIssue} type="date" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="phoneNumber"
                        onChange={handleChange}
                        label="Телефон"
                        placeholder="Телефон"
                        // value={state.phoneNumber}
                        defaultValue={state.phoneNumber}
                        control={control}
                        inputType="phone" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input onChange={handleChange} label="Срок действия" name="dateOfExpire" defaultValue={state.dateOfExpire} type="date" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="homePhoneNumber"
                        onChange={handleChange}
                        label="Телефон (домашний)"
                        placeholder="Телефон (домашний)"
                        // value={state.homePhoneNumber} 
                        defaultValue={state.homePhoneNumber}
                        control={control}
                        inputType="phone" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        onChange={handleChange}
                        label="Дата рождения"
                        // defaultValue="2014-02-09" 
                        defaultValue={state.birthday}
                        type="date"
                        name="birthday"
                     />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="email" onChange={handleChange} placeholder="Эл.почта" value={state.email} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="inn"
                        placeholder="ИНН"
                        onChange={handleChange}
                        label="ИНН"
                        defaultValue={state.inn.toString()}
                        value={state.inn}
                        inputType="inn"
                        control={control} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Dropdown option={['Мужской', 'Женский']} selected={state.gender} label="Пол" callback={dropdownHandle} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     {/* <Input name="inn" onChange={handleChange} label="ИНН" value={state.inn} /> */}
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true} style={{ display: 'flex', alignItems: 'flex-end' }}>
                     <Button type="submit" style={{ backgroundColor: '#1541A9', width: '100%' }}>Сохранить</Button>
                  </PersonalBodyFlex>
               </PersonalBodyGrid>
            </form>
         </PersonalBody>
      </PersonalInfoContainer>
   )
}

export default PersonalInfoEdit;