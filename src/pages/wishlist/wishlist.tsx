import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import Card from '../../components/card';
import { useSelector } from '../../hooks';
import WishlistEmpty from './wishlist-empty';

import { WishlistContainer } from './style';
import Field from '../../components/field';

function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <WishlistContainer>
      <Field format="STRING" fieldName="TypeString" />
      <Field format="NUMBER" fieldName="TypeNumber" />
      <Field format="DATE" fieldName="TypeDate" />
      <Field format="DROPDOWN" fieldName="TypeDate" list=['one', two', 'three']/>

      <Container>
        <Row>
          <Col>
            <ProductsTitle title="Избранное" />
          </Col>
        </Row>
        <Row>
          {wishlistItems.length == 0 ? (
            <WishlistEmpty />
          ) : (
            wishlistItems.length > 0 &&
            wishlistItems.map((i: any) => {
              return (
                <Col xl={3} key={i.id}>
                  <Card item={i} style={{ marginBottom: '16px' }} />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </WishlistContainer>
  );
}

export default Wishlist;
