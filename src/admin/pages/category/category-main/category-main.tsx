import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { axios, useError } from '../../../../hooks';
import { CategoryMainContainer } from './style';

//marketplace-v1/api/category/{categoryId}

const CategoryMain = () => {
  const [menu, setMenu] = useState(null);
  const { checkError } = useError();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('/category');
    } catch (error) {
      checkError(error);
    }
  };

  return <CategoryMainContainer>CategoryMain</CategoryMainContainer>;
};

export default CategoryMain;
