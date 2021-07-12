import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { axios, useError } from '../../../../hooks';
import { CategoryMainContainer } from './style';
import CircleLoader from '../../../../components/main-loader';
import HighLevelCategories from './high-level-categories';

//marketplace-v1/api/category/{categoryId}

const CategoryMain = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { checkError } = useError();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/catalog?parentId=');
      const data = await response.data;
      setMenu(data);
      setLoading(false);
    } catch (error) {
      checkError(error);
    }
  };

  return (
    <CategoryMainContainer loading={loading}>
      {loading ? <CircleLoader /> : <HighLevelCategories menu={menu} />}
    </CategoryMainContainer>
  );
};

export default CategoryMain;
