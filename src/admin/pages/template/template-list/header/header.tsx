import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ReactComponent as Plus } from '../../../../assets/icons/plus.svg';
import { HeaderContainer, AddButton, Title } from './style';

interface Params {
  id: string;
}

const Header = () => {
  const { id } = useParams<Params>();
  const { push } = useHistory();
  return (
    <HeaderContainer>
      <AddButton onClick={() => push('/admin/template/create/' + id)}>
        <Plus />
        <Title>Добавить шаблон</Title>
      </AddButton>
    </HeaderContainer>
  );
};

export default Header;
