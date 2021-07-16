import React from 'react';
import { HomePageForSellerContainer } from './style';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Settings from '../settings-for-seller';

const ForSeller = () => {
  const { path } = useRouteMatch();

  return (
    <HomePageForSellerContainer>
      <Switch>
        <Route exact path={path} render={() => <h1>Seller</h1>} />
        <Route path={`${path}/settings`} component={Settings} />
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </HomePageForSellerContainer>
  );
};

export default ForSeller;
