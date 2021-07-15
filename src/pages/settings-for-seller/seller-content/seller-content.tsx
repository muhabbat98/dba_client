import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { SellerContentContainer } from './style';

import PersonalInfoForSeller from '../personal-info-for-seller';
import DeliveryAddress from '../delivery-address';
import PersonalData from '../personal-data';
import MyProducts from '../my-products';
import Orders from '../orders-for-seller';
import DiscussionForSeller from '../discussion-for-seller';

const SellerContent = () => {
  let { path } = useRouteMatch();

  console.log("path == ", path);

  return (
    <SellerContentContainer>
      <Switch>
        <Route
            exact
            path={`${path}/`}
            component={PersonalInfoForSeller} />

        <Route
          exact
          path={`${path}/delivery-address`}
          component={DeliveryAddress}
        />

        <Route
            exact
            path={`${path}/personal-data`}
            component={PersonalData} />

        <Route
            exact
            path={`${path}/my-products`}
            component={MyProducts} />

        <Route
            exact
            path={`${path}/orders`}
            component={Orders} />

        <Route
          exact
          path={`${path}/discussion`}
          component={DiscussionForSeller}
        />

        <Redirect to={`${path}`} />
      </Switch>
    </SellerContentContainer>
  );
};

export default SellerContent;
