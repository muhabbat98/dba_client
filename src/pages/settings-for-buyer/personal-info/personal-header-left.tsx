import React, { FC } from 'react';
import isEmptyObj from '../../../utils/isEmptyObj';

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

import Avatar from '../../../assets/images/personal-info-avatar.png';
import { ReactComponent as Verified } from '../../../assets/icons/verified.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface PersonalHeaderLeftSideProps {
  personalInfo?: any;
}

const PersonalHeaderLeftSide: FC<PersonalHeaderLeftSideProps> = ({
  personalInfo,
}) => {

  const [width, height] = useWindowSize();
  console.log('width=>', width);

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
        {
          width >= 768 ? (
            <PersonalVerified>
              <Verified />
              <PersonalVerifiedToggle>Зарегистрирован</PersonalVerifiedToggle>
            </PersonalVerified>
          ) : null
        }
      </PersonalNameWrapper>
    </PersonalHeaderLeft>
  );
};

export default PersonalHeaderLeftSide;