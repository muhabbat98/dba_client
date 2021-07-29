import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../../../../hooks';
import MainLoader from '../../../../components/main-loader';
import Error from '../../../components/error';
import Categories from './categories';
import { CategoryChildrenContainer } from './style';
import add_category from '../../../../admin2/components/fields-modal/add_category/add_category';

interface Params {
  id: string;
}

const CategoryChildren = () => {
  const { id } = useParams<Params>();

  const [menus, setMenus] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`/catalog?parentId=${id}`);
      const data = await response.data;
      setMenus(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      //checkError(error);
      setError(true);
      setLoading(false);
    }
  };

  const add_category = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`/catalog?parentId=${id}`);
      const data = await response.data;
      setMenus(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      //checkError(error);
      setError(true);
      setLoading(false);
    }
  };

  const isLoading = error || loading;

  return (
    <CategoryChildrenContainer loading={isLoading}>
      {loading ? (
        <MainLoader />
      ) : error ? (
        <Error callback={fetchCategory} />
      ) : (
        <Categories menus={menus} fetchCategory={fetchCategory} />
      )}
    </CategoryChildrenContainer>
  );
};

export default CategoryChildren;
