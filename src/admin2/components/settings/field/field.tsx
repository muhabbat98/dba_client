import React, { useEffect, useState } from 'react';
import { axios } from '../../../../hooks';
import { FieldContainer } from './style';

interface Fields {
  parentId: string;
}

const Field: React.FC<Fields> = ({ parentId }) => {
  const [primitiveTypes, setPrimitiveTypes] = useState<any>(null);

  const fetchPrimitiveTypes = async () => {
    try {
      const response = await axios.get('/meta_data/primitive_types');
      const data = await response.data;
    } catch (error) {}
  };

  const fetchFields = async () => {
    try {
      const response = await axios.get(`/meta_data/all/fields/${parentId}`);
      const data = await response.data;
    } catch (error) {}
  };

  useEffect(() => {
    fetchPrimitiveTypes();
    fetchFields();
  }, []);

  return <FieldContainer>Change</FieldContainer>;
};

export default Field;
