import React from 'react';
import Button from '../../../../../components/button';
import ProductsTitle from '../../../../../components/products-title';
import { ReactComponent as Frame } from './Frame.svg';
import { DefaultPageContainer } from './style';

interface PageProps {
  setOpen?: any;
}
const DefaultPage: React.FC<PageProps> = ({ setOpen }) => {
  return (
    <DefaultPageContainer>
      <Frame />
      <ProductsTitle title="Вы еще не добавили адрес для доставки" />

      <Button onClick={() => setOpen(true)}>Добавить адрес</Button>
    </DefaultPageContainer>
  );
};

export default DefaultPage;
