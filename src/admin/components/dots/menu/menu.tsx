import React from 'react';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { ReactComponent as Trash } from '../../../assets/icons/trash-black.svg';
import { MenuContainer, MenuItem, IconContainer, Title } from './style';

interface Props {
  deleteCategory: () => void;
}

const Menu: React.FC<Props> = ({ deleteCategory }) => {
  return (
    <MenuContainer>
      {/*<MenuItem>*/}
      {/*  <IconContainer>*/}
      {/*    <Edit />*/}
      {/*  </IconContainer>*/}
      {/*  <Title>Изменить</Title>*/}
      {/*</MenuItem>*/}
      <MenuItem onClick={deleteCategory}>
        <IconContainer>
          <Trash />
        </IconContainer>
        <Title>Удалить</Title>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
