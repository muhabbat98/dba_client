import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import ForSeller from '../../pages/for-seller';
import ProductDetail from '../../pages/product-detail';
import Catalog from '../../pages/catalog';
import Products from '../../pages/products';
import {
  ProtectedRouteForBuyer,
  ProtectedRouteForSeller,
} from '../protected-routes';
import Error404 from '../404';
import Cart from '../../pages/cart';
import Wishlist from '../../pages/wishlist';
import CheckOut from '../../pages/check-out';
import Settings from '../../pages/settings';
import SettingsForBuyer from '../../pages/settings-for-buyer';

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product-detail/:name/:id" component={ProductDetail} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/wishlist" component={Wishlist} />

        <ProtectedRouteForSeller path="/seller">
          <ForSeller />
        </ProtectedRouteForSeller>

        <ProtectedRouteForBuyer path="/settings">
          {/* <Settings /> */}
          <SettingsForBuyer />
        </ProtectedRouteForBuyer>

        <ProtectedRouteForBuyer path="/checkout">
          <CheckOut />
        </ProtectedRouteForBuyer>

        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
