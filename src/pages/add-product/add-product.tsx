import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axios, useError } from '../../hooks';
import CircleLoader from '../../components/circle-loader';
import Container from '../../components/grid/container';
import { ReactComponent as ListIcon } from '../../assets/icons/ic_tv.svg';
import {
  AddProductContainer,
  AddProductList,
  AddProductItem,
  ItemText,
} from './style';

const AddProduct = () => {
  const { checkError } = useError();
  const { push } = useHistory();

  const [allProduct, setAllProduct] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get('catalog?parentId=');
      const data = await response.data;
      console.log('data => ', data);
      setAllProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  };

  const pageClickHandle = (id: string) => {
    push(`add-product-page/${id}`);
  };

  console.log('allProduct ', allProduct);

  return (
    <Container>
      <AddProductContainer>
        {loading ? (
          <CircleLoader />
        ) : (
          <AddProductList>
            {allProduct.length > 0 &&
              allProduct.map((item: any) => (
                <AddProductItem
                  onClick={() => pageClickHandle(item.id)}
                  key={item.id}
                >
                  <ListIcon />
                  <ItemText>{item.name}</ItemText>
                </AddProductItem>
              ))}
          </AddProductList>
        )}
      </AddProductContainer>
    </Container>
  );
};

export default AddProduct;
