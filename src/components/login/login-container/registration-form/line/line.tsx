import React from 'react';
import { LineContainer, InnerLine, LineWrapper } from './style';

interface LineProps {
  isSms: boolean;
}

const Line: React.FC<LineProps> = ({ isSms }) => {
  return (
    <LineContainer>
      <LineWrapper>
        <InnerLine isSms={isSms}></InnerLine>
      </LineWrapper>
    </LineContainer>
  );
};

export default Line;
