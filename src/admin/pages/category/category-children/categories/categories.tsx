import React, { useState } from 'react';
import {
  CategoriesContainer,
  CategoryRowHeader,
  No,
  Name,
  AllGoods,
  Actions,
  NoSign,
  CatName,
  AllGoodsTitle,
  TemplateTitle,
  Template,
} from './style';

import CategoryRow from './category-row';
import CategoryHeader from '../../../../components/category-header';
import Empty from '../../../../components/empty';
import AddCategory from '../../../../components/add-category';

interface Props {
  menus: any;
  fetchCategory: () => void;
}

const Categories: React.FC<Props> = ({ menus, fetchCategory }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <CategoriesContainer>
      {}
      <AddCategory />
      <CategoryHeader />
      {menus.length !== 0 && (
        <CategoryRowHeader>
          <No>
            <NoSign>№</NoSign>
          </No>
          <Name>
            <CatName>Називания категории</CatName>
          </Name>
          <AllGoods>
            <AllGoodsTitle>Все товари</AllGoodsTitle>
          </AllGoods>
          <Template>
            <TemplateTitle>Добавить шаблон</TemplateTitle>
          </Template>
          <Actions> </Actions>
        </CategoryRowHeader>
      )}

      {menus.length === 0 ? (
        <Empty
          callback={() => console.log()}
          title="Нет категории"
          btnTitle="Добавить категория"
        />
      ) : (
        menus.map((menu: any, index: number) => (
          <CategoryRow
            num={index + 1}
            menu={menu}
            fetchCategory={fetchCategory}
          />
        ))
      )}
    </CategoriesContainer>
  );
};

export default Categories;
