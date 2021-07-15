import React from 'react';
import { HomePageForSellerContainer } from './style';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../homepage';
import { ProtectedRouteForSeller } from '../../components/protected-routes';
import Settings from '../settings-for-seller';

const ForSeller = () => {
  console.log('ForSeller');
  const { path } = useRouteMatch();
  //console.log(match);
  return (
    <HomePageForSellerContainer>
      <Switch>
        <Route exact path={path} component={Homepage} />

        {/*<Route exact path={`/seller/settings`} component={Homepage} />*/}

        <Route exact path={`${path}/settings`} component={Settings} />
        {/*<ProtectedRouteForSeller path="/seller/settings">*/}
        {/*  <Settings />*/}
        {/*</ProtectedRouteForSeller>*/}

        <Redirect to="/seller" />
      </Switch>
    </HomePageForSellerContainer>
  );
};

export default ForSeller;
