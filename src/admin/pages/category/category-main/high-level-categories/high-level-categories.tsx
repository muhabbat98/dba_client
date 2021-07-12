import React from 'react';
import {
  HighLevelCategoriesContainer,
  CategoryRowHeader,
  No,
  Name,
} from './style';
import CategoryHeader from '../../../../components/category-header';
import CategoryRow from '../../../../components/category-row';

interface Props {
  menu: any;
}

const HighLevelCategories: React.FC<Props> = ({ menu }) => {
  console.log(menu);

  return (
    <HighLevelCategoriesContainer>
      <CategoryHeader />
      <CategoryRowHeader>
        <No>№</No>
        <Name>Називания категории</Name>
      </CategoryRowHeader>
      {menu.map((category: any, index: number) => (
        <CategoryRow key={category.id} row={category} num={index + 1} />
      ))}
    </HighLevelCategoriesContainer>
  );
};

export default HighLevelCategories;
