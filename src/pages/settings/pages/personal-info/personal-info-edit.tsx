import React, { useState, FC, useEffect, useRef } from 'react';
import { AlertPosition } from '../../../../utils/alert-position-enum';

import Input from '../../../../components/input/';
import Button from '../../../../components/button';
import Dropdown from '../../../../components/drop-down'
import { axios, useActionCreators, useSelector } from '../../../../hooks';

import {
   PersonalInfoContainer, PersonalHeader, PersonalHeaderLeft, PersonalHeaderRight, PersonalAvatar,
   PersonalAvatarImg, PersonalNameWrapper, PersonalName, PersonalNameEmail, ChangeProfileButton, ChangeName, PersonalBody,
   PersonalBodyGrid, PersonalBodyFlex, PersonalEditImage, PersonalAvatarEdit, PersonalEditImageOther, PersonalVerified,
   PersonalVerifiedToggle
} from './style';

import Avatar from '../../../../assets/images/personal-info-avatar.png';
import { ReactComponent as PersonalAvatarEditImg } from '../../../../assets/icons/personal-info-avatar-edit.svg';
import { ReactComponent as Verified } from '../../../../assets/icons/verified.svg';

interface PersonalInfoEditProps {
   toggleComponent: () => void
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const [state, setState] = useState<any>({
      id: "60927f03ad717f2975f9713d",
      firstName: "",
      secondName: null,
      phoneNumber: "",
      homePhoneNumber: null,
      email: null,
      inn: null,
      passportType: null,
      passportNumber: null,
      gender: null,
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
      console.log('useeffect 2');
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
      console.log(data);
      setState({
         ...state,
         gender: data.value
      })
   }

   const dropdownDocumentHandle = (data: any) => {
      console.log(data);
      // setState({
      //    ...state,
      //    gender: data.value
      // })
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
            console.log('Data == ', data);
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
            setAlertMessage({
               message: `Rasmni hajmi katta yoki boshqa format kiritildi`,
               type: 'error',
               position: AlertPosition.TOP_CENTER
            })
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
         setAlertMessage({
            message: error.message,
            type: 'error',
            position: AlertPosition.TOP_CENTER
         })
      }
   }

   const uploadData = async (ev: any) => {
      ev.preventDefault();
      try {
         let dataObj = {
            ...state,
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
         setAlertMessage({
            message: error.message,
            type: 'error',
            position: AlertPosition.TOP_CENTER
         })
      }
   }

   console.log('state = ', state);

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
            <form style={{ paddingBottom: '28px' }}>
               <PersonalBodyGrid>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="firstName" onChange={ev => handleChange(ev)} label="Имя" value={state.firstName} type="text" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Dropdown
                        option={['Биометрический паспорт ', 'Биометрический паспорт 2']}
                        label="Тип удостоверяющего документа"
                        callback={dropdownDocumentHandle} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input
                        name="passportNumber"
                        onChange={handleChange}
                        label="Серия номер распорта(ID-карты)" value={state.passportNumber} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="secondName" onChange={handleChange} label="Фамилия" value={state.secondName} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input onChange={handleChange} label="Дата выдачи" value="27/07/2016" type="date" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="phoneNumber" onChange={handleChange} label="Телефон" value={state.phoneNumber} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input onChange={handleChange} label="Срок действия" value="26/06/2026" type="date" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="homePhoneNumber" onChange={handleChange} label="Телефон (домашний)" value={state.homePhoneNumber} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input onChange={handleChange} label="Дата рождения" value="27/08/2000" type="date" />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="email" onChange={handleChange} placeholder="Эл.почта" value={state.email} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     <Input name="inn" onChange={handleChange} label="ИНН" value={state.inn} />
                  </PersonalBodyFlex>

                  <PersonalBodyFlex isEdit={true}>
                     <Dropdown option={['Мужской', 'Женский']} label="Пол" callback={dropdownHandle} />
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true}>
                     {/* <Input name="inn" onChange={handleChange} label="ИНН" value={state.inn} /> */}
                  </PersonalBodyFlex>
                  <PersonalBodyFlex isEdit={true} style={{ display: 'flex', alignItems: 'flex-end' }}>
                     <Button onClick={uploadData} style={{ backgroundColor: '#1541A9', width: '100%' }}>Сохранить</Button>
                  </PersonalBodyFlex>
               </PersonalBodyGrid>
            </form>
         </PersonalBody>
      </PersonalInfoContainer>
   )
}

export default PersonalInfoEdit;