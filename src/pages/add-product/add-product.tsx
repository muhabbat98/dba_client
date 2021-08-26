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

  const [allProduct, setAllProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get('catalog?parentId=');
      const data = await response.data;
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

  return (
    <Container>
      <AddProductContainer>
        {loading ? (
          <CircleLoader />
        ) : (
          <AddProductList>
            {allProduct.map((item: any) => (
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
