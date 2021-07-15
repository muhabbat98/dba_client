import React from 'react';
import { ForBuyerContainer } from './style';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../homepage';
import {useRole, UserRole} from '../../hooks';
import ForSeller from '../for-seller';
import Wishlist from '../wishlist';
import Products from '../products';
import Cart from '../cart';
import Catalog from '../catalog';
import AddProduct from '../add-product';
import ProductDetail from '../product-detail';
import {
  ProtectedRouteForBuyer,
  ProtectedRouteForSeller,
} from '../../components/protected-routes';
import Settings from '../settings-for-buyer';

const ForBuyer = () => {
  const { path, url } = useRouteMatch();
  console.log('path', path);
  const { isBuyer } = useRole();

  console.log("isBuyer ==> ", isBuyer);
  return (
    <ForBuyerContainer>
      <Switch>
        <Route exact path={`/`} component={Homepage} />
        <Route exact path={`/cart`} component={Cart} />
        <Route exact path={`/wishlist`} component={Wishlist} />
        <Route exact path={`/product-detail/:id`} component={ProductDetail} />
        <Route exact path={`/catalog`} component={Catalog} />
        <Route exact path={`/products`} component={Products} />
        <Route exact path={`/add-product`} component={AddProduct} />
        <ProtectedRouteForBuyer path="/settings">
          <Settings />
        </ProtectedRouteForBuyer>

        <Redirect to="/" />
      </Switch>
    </ForBuyerContainer>
  );
};

export default ForBuyer;
