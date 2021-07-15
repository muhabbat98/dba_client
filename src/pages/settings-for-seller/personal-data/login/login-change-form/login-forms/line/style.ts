import styled, { keyframes } from 'styled-components';
import { LoginChangeFormSteps } from '../login-forms';

const stepOne = keyframes`
0%{
    width: 0;
}100%{
    width: 25%;
}
`;

const stepTwo = keyframes`
0%{
    width: 25%;
}100%{
    width: 50%;
}
`;

const stepThree = keyframes`
0%{
    width: 50%;
}100%{
    width: 75%;
}
`;

const stepFour = keyframes`
0%{
    width: 75%;
}100%{
    width: 100%;
}
`;

interface ProgressLineProps {
  step: LoginChangeFormSteps;
}

const animationChecker = (step: LoginChangeFormSteps) => {
  switch (step) {
    case LoginChangeFormSteps.PASSWORD:
      return stepOne;
    case LoginChangeFormSteps.PHONE:
      return stepTwo;
    case LoginChangeFormSteps.SMS:
      return stepThree;
    case LoginChangeFormSteps.END:
      return stepFour;
  }
};

const widthChecker = (step: LoginChangeFormSteps) => {
  switch (step) {
    case LoginChangeFormSteps.PASSWORD:
      return '25%';
    case LoginChangeFormSteps.PHONE:
      return '50%';
    case LoginChangeFormSteps.SMS:
      return '75%';
    case LoginChangeFormSteps.END:
      return '100%';
  }
};

export const LineContainer = styled.div`
  background: #eaedf5;
  border-radius: 16px;
  height: 8px;
  position: relative;
  margin-top: 24px;
`;

export const ProgressLine = styled.div<ProgressLineProps>`
  background: ${({ theme: { primary_color } }) => primary_color};
  border-radius: 16px;
  height: 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ step }) => widthChecker(step)};
  animation: ${({ step }) => animationChecker(step)} 0.5s;
`;
