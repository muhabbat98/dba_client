import React, { FC } from 'react';
import Field from '../../../../components/field';
import ProductTitle from '../../../../components/products-title';

import { AddProductFormItemBodyItem } from './style';

interface ViewForTemplateRecursiveProps {
  item: any;
  //   handleInput: any;
}

const ViewForTemplateRecursive: FC<ViewForTemplateRecursiveProps> = ({
  item,
  //   handleInput,
}) => {
  console.log('item => ', item);
  return (
    <>
      <ProductTitle fSize={16} title={item.name} />
      <AddProductFormItemBodyItem>
        {item.fields.map((j: any) => (
          <Field
            // handleInput={handleInput}
            key={j.id}
            field={j}
            parentId={item.id}
          />
        ))}
      </AddProductFormItemBodyItem>

      {item.products.length > 0 &&
        item.products.map((i: any, index: number) => (
          <ViewForTemplateRecursive
            // handleInput={handleInput}
            key={index}
            item={i}
          />
        ))}
    </>
  );
};

export default ViewForTemplateRecursive;
