import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ProtectedRoute from '../protected-route';
import Homepage from '../../pages/homepage';
import Cart from '../../pages/cart';
import Wishlist from '../../pages/wishlist';
import Settings from '../../pages/settings';

import ProductDetail from '../../components/product-detail';

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
        <Route exact path='/product-detail' component={ProductDetail} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/products' component={Products} />
        <ProtectedRoute path='/settings'>
          <Settings />
        </ProtectedRoute>
      </Switch>
    </div>
  );
};

export default Content;
