import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  Box,
  BoxContainer,
} from './style';

import CategoryRow from './category-row';
import CategoryHeader from '../../../../components/category-header';
import Empty from '../../../../components/empty';
import AddCategory from '../../../../components/add-category';
import { axios } from '../../../../../hooks';

interface Props {
  menus: any;
  fetchCategory: () => void;
}
interface Params {
  id: string;
}

const Categories: React.FC<Props> = ({ menus, fetchCategory }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [image, setImage] = useState<any>();
  const { push } = useHistory();
  const { id } = useParams<Params>();

  const openAddModal = () => {};

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'images/test/60eecf7e41876e336bb858b7'
        );
        const data = await response.data;
        setImage(data);
      } catch (e) {}
    })();
  }, []);

  return (
    <CategoriesContainer>
      {/*<AddCategory />*/}
      <CategoryHeader />
      {/*{image && (*/}
      {/*  <img*/}
      {/*    src={`data:${image.contentType};base64,${image.body}`}*/}
      {/*    alt={'hnjk'}*/}
      {/*  />*/}
      {/*)}*/}
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
        <BoxContainer>
          <Box onClick={() => push('/admin/template/list/' + id)}>Шаблоны</Box>
          <Box onClick={() => push('/admin/template/list/' + id)}>Товары</Box>
          <Box>Добавить категории</Box>
        </BoxContainer>
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
