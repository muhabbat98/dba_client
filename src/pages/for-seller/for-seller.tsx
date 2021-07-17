import React from 'react';
import { HomePageForSellerContainer } from './style';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Settings from '../settings-for-seller';
import Erro404 from '../../components/404';
import AddProduct from '../add-product';

const ForSeller = () => {
  const { path } = useRouteMatch();

  return (
    <HomePageForSellerContainer>
      <Switch>
        <Route exact path={path} render={() => <h1>Seller</h1>} />
        <Route path={`${path}/settings`} component={Settings} />
        <Route path={`${path}/add-product`} component={AddProduct} />
        <Route path="*">
          <Erro404 />
        </Route>
      </Switch>
    </HomePageForSellerContainer>
  );
};

export default ForSeller;
