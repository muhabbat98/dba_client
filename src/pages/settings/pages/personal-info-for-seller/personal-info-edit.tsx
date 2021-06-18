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
import moment from 'moment';
import CircleLoader from '../../../../components/circle-loader';

interface PersonalInfoEditProps {
   toggleComponent: () => void
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const { register, handleSubmit, control } = useForm();

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

   const [avatar, setAvatar] = useState<any>(Avatar);
   const [imgUrl, setImgUrl] = useState<any>(null);
   const [avatarToggle, setAvatarToggle] = useState(false);
   const [loading, setLoading] = useState(true);
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
         const dataObj = { ...data };
         setLoading(false);

         dataObj.birthday = moment(dataObj.birthday).format('YYYY-MM-DD');
         dataObj.dateOfExpire = moment(dataObj.dateOfExpire).format('YYYY-MM-DD');
         dataObj.dateOfIssue = moment(dataObj.dateOfIssue).format('YYYY-MM-DD');

         setState(dataObj);
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

         const response = await axios.post(`user/`, dataObj);
         const data = await response.data;
         toggleComponent();
         setAlertMessage({
            message: data.message,
            type: 'success',
            position: AlertPosition.TOP_CENTER
         })
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

   const onSubmit = (data: any) => {
      uploadData(data);
   }

   console.log("state == ", state);


   return (
      <PersonalInfoContainer isLoading={loading}>
         {
            loading && <CircleLoader />
         }
         {
            !loading && (
               <>
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
                           <PersonalNameEmail> Продавец </PersonalNameEmail>
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
                                 // name="firstName"
                                 placeholder="Название предприятия"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Название предприятия"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="РКП НДС"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="РКП НДС"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Ф.И.О"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Ф.И.О"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="ОКЭД"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="ОКЭД"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="phoneNumber"
                                 onChange={handleChange}
                                 label="Телефон (мобильный)"
                                 placeholder="Телефон (мобильный)"
                                 // value={state.phoneNumber}
                                 defaultValue={state.phoneNumber}
                                 control={control}
                                 inputType="phone" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Код банка"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Код банка"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="homePhoneNumber"
                                 onChange={handleChange}
                                 label="Телефон (домашний)"
                                 placeholder="Телефон (домашний)"
                                 value={state.homePhoneNumber}
                                 defaultValue={state.homePhoneNumber}
                                 control={control}
                                 inputType="phone" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Форма собственности"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Форма собственности"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="email"
                                 onChange={handleChange}
                                 placeholder="Эл.почта"
                                 value={state.email} />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Тип удостоверяющего документа руководител"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Тип удостоверяющего документа руководител"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Dropdown
                                 option={['Супермаркет', 'Супермаркет2']}
                                 // selected={state.gender} 
                                 label="Тип"
                                 callback={dropdownHandle}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Серия и номер документа"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="Серия и номер документа"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 // name="firstName"
                                 placeholder="Расчетный счет в банке"
                                 // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                                 label="СРасчетный счет в банке"
                                 // value={state.firstName}
                                 // defaultValue={state.firstName}
                                 type="text" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 onChange={handleChange}
                                 label="Дата выдачи док-та"
                                 // name="dateOfIssue"
                                 // defaultValue={state.dateOfIssue}
                                 // value={state.dateOfIssue}
                                 type="date" />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Dropdown
                                 option={['Предприниматель', 'Предприниматель2']}
                                 // selected={state.gender} 
                                 label="Вид деятельности"
                                 callback={dropdownHandle}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 onChange={handleChange}
                                 label="Срок действия док-та"
                                 // name="dateOfIssue"
                                 // defaultValue={state.dateOfIssue}
                                 // value={state.dateOfIssue}
                                 type="date" />
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

                           <PersonalBodyFlex isEdit={true} style={{ display: 'flex', alignItems: 'flex-end' }}>
                              <Button type="submit" style={{ backgroundColor: '#1541A9', width: '100%' }}>Сохранить</Button>
                           </PersonalBodyFlex>
                        </PersonalBodyGrid>
                     </form>
                  </PersonalBody>
               </>
            )
         }

      </PersonalInfoContainer>
   )
}

export default PersonalInfoEdit;