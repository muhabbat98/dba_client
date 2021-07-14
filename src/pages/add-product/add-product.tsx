import React, { useEffect, useState } from 'react';

import {
  AddProductContainer,
  AddProductList,
  AddProductItem,
  ItemText,
} from './style';

import { ReactComponent as ListIcon } from '../../assets/icons/ic_tv.svg';
import { axios, useError } from '../../hooks';
import CircleLoader from '../../components/circle-loader';

const AddProduct = () => {
  const { checkError } = useError();

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

  console.log('allProduct = ', allProduct);

  return (
    <AddProductContainer>
      {loading ? (
        <CircleLoader />
      ) : (
        <AddProductList>
          {allProduct.map((item: any) => (
            <AddProductItem>
              <ListIcon />
              <ItemText>{item.name}</ItemText>
            </AddProductItem>
          ))}
        </AddProductList>
      )}
    </AddProductContainer>
  );
};

export default AddProduct;
