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
  menus: any;
  fetchMenu: () => void;
}

const HighLevelCategories: React.FC<Props> = ({ menus, fetchMenu }) => {
  return (
    <HighLevelCategoriesContainer>
      <CategoryHeader />
      <CategoryRowHeader>
        <No>№</No>
        <Name>Називания категории</Name>
      </CategoryRowHeader>
      {menus.map((category: any, index: number) => (
        <CategoryRow
          fetchMenu={fetchMenu}
          key={category.id}
          row={category}
          num={index + 1}
        />
      ))}
    </HighLevelCategoriesContainer>
  );
};

export default HighLevelCategories;
