import React from 'react';
import {
  AddTemplate,
  CategoryRowContainer,
  ToAllGoods,
  CatName,
} from './style';
import { Name, No, AllGoods, Template, Actions } from '../style';
import Num from '../../../../../components/num';
import Dots from './dots';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
  menu: any;
  num: number;
  fetchCategory: () => void;
}

const CategoryRow: React.FC<Props> = ({ menu, num, fetchCategory }) => {
  const { path, url } = useRouteMatch();
  const { push } = useHistory();

  // console.log('url', url);
  // console.log('path', path);

  const onClick = () => {
    push('/admin/category/' + menu.id);
  };

  return (
    <CategoryRowContainer>
      <No>
        <Num num={num} />
      </No>

      <Name onClick={onClick}>
        <CatName>{menu.name}</CatName>
      </Name>
      <AllGoods>
        <ToAllGoods>Все товари</ToAllGoods>
      </AllGoods>
      <Template>
        <AddTemplate>Добавить шаблон</AddTemplate>
      </Template>
      <Actions>
        <Dots row={menu} fetchCategory={fetchCategory} />
      </Actions>
    </CategoryRowContainer>
  );
};

export default CategoryRow;
