import React from 'react';
import { ContainerWraper } from './style';

interface ContainerProps {
  style?: any;
}

const Container: React.FC<ContainerProps> = ({ style, children }) => {
  return <ContainerWraper style={style}>{children}</ContainerWraper>;
};

export default Container;
