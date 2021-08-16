import React from 'react';
import { ViewContainer } from './style';
import { useTemplateCreate, ViewType } from '../context';

const View = () => {
  const {
    state: { viewType },
  } = useTemplateCreate();
  return (
    <ViewContainer isActive={viewType === ViewType.TEMPLATE_VIEW}>
      View wafwefwe
    </ViewContainer>
  );
};

export default View;
