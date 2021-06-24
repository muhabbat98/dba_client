import React, { FC } from 'react';
import { Spinner, SpinnerContainer } from './style';

interface CircleLoader {
  style?: any
}

const CircleLoader: FC<CircleLoader> = ({ style }) => {
  return (
    <SpinnerContainer style={style}>
      <Spinner viewBox='0 0 50 50'>
        <circle cx='25' cy='25' r='20' fill='none' stroke-width='5'></circle>
      </Spinner>
    </SpinnerContainer>
  );
}

export default CircleLoader;
