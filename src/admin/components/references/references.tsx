import React, { useState, useEffect } from 'react';
import { ReferencesContainer, ReferencesWrapper } from './style';
import { axios, useError } from '../../../hooks';
import Error from '../error';
import ReferenceList from './reference-list';
import CircleLoader from '../../../components/circle-loader';
import ChangeReference from './change-reference';

const References = () => {
  const [references, setReferences] = useState<any[]>([]);
  const [referenceItems, setReferencesItems] = useState<any[]>([]);
  const [currentReference, setCurrentReference] = useState<any[]>([]);
  const [editModal, setEditModal] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { checkError } = useError();

  useEffect(() => {
    (async () => {
      const firstChild = await fetchReferences();
      await fetchReferenceItems(firstChild);
    })();
  }, []);

  async function fetchReferences() {
    setIsLoading(true);
    try {
      const response = await axios.get('/meta_data/reference');
      const data = await response.data;
      setReferences(data);
      setIsLoading(false);
      setIsError(false);
      return data[0];
    } catch (e) {
      checkError(e);
      setIsError(true);
      setIsLoading(false);
    }
  }

  async function fetchReferenceItems(row: any) {
    try {
      const response = await axios.get(`/meta_data/reference_item/${row.id}`);
      const data = await response.data;
      setReferencesItems(data);
      setCurrentReference(row);
    } catch (e) {
      checkError(e);
    }
  }

  const closeModal = () => setEditModal(false);
  const openModal = () => setEditModal(true);

  return (
    <ReferencesContainer isLoading={isLoading}>
      <ChangeReference onClose={closeModal} row={{}} />
      {isLoading ? (
        <CircleLoader />
      ) : isError ? (
        <Error callback={() => fetchReferences()} />
      ) : (
        <ReferencesWrapper>
          <ReferenceList
            references={references}
            fetchReferenceItems={fetchReferenceItems}
            currentReference={currentReference}
            isParent={true}
          />
          <ReferenceList
            references={referenceItems}
            currentReference={currentReference}
          />
        </ReferencesWrapper>
      )}
    </ReferencesContainer>
  );
};

export default References;
