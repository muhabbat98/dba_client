import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, useError } from '../../../../hooks';
import ViewForTemplate from '../../../components/view-for-template';
import { TemplateViewContainer } from './style';

interface Params {
  id: string;
}

const TemplateView = () => {
  const { id } = useParams<Params>();
  const { checkError } = useError();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async (id: any) => {
    try {
      const response = await axios.get(
        // '/meta_data/product/611ce4e385b95e6ce633a96d',
        '/meta_data/product/' + id
      );
      const data = await response.data;
      console.log('data ', data);
      setData(data);
    } catch (error) {
      checkError(error);
    }
  };

  console.log('data=> ', data);

  return (
    <TemplateViewContainer>
      {data && <ViewForTemplate data={data} />}
    </TemplateViewContainer>
  );
};

export default TemplateView;
