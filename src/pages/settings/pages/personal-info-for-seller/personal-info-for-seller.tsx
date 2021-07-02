import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PersonalInfoEdit from './personal-info-edit';
import { axios, useActionCreators, useSelector } from '../../../../hooks';
import { AlertPosition } from '../../../../utils/alert-position-enum';
import PersonalHeaderLeftSide from './personal-header-left';

import {
  PersonalInfoContainer,
  PersonalHeader,
  PersonalHeaderRight,
  ChangeProfileButton,
  ChangeName,
  PersonalBody,
  PersonalBodyGrid,
  PersonalBodyLabel,
  PersonalBodyName,
  PersonalBodyFlex,
} from './style';

import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';
import CircleLoader from '../../../../components/circle-loader';

const PersonalInfo = () => {
  const [state, setState] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { setAlertMessage } = useActionCreators();

  useEffect(() => {
    getPersonalInfo('60cb25a8fdf13d0065176014');
  }, [state]);

  const getPersonalInfo = async (id: any) => {
    try {
      const response = await axios.get(`/user/${id}`);
      const data = await response.data;
      setLoading(false);
      setPersonalInfo(data);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_CENTER,
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_CENTER,
        });
      }
    }
  };

  const toggleComponent = () => {
    setState(!state);
  };

  console.log("State personalInfo = ", personalInfo)

  if (state) {
    return <PersonalInfoEdit toggleComponent={toggleComponent} />;
  }

  return (
    <PersonalInfoContainer isLoading={loading}>
      {
        loading && <CircleLoader style={{ position: 'absolute' }} />
      }

      {
        personalInfo &&
        <>
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
                <PersonalBodyLabel>Название предприятия</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.nameOfTheCompany}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>РКП НДС</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.rkpnds}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Ф.И.О руководителя</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.fullName}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>ОКЭД</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.oked}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Номер телефона(мобильный)</PersonalBodyLabel>
                <PersonalBodyName>
                  {personalInfo.phoneNumber}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Код банка</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.bankCode}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Номер телефона (рабочий )</PersonalBodyLabel>
                <PersonalBodyName>
                  {personalInfo.homePhoneNumber}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Форма собственности</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.typeOfOwnership}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Электронная почта</PersonalBodyLabel>
                <PersonalBodyName>
                  {personalInfo.email}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Тип удостоверяющего документа</PersonalBodyLabel>
                <PersonalBodyName>
                  {personalInfo.typeOfIdentityDocumentOfSupervisor}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Тип</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.type}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Серия и номер документа</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.documentSeriesAndNumber}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Расчетный счет в банке</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.bankAccount}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Дата выдачи док-та</PersonalBodyLabel>
                <PersonalBodyName>
                  {moment(personalInfo.dateOfIssue).format('YYYY/MM/DD')}{' '}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Вид деятельности</PersonalBodyLabel>
                <PersonalBodyName>{personalInfo.kindOfActivity}</PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Срок действия док-та</PersonalBodyLabel>
                <PersonalBodyName>
                  {moment(personalInfo.dateOfExpire).format('YYYY/MM/DD')}{' '}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>ИНН</PersonalBodyLabel>
                <PersonalBodyName>
                  {personalInfo.inn}
                </PersonalBodyName>
              </PersonalBodyFlex>

            </PersonalBodyGrid>
          </PersonalBody>
        </>
      }
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
