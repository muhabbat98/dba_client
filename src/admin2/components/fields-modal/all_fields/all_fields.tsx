import React, { useEffect, useState } from 'react';
import { axios } from '../../../../hooks';
import Field from '../../../components/field';
import { AllFieldContainer, Empty } from './style';
///meta_data/all/fields/{categoryId}

interface AllFieldProps {
  menu: any;
}

const AllField: React.FC<AllFieldProps> = ({ menu }) => {
  const [fields, setFields] = useState([]);

  const fetchAllFields = async () => {
    const respone = await axios.get(`/meta_data/all/fields/${menu.parentId}`);
    const data = respone.data;
    setFields(data);
  };

  useEffect(() => {
    fetchAllFields();
  }, []);

  console.log(fields);

  return (
    <AllFieldContainer>
      {fields.length > 0 ? (
        fields.map((field: any) => <Field key={field.name} field={field} />)
      ) : (
        <Empty>В этом категорие нет поле</Empty>
      )}
    </AllFieldContainer>
  );
};

export default AllField;
