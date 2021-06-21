import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PersonalInfoEdit from './personal-info-edit';
import Alert from '../../../../components/alert';
import { axios, useActionCreators, useSelector } from '../../../../hooks';
import { AlertPosition } from '../../../../utils/alert-position-enum';

import isEmptyObj from '../../../../utils/isEmptyObj';
import PersonalHeaderLeftSide from './personal-header-left';

import {
  PersonalInfoContainer, PersonalHeader, PersonalHeaderRight,
  ChangeProfileButton, ChangeName, PersonalBody,
  PersonalBodyGrid, PersonalBodyLabel, PersonalBodyName, PersonalBodyFlex
} from './style';

import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';
import CircleLoader from '../../../../components/circle-loader';
import Inputs from '../../../../pages/cart/inputs';
import { useForm, Controller } from "react-hook-form";

const PersonalInfo = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState<any>(null);
  const { setAlertMessage } = useActionCreators();

  const { handleSubmit, reset, setValue, control, register } = useForm();

  useEffect(() => {
    getPersonalInfo('60927f03ad717f2975f9713d');
  }, [state]);

  const getPersonalInfo = async (id: any) => {
    try {
      const response = await axios.get(`/user/${id}`);
      const data = await response.data;
      setPersonalInfo(data);
      setLoading(false);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_CENTER
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_CENTER
        });
      }
    }
  }

  const toggleComponent = () => {
    setState(!state);
  }

  const onSubmit = (data: any) => {
    console.log("getInputData = ", data);
  }

  if (state) {
    return <PersonalInfoEdit toggleComponent={toggleComponent} />
  }

  console.log("personalInfo == ", personalInfo);

  return (
    <PersonalInfoContainer isLoading={loading}>
      {
        loading && <CircleLoader />
      }
      {
        personalInfo && (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Inputs
                inputType='date'
                name="date"
                ref={register}
                {...register("date", { required: true })}
              />
              <input type="text" name="names"  {...register("names", { required: true }) }/>
              <button type="submit">send</button>
            </form>

            <PersonalHeader>
              <PersonalHeaderLeftSide personalInfo={personalInfo} />
              <PersonalHeaderRight>
                <ChangeProfileButton onClick={toggleComponent}>
                  <Edit />
                  <ChangeName>Редактировать профиль</ChangeName>
                </ChangeProfileButton>
              </PersonalHeaderRight>
            </PersonalHeader>
            <PersonalBody>
              <PersonalBodyGrid>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Ф.И.О</PersonalBodyLabel>
                  <PersonalBodyName>
                    {!isEmptyObj(personalInfo) && personalInfo.firstName} {' '}
                    {!isEmptyObj(personalInfo) && personalInfo.secondName}
                  </PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Тип удостоверяющего документа</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.passportType}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Номер телефона(мобильный)</PersonalBodyLabel>
                  <PersonalBodyName>+998 {!isEmptyObj(personalInfo) && personalInfo.phoneNumber}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Номер телефона (домашний)</PersonalBodyLabel>
                  <PersonalBodyName>+998 {!isEmptyObj(personalInfo) && personalInfo.homePhoneNumber}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Электронная почта</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.email}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Серия, номер паспорта (ID-карты)</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.passportNumber}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>ИНН</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.inn}</PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Дата рождения</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && moment(personalInfo.birthday).format('YYYY/MM/DD')} </PersonalBodyName>
                </PersonalBodyFlex>
                <PersonalBodyFlex isEdit={false}>
                  <PersonalBodyLabel>Пол</PersonalBodyLabel>
                  <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.gender}</PersonalBodyName>
                </PersonalBodyFlex>
              </PersonalBodyGrid>
            </PersonalBody>
          </>
        )
      }

    </PersonalInfoContainer>
  );
};

export default PersonalInfo;