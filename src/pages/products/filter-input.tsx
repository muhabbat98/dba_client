import React, { FC } from 'react';
import { Input, FilterInputContainer } from './style';
import { ReactComponent as FilterIcon } from '../../assets/icons/search-filter.svg';
import { rest } from 'lodash';

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const FilterInput: FC<FilterInputProps> = ({ ...rest }) => {
   return (
      <FilterInputContainer>
         <Input {...rest} />
         <FilterIcon />
      </FilterInputContainer>
   )
}

export default FilterInput
