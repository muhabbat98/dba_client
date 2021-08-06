import React from 'react';
import { AllProductsContainer, Header, Name, Num } from './style';
import AllProductsRow from './product-row';
import Checkbox from '../../../../../../../components/checkbox';

interface Props {
  products: any[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <AllProductsContainer>
      <Header>
        <Num>ID</Num>
        <Name>Название продукта</Name>
      </Header>
      {products.map((product, index) => (
        <AllProductsRow product={product} num={index + 1} />
      ))}
    </AllProductsContainer>
  );
};

export default AllProducts;
