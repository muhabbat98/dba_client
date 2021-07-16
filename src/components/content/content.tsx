import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import ForSeller from '../../pages/for-seller';
import ForBuyer from '../../pages/for-buyer';
import ProductDetail from '../../pages/product-detail';
import Catalog from '../../pages/catalog';
import Products from '../../pages/products';
import {
  ProtectedRouteForBuyer,
  ProtectedRouteForSeller,
} from '../protected-routes';

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product-detail/:id" component={ProductDetail} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/products" component={Products} />

        <ProtectedRouteForSeller path="/seller">
          <ForSeller />
        </ProtectedRouteForSeller>

        <ProtectedRouteForBuyer path="/settings">
          <ForBuyer />
        </ProtectedRouteForBuyer>

        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
