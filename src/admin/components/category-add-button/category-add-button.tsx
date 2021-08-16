import React from 'react';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { CategoryAddButtonContainer, Title } from './style';
import { useCategory } from '../../pages/category/context';
import { useParams } from 'react-router-dom';

const CategoryAddButton = () => {
  const { openModal } = useCategory();
  const { id } = useParams<{ id: string }>();
  return (
    <CategoryAddButtonContainer
      onClick={() => openModal({ id: id, callback: () => console.log(11) })}
    >
      <Plus /> <Title>Добавить новый</Title>
    </CategoryAddButtonContainer>
  );
};

export default CategoryAddButton;
