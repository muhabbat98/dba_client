import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/left-arrow.svg';
import { BackContainer, ArrowContainer } from './style';
import { useHistory, useLocation } from 'react-router-dom';

const Back = () => {
  const { goBack } = useHistory();
  return (
    <BackContainer>
      <ArrowContainer onClick={goBack}>
        <Arrow />
      </ArrowContainer>
    </BackContainer>
  );
};

export default Back;
