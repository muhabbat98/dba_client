import React from 'react';
import { useSelector } from '../../../hooks';
import LineLoader from '../line-loader';

import { ReactComponent as ErrorLogo } from '../../assets/icons/error.svg';
import {
  LContainer,
  LoaderContainer,
  StepLoaderContainer,
  StepLoader_Bar,
  StepLoader_Ball,
  Error,
} from './style';

function StepLoader() {
  const { error, loading } = useSelector((state) => state.loadingError);

  return loading !== false || error !== null ? (
    <LContainer>
      <LoaderContainer>
        {loading && error === null ? <LineLoader /> : null}
        {loading && error === null ? (
          <StepLoaderContainer>
            <StepLoader_Bar />
            <StepLoader_Bar />
            <StepLoader_Bar />
            <StepLoader_Bar />
            <StepLoader_Bar />
            <StepLoader_Ball />
          </StepLoaderContainer>
        ) : (
          <Error>
            <ErrorLogo />
            <h2>{error}</h2>
          </Error>
        )}
      </LoaderContainer>
    </LContainer>
  ) : null;
}

export default StepLoader;
