import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { CategoryContainer } from './style';

interface Params {
  id: string;
}

const CategoryChildren = () => {
  const { id } = useParams<Params>();
  const history = useHistory();
  const location = useLocation();

  // console.log(params);
  console.log(history);
  console.log(location);

  return (
    <CategoryContainer>
      Category: {id}
      <p>{JSON.stringify(queryString.parse(location.search))}</p>
    </CategoryContainer>
  );
};

export default CategoryChildren;
