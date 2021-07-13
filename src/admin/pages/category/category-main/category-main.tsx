import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { axios, useError } from '../../../../hooks';
import { CategoryMainContainer } from './style';
import CircleLoader from '../../../../components/main-loader';
import HighLevelCategories from './high-level-categories';
import Error from '../../../components/error';

//marketplace-v1/api/category/{categoryId}

const CategoryMain = () => {
  const [menus, setMenus] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  //const { checkError } = useError();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get('/catalog?parentId=');
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
    <CategoryMainContainer loading={isLoading}>
      {loading ? (
        <CircleLoader />
      ) : error ? (
        <Error callback={fetchMenu} />
      ) : (
        <HighLevelCategories menus={menus} fetchMenu={fetchMenu} />
      )}
    </CategoryMainContainer>
  );
};

export default CategoryMain;
