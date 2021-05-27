import React from 'react';
import { LineContainer, InnerLine, LineWrapper } from './style';

interface LineProps {
  isSms: boolean;
  isPassword: boolean;
}

const Line: React.FC<LineProps> = ({ isSms, isPassword }) => {
  return (
    <LineContainer>
      <LineWrapper>
        <InnerLine isSms={isSms} isPassword={isPassword}></InnerLine>
      </LineWrapper>
    </LineContainer>
  );
};

export default Line;
