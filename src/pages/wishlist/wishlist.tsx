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
  //   field={name:'name', format:'format'}

  const field1 = { format: 'STRING', name: 'NameString' };
  const field2 = { format: 'NUMBER', name: 'NameNumber' };
  const field3 = { format: 'DATE', name: 'NameDate' };
  const field4 = {
    format: 'DROPDOWN',
    name: 'NameDropdown',
    list: [1, 2, 3, 4],
  };

  return (
    <WishlistContainer>
      <Field field={field1} />
      <Field field={field2} />
      <Field field={field3} />
      <Field field={field4} />

      {/* <Field format="DATE" fieldNa me="TypeDate" />
      <Field
        format="DROPDOWN"
        fieldName="TypeDate"
        list={['one', 'two', 'three']}
      /> */}

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
