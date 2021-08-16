import { useParams } from 'react-router-dom';
import { CategoryProvider, useCategory } from './context';
import CategoryMain from './category-main';
import CategoryPage from './category-children';
import React, { useEffect, useState } from 'react';
import AddCategory from '../../components/add-category';

interface Params {
  id: string;
}

enum FormType {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
}

function CategoryWrapper() {
  const { id } = useParams<Params>();
  const {
    state: { open },
  } = useCategory();

  const [form, setForm] = useState<FormType | null>(null);

  useEffect(() => {
    if (id) {
      setForm(FormType.CHILD);
    } else {
      setForm(FormType.PARENT);
    }
  }, [id]);

  return (
    <>
      {open && <AddCategory />}
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
