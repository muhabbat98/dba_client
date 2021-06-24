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
import inputLetter, { inn, passport, phoneMask } from '../../../../utils/input-letter';
import moment from 'moment';
import CircleLoader from '../../../../components/circle-loader';

interface PersonalInfoEditProps {
   toggleComponent: () => void
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const { register, handleSubmit, control, watch, errors, setValue } = useForm();

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
                  message: 'Serverdan rasmni manzili(url) NULL keldi!',
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

         // dataObj.birthday = dataObj.birthday.split(":").splice(0, 1).join(" ").split("T")[0].split("-").join("-");
         // dataObj.dateOfExpire = dataObj.dateOfExpire.split(":").splice(0, 1).join(" ").split("T")[0].split("-").join("-");
         // dataObj.dateOfIssue = dataObj.dateOfIssue.split(":").splice(0, 1).join(" ").split("T")[0].split("-").join("-");

         dataObj.birthday = moment(dataObj.birthday).format('YYYY-MM-DD');
         dataObj.dateOfExpire = moment(dataObj.dateOfExpire).format('YYYY-MM-DD');
         dataObj.dateOfIssue = moment(dataObj.dateOfIssue).format('YYYY-MM-DD');

         setLoading(false);
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
      console.log("dataa----->", data)
   }

   console.log("state === ", state);

   return (
      <PersonalInfoContainer isLoading={loading}>
         {
            loading && <CircleLoader />
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
                              // onChange={ev => setState({ ...state, firstName: inputLetter(ev) })}
                              label="Имя"
                              // value={state.firstName}
                              defVal={state.firstName}
                              inputType="letter"
                              watch={watch("firstName")}
                              // error={errors.firstName}
                              error={errors.firstName}
                              register={register}
                              setValue={setValue}
                              readOnly
                           />
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
                              // onChange={ev => setState({ ...state, passportNumber: passport(ev) })}
                              label="Серия номер распорта(ID-карты)"
                              defVal={state.passportNumber}
                              // value={state.passportNumber}
                              watch={watch("passportNumber")}
                              register={register}
                              // error={errors.passportNumber}
                              error={errors.passportNumber}

                              inputType="passport"
                              setValue={setValue}
                              readOnly
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
                              // error={errors.secondName}
                              error={errors.secondName}

                              readOnly
                              setValue={setValue}
                           // onChange={ev => setState({ ...state, secondName: inputLetter(ev) })}
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              // onChange={handleChange}
                              label="Дата выдачи"
                              name="dateOfIssue"
                              defVal={state.dateOfIssue}
                              watch={watch("dateOfIssue")}
                              register={register}
                              // error={errors.dateOfIssue}
                              error={errors.dateOfIssue}
                              
                              setValue={setValue}
                              readOnly
                              type="date" />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="phoneNumber"
                              // onChange={handleChange}
                              // onChange={ev => setState({ ...state, phoneNumber: phoneMask(ev) })}
                              label="Телефон"
                              placeholder="Телефон"
                              defVal={state.phoneNumber}
                              watch={watch("phoneNumber")}
                              register={register}
                              inputType="phone"
                              // error={errors.phoneNumber}
                              error={errors.phoneNumber}

                              setValue={setValue}
                              readOnly
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              // onChange={handleChange}
                              label="Срок действия"
                              name="dateOfExpire"
                              defVal={state.dateOfExpire}
                              watch={watch("dateOfExpire")}
                              register={register}
                              type="date"
                              // error={errors.dateOfExpire}
                              error={errors.dateOfExpire}

                              setValue={setValue}
                              readOnly
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="homePhoneNumber"
                              label="Телефон (домашний)"
                              placeholder="Телефон (домашний)"
                              readOnly
                              // onChange={ev => setState({ ...state, homePhoneNumber: phoneMask(ev) })}
                              defVal={state.homePhoneNumber}
                              watch={watch("homePhoneNumber")}
                              register={register}
                              inputType="phone"
                              // error={errors.homePhoneNumber}
                              error={errors.homePhoneNumber}

                              setValue={setValue}
                              
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              // onChange={handleChange}
                              label="Дата рождения"
                              defVal={state.birthday}
                              watch={watch("birthday")}
                              register={register}
                              type="date"
                              name="birthday"
                              // error={errors.birthday}
                              error={ errors.birthday}
                              setValue={setValue}
                              readOnly
                           />
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>

                           <Input
                              name="email"
                              // onChange={handleChange} 
                              placeholder="Эл.почта"
                              defVal={state.email}
                              watch={watch("email")}
                              register={register}
                              // error={errors.email}
                              error={errors.email}
                              inputType="email" 
                              readOnly
                              setValue={setValue}/>
                        </PersonalBodyFlex>
                        <PersonalBodyFlex isEdit={true}>
                           <Input
                              name="inn"
                              placeholder="ИНН"
                              // onChange={ev => setState({ ...state, inn: inn(ev) })}
                              label="ИНН"
                              // defaultValue={state.inn.toString()}
                              defVal={state.inn}
                              watch={watch("inn")}
                              register={register}
                              inputType="inn"
                              readOnly
                              // error={ errors.inn}
                              error={ errors.inn}
                              setValue={setValue}
                           />
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
            </>
         }
      </PersonalInfoContainer>
   )
}

export default PersonalInfoEdit;