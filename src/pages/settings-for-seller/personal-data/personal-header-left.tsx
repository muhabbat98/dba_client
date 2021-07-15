import React, { FC } from 'react';
import {
  PersonalHeaderLeft,
  PersonalAvatar,
  PersonalAvatarImg,
  PersonalNameWrapper,
  PersonalName,
  PersonalNameEmail,
  PersonalVerified,
  PersonalVerifiedToggle,
} from './style';

import Avatar from '../../../../assets/images/personal-info-avatar.png';
import { ReactComponent as Verified } from '../../../../assets/icons/verified.svg';
import isEmptyObj from '../../../utils/isEmptyObj';

interface PersonalHeaderLeftSideProps {
  personalInfo?: any;
}

const PersonalHeaderLeftSide: FC<PersonalHeaderLeftSideProps> = ({
  personalInfo,
}) => {
  console.log('personalInfo == ', personalInfo);

  return (
    <PersonalHeaderLeft>
      <PersonalAvatar>
        <PersonalAvatarImg
          src={
            !isEmptyObj(personalInfo) && personalInfo.imageUrl
              ? personalInfo.imageUrl
              : Avatar
          }
        />
      </PersonalAvatar>
      <PersonalNameWrapper>
        <PersonalName>
          {!isEmptyObj(personalInfo) && personalInfo.firstName}{' '}
          {!isEmptyObj(personalInfo) && personalInfo.secondName}
        </PersonalName>
        <PersonalNameEmail>
          {!isEmptyObj(personalInfo) && personalInfo.email}
        </PersonalNameEmail>
        <PersonalVerified>
          <Verified />
          <PersonalVerifiedToggle>Зарегистрирован</PersonalVerifiedToggle>
        </PersonalVerified>
      </PersonalNameWrapper>
    </PersonalHeaderLeft>
  );
};

export default PersonalHeaderLeftSide;
