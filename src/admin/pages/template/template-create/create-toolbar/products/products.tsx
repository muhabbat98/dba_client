import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContainer } from './style';
import { axios, useActionCreators, useError } from '../../../../../../hooks';
import AllProducts from './all-products';

interface Props {
  active: boolean;
}

interface Params {
  id: string;
}

const Products: React.FC<Props> = ({ active }) => {
  const [products, setProducts] = useState<any[]>([]);
  const { id } = useParams<Params>();
  const { checkError } = useError();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/meta_data/products/${id}`);
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      checkError(error);
    }
  };
  return (
    <ProductsContainer active={active}>
      <AllProducts products={products} />
    </ProductsContainer>
  );
};

export default Products;
