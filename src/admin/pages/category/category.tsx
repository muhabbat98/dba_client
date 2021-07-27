import { CategoryProvider } from './context';
import { useParams } from 'react-router-dom';
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

function CategoryWrapper() {
  const { id } = useParams<Params>();
  const [form, setForm] = useState<FormType | null>(null);
  //console.log('params', params);

  useEffect(() => {
    if (id) {
      setForm(FormType.CHILD);
    } else {
      setForm(FormType.PARENT);
    }
  }, [id]);
  return (
    <>
      {form === FormType.PARENT && <CategoryMain />}
      {form === FormType.CHILD && <CategoryPage />}
    </>
  );
}

const Category = () => {
  return (
    <CategoryProvider>
      <CategoryWrapper />
    </CategoryProvider>
  );
};

export default Category;
