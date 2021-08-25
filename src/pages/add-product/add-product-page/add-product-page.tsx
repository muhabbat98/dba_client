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
}

const AddProductPage = () => {
  const { push } = useHistory();
  const { url, path } = useRouteMatch();
  const { checkError } = useError();
  const { id } = useParams<Params>();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<any>([]);
  const [categoryId, setCategoryId] = useState<string>('');

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
        console.log('dddd => ', d);
        if (menu.length > 0) {
          setMenu(d);
        } else {
          push('/seller/add-product-form/' + categoryId + '/' + itemId);
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

  console.log('menu ', menu);

  return (
    <AddProductPageContainer isLoading={isLoading}>
      <Container>
        {isLoading ? (
          <CircleLoader />
        ) : (
          <AddProductPageList>
            {menu.length > 0 &&
              menu.map((item: any, index: number) => (
                <AddProductPageListItem
                  onClick={() => setItemId(item.id)}
                  key={item.id}
                >
                  <ProductOrder>{index + 1}</ProductOrder>
                  <ProductName>{item.name}</ProductName>
                </AddProductPageListItem>
              ))}
          </AddProductPageList>
        )}
      </Container>
    </AddProductPageContainer>
  );
};

export default AddProductPage;
