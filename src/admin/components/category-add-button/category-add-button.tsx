import React from 'react';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { CategoryAddButtonContainer, Title } from './style';
import { useCategory } from '../../pages/category/context';

const CategoryAddButton = () => {
  const { openModal } = useCategory();
  return (
    <CategoryAddButtonContainer onClick={openModal}>
      <Plus /> <Title>Добавить новый</Title>
    </CategoryAddButtonContainer>
  );
};

export default CategoryAddButton;
