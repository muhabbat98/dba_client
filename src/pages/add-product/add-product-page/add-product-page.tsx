import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router';
import CircleLoader from '../../../components/circle-loader';
import Container from '../../../components/grid/container';
import { axios, useError } from '../../../hooks';
import {
  AddProductPageContainer,
  AddProductPageList,
  AddProductPageListItem,
  ProductOrder,
  ProductName,
} from './style';

interface Params {
  id: string;
  categoryId: string;
  productId: string;
}

const AddProductPage = () => {
  const { push, replace } = useHistory();
  const { url, path } = useRouteMatch();
  const { checkError } = useError();
  const { id, productId, categoryId } = useParams<Params>();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<any>([]);
  const [categoryIds, setCategoryId] = useState<string>('');
  const [isSecond, setIsSecond] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await getChildMenuItem(id);
    })();
  }, [id]);

  const getChildMenuItem = async (ids?: string) => {
    setLoading(true);
    let itemId = ids || id;

    try {
      const response = await axios.get('catalog?parentId=' + itemId);
      const data = await response.data;
      if (data.length > 0) {
        setMenu(data);
        setCategoryId(itemId);
      } else {
        const res = await axios.get(`/meta_data/products/${itemId}`);
        const d = await res.data;
        console.log('d => ', d);
        console.log('categoryIds => ', categoryIds);

        // if (menu.length > 0) {
        //   setMenu(d);
        // } else {
        //   if (categoryIds != '') {
        //     replace('/seller/add-product-form/' + categoryIds + '/' + itemId);
        //   }
        // }

        if (d.length > 0) {
          setMenu(d);
          setIsSecond(true);
          // alert('1');
        } else if (d.length == 0 && !isSecond && categoryIds != '') {
          setMenu([]);
          // alert('2');
        } else {
          // alert('ddddd');
          replace('/seller/add-product-form/' + categoryIds + '/' + itemId);
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  };

  const setItemId = async (id: string) => {
    await getChildMenuItem(id);
    push(`${id}`);
  };

  return (
    <AddProductPageContainer isLoading={isLoading}>
      <Container>
        {isLoading ? (
          <CircleLoader />
        ) : menu.length > 0 ? (
          <AddProductPageList>
            {menu.map((item: any, index: number) => (
              <AddProductPageListItem
                onClick={() => setItemId(item.id)}
                key={item.id}
              >
                <ProductOrder>{index + 1}</ProductOrder>
                <ProductName>{item.name}</ProductName>
              </AddProductPageListItem>
            ))}
          </AddProductPageList>
        ) : (
          <h1 style={{ fontSize: '30px' }}>Здесь нет темплета!</h1>
        )}
      </Container>
    </AddProductPageContainer>
  );
};

export default AddProductPage;
