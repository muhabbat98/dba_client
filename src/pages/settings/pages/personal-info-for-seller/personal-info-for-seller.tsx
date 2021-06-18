import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PersonalInfoEdit from './personal-info-edit';
import Alert from '../../../../components/alert';
import { axios, useActionCreators, useSelector } from '../../../../hooks';
import { AlertPosition } from '../../../../utils/alert-position-enum';

import isEmptyObj from '../../../../utils/isEmptyObj';
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
    getPersonalInfo('60927f03ad717f2975f9713d');
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

  if (state) {
    return <PersonalInfoEdit toggleComponent={toggleComponent} />;
  }

  return (
    <PersonalInfoContainer isLoading={loading}>
      {
        loading && <CircleLoader />
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
                <PersonalBodyName>
                  Sherin
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>РКП НДС</PersonalBodyLabel>
                <PersonalBodyName>
                  1200 3256
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Ф.И.О руководителя</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.firstName}{' '}
                  {!isEmptyObj(personalInfo) && personalInfo.secondName}
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>ОКЭД</PersonalBodyLabel>
                <PersonalBodyName>
                  6540 3210 5487 2200
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Номер телефона(мобильный)</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.phoneNumber}
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Код банка</PersonalBodyLabel>
                <PersonalBodyName>
                  1403 2102 5547 7965
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Номер телефона (домашний)</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.homePhoneNumber}
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Форма собственности</PersonalBodyLabel>
                <PersonalBodyName>
                  Не указан
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Электронная почта</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.email}
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Тип удостоверяющего документа</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.passportType}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Тип</PersonalBodyLabel>
                <PersonalBodyName>
                  Супермаркет
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>
                  Серия и номер документа
                </PersonalBodyLabel>
                <PersonalBodyName>
                  Не указан
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Расчетный счет в банке</PersonalBodyLabel>
                <PersonalBodyName>
                  1420 0030 2000 6552
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Дата выдачи док-та</PersonalBodyLabel>
                <PersonalBodyName>
                  27/08/2016
                  {/* {!isEmptyObj(personalInfo) &&
                moment(personalInfo.birthday).format('YYYY/MM/DD')}{' '} */}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>
                  Вид деятельности
                </PersonalBodyLabel>
                <PersonalBodyName>
                  Предприниматель
                </PersonalBodyName>
              </PersonalBodyFlex>
              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>Срок действия док-та</PersonalBodyLabel>
                <PersonalBodyName>
                  27/08/2016
                  {/* {!isEmptyObj(personalInfo) &&
                moment(personalInfo.birthday).format('YYYY/MM/DD')}{' '} */}
                </PersonalBodyName>
              </PersonalBodyFlex>

              <PersonalBodyFlex isEdit={false}>
                <PersonalBodyLabel>ИНН</PersonalBodyLabel>
                <PersonalBodyName>
                  {!isEmptyObj(personalInfo) && personalInfo.inn}
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
