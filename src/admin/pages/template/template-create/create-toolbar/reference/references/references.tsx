import React, { useState, useEffect } from 'react';
import { ReferencesContainer, ReferencesWrapper } from './style';
import { axios, useError } from '../../../../../../../hooks';
import Error from '../../../../../../components/error';
import ReferenceList from './reference-list';
import CircleLoader from '../../../../../../../components/circle-loader';
import ChangeReference from './change-reference';

interface Props {
  fetFields: any;
}

const References: React.FC<Props> = ({ fetFields }) => {
  const [references, setReferences] = useState<any[]>([]);
  const [referenceItems, setReferencesItems] = useState<any[]>([]);
  const [currentReference, setCurrentReference] = useState<any>(null);
  const [editModal, setEditModal] = useState<any>({
    open: false,
    row: {},
    isAdding: false,
    isParent: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { checkError } = useError();

  useEffect(() => {
    (async () => {
      const firstChild = await fetchReferences();
      if (firstChild) {
        await fetchReferenceItems(firstChild);
        setCurrentReference(firstChild);
      }
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
      if (data[0]) {
        fetchReferenceItems(data[0]);
      } else {
        setCurrentReference(null);
      }
      return data[0];
    } catch (e) {
      checkError(e);
      setIsError(true);
      setIsLoading(false);
    }
  }

  async function fetchReferenceItems(
    row: any,
    isDeletedFetch?: boolean,
    currentReferenceRow?: any
  ) {
    try {
      const response = await axios.get(
        `/meta_data/reference_item/${
          isDeletedFetch ? currentReferenceRow.id : row.id
        }`
      );
      const data = await response.data;
      setReferencesItems(data);
      if (!isDeletedFetch) {
        setCurrentReference(row);
      }
    } catch (e) {
      checkError(e);
    }
  }

  const closeModal = () =>
    setEditModal((prevState: any) => {
      return {
        open: false,
        row: {},
        isAdding: false,
        isParent: false,
      };
    });

  const openModal = (isAdding: boolean, row: any, isParent?: boolean) => {
    setEditModal((prevState: any) => {
      return {
        open: true,
        isAdding: isAdding,
        row: row,
        isParent,
      };
    });
  };

  return (
    <ReferencesContainer isLoading={isLoading}>
      {editModal.open && (
        <ChangeReference
          currentReference={currentReference}
          fetchReferences={fetchReferences}
          onClose={closeModal}
          data={editModal}
          fetchReferenceItems={fetchReferenceItems}
        />
      )}

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
            openModal={openModal}
            fetchReferences={fetchReferences}
          />
          {currentReference && (
            <ReferenceList
              references={referenceItems}
              currentReference={currentReference}
              openModal={openModal}
              fetchReferenceItems={fetchReferenceItems}
              fetchReferences={fetchReferences}
              fetFields={fetFields}
            />
          )}
        </ReferencesWrapper>
      )}
    </ReferencesContainer>
  );
};

export default References;
