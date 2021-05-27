import React from 'react';
import {
  SearchContainer,
  SearchCategory,
  SearchCategoryTitle,
  InputContainer,
  SearchButtonContaienr,
  SearchButtonTitle,
  Input,
} from './style';

import { ReactComponent as Arrow } from './arrow.svg';
import { ReactComponent as SearchIcon } from './search.svg';

const Search = () => {
  return (
    <SearchContainer>
      {/* <SearchCategory>
        <SearchCategoryTitle>Везде</SearchCategoryTitle>
        <Arrow />
      </SearchCategory> */}
      <InputContainer>
        <Input placeholder='Я ищу...' />
      </InputContainer>
      <SearchButtonContaienr>
        <SearchIcon />
        <SearchButtonTitle>Найти</SearchButtonTitle>
      </SearchButtonContaienr>
    </SearchContainer>
  );
};

export default Search;
