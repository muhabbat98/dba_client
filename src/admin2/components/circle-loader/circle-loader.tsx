import React from 'react';
import { CircleLoaderContainer, CircleLoaderContainerWrapper } from './style';

interface CircleLoaderProps {
  style?: any;
  loaderClass?: string
}

const CircleLoader:React.FC<CircleLoaderProps> = ({style, loaderClass}) => {
  return (
    <CircleLoaderContainerWrapper  style={style}>
      <CircleLoaderContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </CircleLoaderContainer>
    </CircleLoaderContainerWrapper>
  );
};

export default CircleLoader;
