import React from 'react';
import { RowContainer } from './style';

interface RowProps {
  style?: any;
  isMobile?: boolean;
}

const Row: React.FC<RowProps> = ({ style, isMobile, children }) => {
  return (
    <RowContainer isMobile={isMobile} style={style}>
      {children}
    </RowContainer>
  );
};

export default Row;
