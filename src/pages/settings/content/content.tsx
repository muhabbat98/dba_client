import React from 'react';
import {
  ProtectedRouteForBuyer,
  ProtectedRouteForSeller,
} from '../../../components/protected-routes';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import PersonalInfo from '../pages/personal-info';
import PersonalInfoForSeller from '../pages/personal-info-for-seller';
import DeliveryAddress from '../pages/delivery-address';
import PersonalData from '../pages/personal-data';
import Payment from '../pages/payment';
import Orders from '../pages/orders';
import OrdersForSeller from '../pages/orders-for-seller';
import Discussion from '../pages/discussion';
import DiscussionForSeller from '../pages/discussion-for-seller';
import MyProducts from '../pages/my-products';
import { ContentContainer } from './style';
import { useRole } from '../../../hooks';

const Content = () => {
  let { path } = useRouteMatch();
  const { isBuyer } = useRole();
  console.log("isBuyer = ", isBuyer)
  console.log("path = ", path)
  return (
    <ContentContainer>
      <Switch>
        <Route exact path={`${path}/`}>
          {isBuyer ? <PersonalInfo /> : <PersonalInfoForSeller />}
        </Route>

        <Route
          exact
          path={`${path}/delivery-address`}
          component={DeliveryAddress}
        />

        <Route
          exact
          path={`${path}/checkoo`}
          component={DeliveryAddress}
        />

        <Route exact path={`${path}/personal-data`} component={PersonalData} />

        <ProtectedRouteForBuyer exact path={`${path}/payment`}>
          <Payment />
        </ProtectedRouteForBuyer>

        <ProtectedRouteForSeller exact path={`${path}/my-products`}>
          <MyProducts />
        </ProtectedRouteForSeller>

        <Route exact path={`${path}/orders`}>
          {isBuyer ? <Orders /> : <OrdersForSeller />}
        </Route>

        <Route exact path={`${path}/discussion`}>
          {isBuyer ? <Discussion /> : <DiscussionForSeller />}
        </Route>
        <Redirect to={`${path}`} />
      </Switch>
    </ContentContainer>
  );
};

export default Content;