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
import moment from 'moment';
import CircleLoader from '../../../../components/circle-loader';

interface PersonalInfoEditProps {
   toggleComponent: () => void
}

const PersonalInfoEdit: FC<PersonalInfoEditProps> = ({ toggleComponent }) => {
   const { register, handleSubmit, control, errors, watch, setValue } = useForm();

   const [state, setState] = useState<any>({
      id: "60cb25a8fdf13d0065176014",
      fullName: "",
      nameOfTheCompany: "",
      phoneNumber: "",
      homePhoneNumber: "",
      email: "",
      inn: "",
      imgUrl: "",
      passportType: "",
      passportNumber: "",
      dateOfExpire: "",
      dateOfIssue: "",
      type: "",
      bankAccount: "",
      kindOfActivity: "",
      rkpnds: "",
      oked: "",
      bankCode: "",
      typeOfOwnership: "",
      typeOfIdentityDocumentOfSupervisor: "",
      documentSeriesAndNumber: "",
   });

   const [avatar, setAvatar] = useState<any>(Avatar);
   const [imgUrl, setImgUrl] = useState<any>(null);
   const [avatarToggle, setAvatarToggle] = useState(false);
   const [loading, setLoading] = useState(true);
   const [docType, setDocType] = useState<any>('');

   const { setAlertMessage } = useActionCreators();

   const fileRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (fileRef.current && fileRef.current.files && fileRef.current.files[0]) {
         setAvatarToggle(true);
      }
   }, [avatar]);

   useEffect(() => {
      getData('60cb25a8fdf13d0065176014');
   }, []);

   const dropdownTypeHandle = (data: any) => {
      setState({
         ...state,
         type: data.value
      })
   }

   const dropdownActivityHandle = (data: any) => {
      setState({
         ...state,
         kindOfActivity: data.value
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
         typeOfIdentityDocumentOfSupervisor: data.value
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
         console.log("SSSSAAAA = ", data);
         setDocType(data.typeOfIdentityDocumentOfSupervisor);
         const dataObj = { ...data };
         setLoading(false);

         // dataObj.birthday = moment(dataObj.birthday).format('YYYY-MM-DD');
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
      console.log("OBJEEEECTTT = ", obj);
      try {
         let dataObj = {
            ...state,
            ...obj,
            // birthday: "2021-06-30",
            imageUrl: imgUrl.imageUrl || imgUrl
         }
         console.log("-------------- ", dataObj);

         const response = await axios.post(`user/`, dataObj);
         const data = await response.data;
         toggleComponent();
         setAlertMessage({
            message: data.message,
            type: 'success',
            position: AlertPosition.TOP_CENTER
         })
      } catch (error) {
         console.log("Error = ", error);
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
      console.log("State personal info onSubmit = ", data);
      uploadData(data);
   }

   return (
      <PersonalInfoContainer isLoading={loading}>
         {
            loading && <CircleLoader style={{ position: 'absolute' }} />
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
                           <PersonalName>{state.fullName}</PersonalName>
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
                                 name="nameOfTheCompany"
                                 placeholder="Название предприятия"
                                 label="Название предприятия"
                                 defVal={state.nameOfTheCompany}
                                 inputType="letter"
                                 watch={watch("nameOfTheCompany")}
                                 error={errors.nameOfTheCompany}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="rkpnds"
                                 placeholder="РКП НДС"
                                 label="РКП НДС"
                                 defVal={state.rkpnds}
                                 inputType="anotherThreepleCard"
                                 watch={watch("rkpnds")}
                                 error={errors.rkpnds}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="fullName"
                                 placeholder="Ф.И.О"
                                 label="Ф.И.О"
                                 inputType="letter"
                                 defVal={state.fullName}
                                 watch={watch("fullName")}
                                 error={errors.fullName}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="oked"
                                 placeholder="ОКЭД"
                                 label="ОКЭД"
                                 inputType="anotherThreepleCard"
                                 defVal={state.oked}
                                 watch={watch("oked")}
                                 error={errors.oked}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="phoneNumber"
                                 label="Телефон (мобильный)"
                                 placeholder="Телефон (мобильный)"
                                 defVal={state.phoneNumber}
                                 inputType="phone"
                                 watch={watch("phoneNumber")}
                                 error={errors.phoneNumber}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="bankCode"
                                 placeholder="Код банка"
                                 label="Код банка"
                                 defVal={state.bankCode}
                                 inputType="card"
                                 watch={watch("bankCode")}
                                 error={errors.bankCode}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="homePhoneNumber"
                                 label="Телефон (рабочий )"
                                 placeholder="Телефон (рабочий )"
                                 inputType="phone"
                                 defVal={state.homePhoneNumber}
                                 watch={watch("homePhoneNumber")}
                                 error={errors.homePhoneNumber}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="typeOfOwnership"
                                 placeholder="Форма собственности"
                                 label="Форма собственности"
                                 defVal={state.typeOfOwnership}
                                 watch={watch("typeOfOwnership")}
                                 error={errors.typeOfOwnership}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="email"
                                 placeholder="Эл.почта"
                                 defVal={state.email}
                                 watch={watch("email")}
                                 error={errors.email}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Dropdown
                                 option={['Биометрический паспорт', 'ID-карта Республики Узбекистан', 'Паспорт иностранного гражданина']}
                                 label="Тип удостоверяющего документа"
                                 selected={state.typeOfIdentityDocumentOfSupervisor}
                                 callback={dropdownDocumentHandle} />

                              {/* <Input
                                 name="typeOfIdentityDocumentOfSupervisor"
                                 placeholder="Тип удостоверяющего документа руководител"
                                 label="Тип удостоверяющего документа руководител"
                                 defVal={state.typeOfIdentityDocumentOfSupervisor}
                                 watch={watch("typeOfIdentityDocumentOfSupervisor")}
                                 error={errors.typeOfIdentityDocumentOfSupervisor}
                                 register={register}
                                 setValue={setValue}
                              /> */}
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Dropdown
                                 option={['Супермаркет', 'Супермаркет2']}
                                 selected={state.type}
                                 label="Тип"
                                 callback={dropdownTypeHandle}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="documentSeriesAndNumber"
                                 placeholder={docType}
                                 label={docType}
                                 defVal={state.documentSeriesAndNumber}
                                 watch={watch("documentSeriesAndNumber")}
                                 error={errors.documentSeriesAndNumber}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="bankAccount"
                                 placeholder="Расчетный счет в банке"
                                 label="Расчетный счет в банке"
                                 inputType="card"
                                 defVal={state.bankAccount}
                                 watch={watch("bankAccount")}
                                 error={errors.bankAccount}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 label="Дата выдачи док-та"
                                 name="dateOfIssue"
                                 type="date"
                                 defVal={state.dateOfIssue}
                                 watch={watch("dateOfIssue")}
                                 error={errors.dateOfIssue}
                                 register={register}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Dropdown
                                 option={['Предприниматель', 'Предприниматель2']}
                                 selected={state.kindOfActivity}
                                 label="Вид деятельности"
                                 callback={dropdownActivityHandle}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 label="Срок действия док-та"
                                 name="dateOfExpire"
                                 type="date"
                                 defVal={state.dateOfExpire}
                                 watch={watch("dateOfExpire")}
                                 register={register}
                                 error={errors.dateOfExpire}
                                 setValue={setValue}
                              />
                           </PersonalBodyFlex>
                           <PersonalBodyFlex isEdit={true}>
                              <Input
                                 name="inn"
                                 placeholder="ИНН"
                                 label="ИНН"
                                 inputType="inn"
                                 defVal={state.inn}
                                 watch={watch("inn")}
                                 register={register}
                                 error={errors.inn}
                                 setValue={setValue}
                              />
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