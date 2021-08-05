import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PersonalInfoEdit from './personal-info-edit';
import { axios, useError } from '../../../hooks';

import isEmptyObj from '../../../utils/isEmptyObj';
import PersonalHeaderLeftSide from './personal-header-left';

import {
    PersonalInfoContainer, PersonalHeader, PersonalHeaderRight,
    ChangeProfileButton, ChangeName, PersonalBody,
    PersonalBodyGrid, PersonalBodyLabel, PersonalBodyName, PersonalBodyFlex
} from './style';

import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import CircleLoader from '../../../components/circle-loader';

const PersonalInfo = () => {
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [personalInfo, setPersonalInfo] = useState<any>(null);
    const [docType, setDocType] = useState<any>('');

    const { checkError } = useError();

    useEffect(() => {
        getPersonalInfo('60927f03ad717f2975f9713d');

    }, [state]);

    const setDocTypeHandler = (data: any) => {
        let text;
        if (data == 'Биометрический паспорт') {
            text = 'Серия номер биометрического распорта';
        } else if (data == 'ID-карта Республики Узбекистан') {
            text = 'Серия номер ID-карты Республики Узбекистан';
        } else if (data == 'Паспорт иностранного гражданина') {
            text = 'Серия номер паспорта иностранного гражданина';
        }

        setDocType(text);
    }

    const getPersonalInfo = async (id: any) => {
        try {
            const response = await axios.get(`/user/${id}`);
            const data = await response.data;
            setDocTypeHandler(data.passportType);
            setPersonalInfo(data);
            setLoading(false);
        } catch (error) {
            checkError(error);
        }
    }

    const toggleComponent = () => {
        setState(!state);
    }

    if (state) {
        return <PersonalInfoEdit toggleComponent={toggleComponent} />
    }

    return (
        <PersonalInfoContainer isLoading={loading}>
            {
                loading && <CircleLoader style={{ position: 'absolute' }} />
            }
            {
                !isEmptyObj(personalInfo) && (
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
                                    <PersonalBodyLabel>Ф.И.О</PersonalBodyLabel>
                                    <PersonalBodyName>
                                        {personalInfo.firstName} {' '}
                                        {personalInfo.secondName}
                                    </PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Тип удостоверяющего документа</PersonalBodyLabel>
                                    <PersonalBodyName>{personalInfo.passportType}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Номер телефона(мобильный)</PersonalBodyLabel>
                                    <PersonalBodyName>+998 {personalInfo.phoneNumber}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Номер телефона (рабочий )</PersonalBodyLabel>
                                    <PersonalBodyName>+998 {personalInfo.homePhoneNumber}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Электронная почта</PersonalBodyLabel>
                                    <PersonalBodyName>{personalInfo.email}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>{docType}</PersonalBodyLabel>
                                    <PersonalBodyName>{personalInfo.passportNumber}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>ИНН</PersonalBodyLabel>
                                    <PersonalBodyName>{personalInfo.inn}</PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Дата рождения</PersonalBodyLabel>
                                    <PersonalBodyName>{moment(personalInfo.birthday).format('YYYY/MM/DD')} </PersonalBodyName>
                                </PersonalBodyFlex>
                                <PersonalBodyFlex isEdit={false}>
                                    <PersonalBodyLabel>Пол</PersonalBodyLabel>
                                    <PersonalBodyName>{personalInfo.gender}</PersonalBodyName>
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