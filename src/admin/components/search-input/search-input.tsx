import React, { FC } from 'react';

import { SearchInputBox, SearchInputItem } from './style';

import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';


interface SearchInputProps {
   label?: string;
   callback?: (ev: any) => void
}

const SearchInput: FC<SearchInputProps> = ({ label, callback }) => {
   return (
      <SearchInputBox>
         <SearchInputItem onChange={callback} placeholder={label} />
         <Search />
      </SearchInputBox>
   );
}

export default SearchInput;
