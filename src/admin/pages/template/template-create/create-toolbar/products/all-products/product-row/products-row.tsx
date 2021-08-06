import React from 'react';
import { ProductsRowContainer, Num, Name, Action } from './style';
import { ReactComponent as ActionIcon } from './avtion.svg';
import Checkbox from '../../../../../../../../components/checkbox';

interface Props {
  product: any;
  num: number;
}

const ProductsRow: React.FC<Props> = ({ product, num }) => {
  return (
    <ProductsRowContainer>
      <Num>{num}</Num>
      <Checkbox />
      <Name>{product.name}</Name>
      <Action>
        <ActionIcon />
      </Action>
    </ProductsRowContainer>
  );
};

export default ProductsRow;
