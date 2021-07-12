import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryHeaderContainer, Paths, Action } from './style';
import SearchInput from '../search-input';
import CategoryAddButton from '../category-add-button';

const CategoryHeader = () => {
  const search = (e: any) => {};

  return (
    <CategoryHeaderContainer>
      <Paths>
        <Link to="/">Категории</Link>
      </Paths>
      <Action>
        <SearchInput label="Искать категории ..." callback={search} />
        <CategoryAddButton />
      </Action>
    </CategoryHeaderContainer>
  );
};

export default CategoryHeader;
