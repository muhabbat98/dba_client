import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import ProtectedRoute from '../protected-route';
import Homepage from '../../pages/homepage';
import Cart from '../../pages/cart';
import Wishlist from '../../pages/wishlist';
import Settings from '../../pages/settings';

import ProductDetail from '../../pages/product-detail';

import Catalog from '../../pages/catalog';
import Products from '../../pages/products';

const Content = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path} component={Homepage} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/wishlist' component={Wishlist} />
        <Route exact path='/product-detail/:id' component={ProductDetail} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/products' component={Products} />
        <ProtectedRoute path='/settings'>
          <Settings />
        </ProtectedRoute>
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default Content;
