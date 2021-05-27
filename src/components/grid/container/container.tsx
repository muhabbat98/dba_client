import React from 'react';
import { ContainerWraper } from './style';

const Container: React.FC = ({ children }) => {
   return (
      <ContainerWraper>
         {children}
      </ContainerWraper>
   );
}

export default Container;
