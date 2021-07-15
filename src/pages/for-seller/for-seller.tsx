import React from 'react';
import { HomePageForSellerContainer } from './style';
import {Redirect, Route, Switch} from "react-router-dom";
import Homepage from "../homepage";
import {ProtectedRouteForSeller} from "../../components/protected-routes";
import Settings from "../settings-for-seller";

const ForSeller = () => {

  return <HomePageForSellerContainer>
    <Switch>
      <Route exact path={`/seller`} component={Homepage} />

      {/*<Route exact path={`/seller/settings`} component={Homepage} />*/}

      <ProtectedRouteForSeller path="/seller/settings">
        <Settings />
      </ProtectedRouteForSeller>

      <Redirect to="/seller" />
    </Switch>
  </HomePageForSellerContainer>;
};

export default ForSeller;