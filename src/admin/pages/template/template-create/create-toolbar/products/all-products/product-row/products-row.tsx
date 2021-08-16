import React from 'react';
import { ProductsRowContainer, Num, Name, Action } from './style';
import { ReactComponent as ActionIcon } from './avtion.svg';
import Checkbox from '../../../../../../../../components/checkbox';
import { useTemplateCreate } from '../../../../context';

interface Props {
  product: any;
  num: number;
}

const ProductsRow: React.FC<Props> = ({ product, num }) => {
  const { addProduct } = useTemplateCreate();
  const check = () => {
    addProduct(product);
  };
  return (
    <ProductsRowContainer>
      <Num>{num}</Num>
      <Checkbox callback={check} />
      <Name>{product.name}</Name>
      <Action>
        <ActionIcon />
      </Action>
    </ProductsRowContainer>
  );
};

export default ProductsRow;
