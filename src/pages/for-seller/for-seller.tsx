import React from 'react';
import { HomePageForSellerContainer } from './style';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Settings from '../settings-for-seller';
import Error404 from '../../components/404';
import AddProduct from '../add-product';
import MainPageForSeller from '../main-page-for-seller';

const ForSeller = () => {
  const { path } = useRouteMatch();

  return (
    <HomePageForSellerContainer>
      <Switch>
        <Route exact path={path} component={MainPageForSeller} />
        <Route path={`${path}/settings`} component={Settings} />
        <Route path={`${path}/add-product`} component={AddProduct} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </HomePageForSellerContainer>
  );
};

export default ForSeller;
