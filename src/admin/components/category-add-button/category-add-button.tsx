import React from 'react';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { CategoryAddButtonContainer, Title } from './style';

const CategoryAddButton = () => {
  return (
    <CategoryAddButtonContainer>
      <Plus /> <Title>Добавить новый</Title>
    </CategoryAddButtonContainer>
  );
};

export default CategoryAddButton;
