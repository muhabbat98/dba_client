import React from 'react';
import src from './image.png';
import {
  MiddleHeaderActionForSellerContainer,
  Img,
  InfoContainer,
  ProfileContainer,
  ProfilePicture,
  Role,
  Name,
} from './style';

const MiddleHeaderActionForSeller = () => {
  return (
    <MiddleHeaderActionForSellerContainer>
      <ProfileContainer>
        <ProfilePicture>
          <Img src={src} />
        </ProfilePicture>
        <InfoContainer>
          <Name>Азамат Азаматов</Name>
          <Role>Продавец</Role>
        </InfoContainer>
      </ProfileContainer>
    </MiddleHeaderActionForSellerContainer>
  );
};

export default MiddleHeaderActionForSeller;
