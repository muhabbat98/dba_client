import React from 'react';
import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import { CategoryContainer } from './style';
import {useLocation, useHistory, useParams, useRouteMatch} from 'react-router-dom';

const Products = () => {
   console.log("useLocation == ", useLocation());
   console.log("useHistory == ", useHistory());
   console.log("useParams == ", useParams());
   console.log("useRouteMatch == ", useRouteMatch());

   const s = new URLSearchParams(useLocation().search);
   console.log(s);

   return (
      <CategoryContainer>
         <Container>
            <ProductsTitle title="Мобильные телефоны" />
            <Row>
               <Col xl={3}></Col>
               <Col xl={9}></Col>
            </Row>
         </Container>
      </CategoryContainer>
   )
}

export default Products
