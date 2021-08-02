import { FC } from 'react';
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

interface PersonalHeaderLeftSideProps {
  personalInfo?: any;
}

const PersonalHeaderLeftSide: FC<PersonalHeaderLeftSideProps> = ({
  personalInfo,
}) => {

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
          {!isEmptyObj(personalInfo) && personalInfo.fullName}
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
