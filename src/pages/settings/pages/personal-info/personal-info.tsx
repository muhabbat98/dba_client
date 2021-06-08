import React, { useState, useEffect } from 'react';

import PersonalInfoEdit from './personal-info-edit';
import Alert from '../../../../components/alert';
import { axios, useActionCreators, useSelector } from '../../../../hooks';
import { AlertPosition } from '../../../../utils/alert-position-enum';

import isEmptyObj from '../../../../utils/isEmptyObj';
import PersonalHeaderLeftSide from './personal-header-left';

import {
  PersonalInfoContainer, PersonalHeader, PersonalHeaderLeft, PersonalHeaderRight, PersonalAvatar,
  PersonalAvatarImg, PersonalNameWrapper, PersonalName, PersonalNameEmail, ChangeProfileButton, ChangeName, PersonalBody,
  PersonalBodyGrid, PersonalBodyLabel, PersonalBodyName, PersonalBodyFlex, PersonalVerified, PersonalVerifiedToggle
} from './style';

import Avatar from '../../../../assets/images/personal-info-avatar.png';
import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';
import { ReactComponent as Verified } from '../../../../assets/icons/verified.svg';
// import Avatar2 from '../../../../assets/images/tiger2.jpg';

const PersonalInfo = () => {
  const [state, setState] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<any>({});
  const { setAlertMessage } = useActionCreators();

  useEffect(() => {
    getPersonalInfo('60927f03ad717f2975f9713d');
  }, [state]);

  const getPersonalInfo = async (id: any) => {
    try {
      const response = await axios.get(`/user/${id}`);
      const data = await response.data;
      setPersonalInfo(data);
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


  if (state) {
    return <PersonalInfoEdit toggleComponent={toggleComponent} />
  }

  return (
    <PersonalInfoContainer>
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
            <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.phoneNumber}</PersonalBodyName>
          </PersonalBodyFlex>
          <PersonalBodyFlex isEdit={false}>
            <PersonalBodyLabel>Номер телефона (домашний)</PersonalBodyLabel>
            <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.homePhoneNumber}</PersonalBodyName>
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
            <PersonalBodyName>27/08/2000</PersonalBodyName>
          </PersonalBodyFlex>
          <PersonalBodyFlex isEdit={false}>
            <PersonalBodyLabel>Пол</PersonalBodyLabel>
            <PersonalBodyName>{!isEmptyObj(personalInfo) && personalInfo.gender}</PersonalBodyName>
          </PersonalBodyFlex>
        </PersonalBodyGrid>
      </PersonalBody>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;