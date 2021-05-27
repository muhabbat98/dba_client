import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axios, useActionCreators } from '../../../../hooks';
import Refs from './refs';
import RefsItem from './refs-item';
import React from 'react';

import { ReferenceContainer, Content, ReferenceItems, Title } from './style';

interface Reference {
  menu?: any;
}

const Reference: React.FC<Reference> = ({ menu }) => {
  const [referenceList, setReferenceList] = useState([]);
  const [allReferenceList, setAllReferenceList] = useState([]);
  const [allReferenceItems, setAllReferenceItems] = useState([]);
  const [referenceItems, setReferenceItems] = useState([]);
  const [currentRef, setCurrentRef] = useState<any>();
  const { setSnackbarMessage } = useActionCreators();

  const fetchReferences = async (reload?: boolean) => {
    try {
      const response = await axios.get('/meta_data/reference');
      const data = await response.data;
      setCurrentRef(null);
      if (reload) {
        const current = data.find((r: any) => r.id === currentRef.id);
        console.log('current', current);
        setCurrentRef(current);
        fetchItems(current.id);
      }
      setAllReferenceList(data);
      setReferenceList(data);
    } catch (error) {
      setSnackbarMessage({ message: error.message, type: 'error' });
    }
  };

  const fetchItems = async (id: string) => {
    try {
      const response = await axios.get(
        menu.parentId
          ? `/meta_data/reference_item/${menu.parentId}/${id}`
          : `/meta_data/reference_item/${id}`
      );
      const data = await response.data;
      setReferenceItems(data);
      setAllReferenceItems(data);
    } catch (error) {
      setSnackbarMessage({ message: error.message + '12', type: 'error' });
    }
  };

  useEffect(() => {
    fetchReferences();
  }, []);

  const addReference = async (name: string) => {
    try {
      const response = await axios.post('/meta_data/reference', name, {
        headers: {
          'Content-Type': 'text/plain ',
        },
      });
      const data = await response.data;
      setSnackbarMessage({ message: data.message, type: 'success' });
      setCurrentRef(null);
      fetchReferences();
    } catch (error) {
      setSnackbarMessage({ message: error.message, type: 'error' });
    }
  };

  const addReferenceItem = async (name: string) => {
    try {
      const response = await axios.post('/meta_data/reference_item', {
        name: name, // Reference item name
        parentId: currentRef.id, // qaysi referencega qo'shilsa o'shani idsi
        categoryId: menu.parentId, // qaysi categorydan turip qo'shilayotgan bo'lsa usha category idsi
      });
      const data = await response.data;
      setSnackbarMessage({ message: data.message, type: 'success' });
      fetchReferences(true);
    } catch (error) {
      setSnackbarMessage({ message: error.message, type: 'error' });
    }
  };

  const handleReference = async (ref: any) => {
    setCurrentRef(ref);
    fetchItems(ref.id);
  };

  const addItem = async (id: string) => {
    try {
      const response = await axios.put('/meta_data/reference_item', {
        referenceItemsId: [id], // qo'shilyapdan reference item idlari
        removedReferenceItemsId: [], // qo'shilyapdan reference item idlari
        categoryId: menu.parentId, // qaysi categorydan turip qo'shilayotgan bo'lsa usha category idsi
      });
      const data = await response.data;
      fetchReferences(true);
    } catch (error) {
      setSnackbarMessage({ message: error.message, type: 'error' });
    }
  };

  const removeItem = async (id: string) => {
    try {
      const response = await axios.put('/meta_data/reference_item', {
        referenceItemsId: [], // qo'shilyapdan reference item idlari
        removedReferenceItemsId: [id], // qo'shilyapdan reference item idlari
        categoryId: menu.parentId, // qaysi categorydan turip qo'shilayotgan bo'lsa usha category idsi
      });
      const data = await response.data;
      fetchReferences(true);
    } catch (error) {
      setSnackbarMessage({ message: error.message, type: 'error' });
    }
  };

  const deleteReference = (id: string) => {
    setReferenceList(referenceList.filter((r: any) => r.id !== id));
    setReferenceItems([]);
    setCurrentRef(null);
  };

  const updateReference = (id: string, name: string) => {
    const copyReferenceList = [...referenceList];
    const changedReferences: any = copyReferenceList.map((r: any) => {
      if (r.id === id) {
        const copyRef = { ...r };
        copyRef.name = name;
        fetchItems(copyRef.id);
        return copyRef;
      }

      return r;
    });

    setReferenceList(changedReferences);
  };

  const searchReference = (name: string) => {
    if (name.length > 0) {
      setReferenceList(
        allReferenceList.filter(
          (r: any) => r.name.toLowerCase().search(name.toLowerCase()) !== -1
        )
      );
    } else {
      setReferenceList(allReferenceList);
    }
  };

  const searchReferenceItem = (name: string) => {
    if (name.length > 0) {
      setReferenceItems(
        allReferenceItems.filter(
          (r: any) => r.name.toLowerCase().search(name.toLowerCase()) !== -1
        )
      );
    } else {
      setReferenceItems(allReferenceItems);
    }
  };

  const deleteReferenceItems = (id: string) => {
    setReferenceItems(referenceItems.filter((r: any) => r.id !== id));
  };

  const updateReferenceItems = (id: string, name: string) => {
    const copyReferenceItems = [...referenceItems];
    const changedReferenceItems: any = copyReferenceItems.map((r: any) => {
      if (r.id === id) {
        const copyRef = { ...r };
        copyRef.name = name;
        return copyRef;
      }
      return r;
    });

    setReferenceItems(changedReferenceItems);
  };

  return (
    <ReferenceContainer>
      <Content>
        <Refs
          addReference={addReference}
          handleReference={handleReference}
          currentRef={currentRef}
          referenceList={referenceList}
          deleteReference={deleteReference}
          updateReference={updateReference}
          searchReference={searchReference}
        />

        {currentRef && (
          <RefsItem
            searchReferenceItem={searchReferenceItem}
            removeItem={removeItem}
            addItem={addItem}
            addReferenceItem={addReferenceItem}
            currentRef={currentRef}
            referenceItem={referenceItems}
            deleteReferenceItems={deleteReferenceItems}
            updateReferenceItems={updateReferenceItems}
          />
        )}
      </Content>
    </ReferenceContainer>
  );
};

Reference.defaultProps = {
  menu: {
    parentId: null,
  },
};

export default Reference;
