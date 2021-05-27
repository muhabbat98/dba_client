import React from 'react';
import {RowContainer} from './style';

interface RowProps{
   style?: any
}

const Row: React.FC<RowProps> = ({style, children}) => {
   return (
      <RowContainer style={style}>
         {children}
      </RowContainer>
   );
}

export default Row;
