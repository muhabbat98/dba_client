import React from 'react';
import { LoginChangeFormSteps } from '../login-forms';
import { LineContainer, ProgressLine } from './style';

interface Props {
  step: LoginChangeFormSteps;
}

const Line: React.FC<Props> = ({ step }) => {
  return (
    <LineContainer>
      <ProgressLine step={step} />
    </LineContainer>
  );
};

export default Line;
