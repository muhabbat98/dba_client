import { CategoryProvider } from './context';
import { useRouteMatch, useLocation, useParams } from 'react-router-dom';

import CategoryMain from './category-main';
import CategoryPage from './category-children';
import { useEffect, useState } from 'react';

interface Params {
  id: string;
}

enum FormType {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
}

const Category = () => {
  const { id } = useParams<Params>();
  const [form, setForm] = useState<FormType>(FormType.PARENT);
  //console.log('params', params);

  useEffect(() => {
    if (id) {
      setForm(FormType.CHILD);
    } else {
      setForm(FormType.PARENT);
    }
  }, [id]);

  return (
    <CategoryProvider>
      {form === FormType.PARENT && <CategoryMain />}
      {form === FormType.CHILD && <CategoryPage />}
    </CategoryProvider>
  );
};

export default Category;
