import React, { useEffect } from 'react';
import References from '../../components/references';
import { ReferencesPageContainer } from './style';
import { useMainContext } from '../main/context';

const ReferencesPage = () => {
  const { setPageTitle } = useMainContext();

  useEffect(() => {
    setPageTitle('Справочники');
  }, []);

  return (
    <ReferencesPageContainer>
      <References />
    </ReferencesPageContainer>
  );
};

export default ReferencesPage;
