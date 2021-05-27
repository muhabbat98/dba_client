import React from 'react'
import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import Card from '../../components/card';
import { useActionCreators, useSelector } from '../../hooks';

import { WishlistContainer, WishlistWrapperRow, WishlistWrapperCol } from './style';

function Wishlist() {
   const { wishlistItems } = useSelector((state) => state.wishlist);
   console.log('Wishlist = ', wishlistItems);

   return (
      <WishlistContainer>
         <Container>
            <Row>
               <Col>
                  <ProductsTitle title="Избранное" />
               </Col>
            </Row>
            <Row>
               {
                  wishlistItems.length > 0 && wishlistItems.map((i: any) => {
                     return (
                        <Col xl={3} key={i.id}>
                           <Card item={i} style={{marginBottom: '16px'}}/>
                        </Col>
                     )
                  }
                  )
               }

            </Row>
         </Container>
      </WishlistContainer>
   )
}

export default Wishlist

