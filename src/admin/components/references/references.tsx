import React, { useState, useEffect } from 'react';
import { ReferencesContainer } from './style';
import { axios, useError } from '../../../hooks';
import Error from '../error';
import ReferenceList from './reference-list';
import CircleLoader from '../../../components/circle-loader';

const References = () => {
  const [references, setReferences] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { checkError } = useError();

  useEffect(() => {
    fetchReferences();
  }, []);

  async function fetchReferences() {
    setIsLoading(true);
    try {
      const response = await axios.get('/meta_data/reference');
      const data = await response.data;
      setReferences(data);
      setIsLoading(false);
      setIsError(false);
    } catch (e) {
      checkError(e);
      setIsError(true);
      setIsLoading(false);
    }
  }

  return (
    <ReferencesContainer isLoading={isLoading}>
      {isLoading ? (
        <CircleLoader />
      ) : isError ? (
        <Error callback={() => fetchReferences()} />
      ) : (
        <ReferenceList references={references} />
      )}
    </ReferencesContainer>
  );
};

export default References;
