import React, { FC } from 'react';
import Field from '../../../components/field';
import ProductTitle from '../../../components/products-title';

import { AddProductFormItemBodyItem } from './style';

interface AddProductFormItemProps {
  item: any;
  handleInput: any;
  isReset: number;
  isAddProduct: boolean;
}

const AddProductFormItem: FC<AddProductFormItemProps> = ({
  item,
  handleInput,
  isReset,
  isAddProduct,
}) => {
  return (
    <>
      <ProductTitle fSize={16} title={item.name} />
      <AddProductFormItemBodyItem>
        {item.fields.map((j: any) => (
          <Field
            isReset={isReset}
            handleInput={handleInput}
            key={j.id}
            field={j}
            parentId={item.id}
            isAddProduct={isAddProduct}
          />
        ))}
      </AddProductFormItemBodyItem>

      {item.products.length > 0 &&
        item.products.map((i: any, index: number) => (
          <AddProductFormItem
            handleInput={handleInput}
            key={index}
            item={i}
            isReset={isReset}
            isAddProduct={isAddProduct}
          />
        ))}
    </>
  );
};

export default AddProductFormItem;
