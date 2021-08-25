import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios, useError } from '../../../../hooks';

import { TemplateListContainer, Empty } from './style';
import TemplateListWrapper from './template-list-wrapper/template-list-wrapper';
import Header from './header';
import { useMainContext } from '../../main/context';

interface Params {
  id: string;
}

const TemplateList = () => {
  const { id } = useParams<Params>();
  const [templates, setTemplates] = useState<any[]>([]);
  const { checkError } = useError();
  const { setPageTitle } = useMainContext();

  useEffect(() => {
    setPageTitle('Список шаблонов');
    (async () => {
      try {
        const response = await axios.get(`/meta_data/products/${id}`);
        const data = await response.data;
        setTemplates(data);
      } catch (e) {
        checkError(e);
      }
    })();
  }, []);

  return (
    <TemplateListContainer>
      <Header />
      {templates.length === 0 ? (
        <Empty>Нет шаблонов</Empty>
      ) : (
        <>
          <TemplateListWrapper templates={templates} />
        </>
      )}
    </TemplateListContainer>
  );
};

export default TemplateList;
